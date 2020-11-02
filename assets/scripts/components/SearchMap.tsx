import React from "react";
import { View } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { SearchBar } from "react-native-elements";
import { GetLocation } from "../utils/Locator";
import { MapValues } from "../types/MapValues";
import {
  DefaultLatDelta,
  DefaultLongDelta,
  InitialMapLocation,
  MockBeachItem,
  MockData,
  PostcodeRegex,
  SearchBarMessages,
} from "../utils/Constants";
import { FlatList } from "react-native-gesture-handler";
import { MapContainer } from "../state/MapState";
import { RowItem } from "./RowItem";

const componentId: ComponentRegistry = ComponentRegistry.SearchMap;

const ValidateSearchInput = (input?: string): String | undefined => {
  const PostcodeExpression = new RegExp(PostcodeRegex);

  if (input === null || input === undefined) {
    return undefined;
  }

  input = input.replace(" ", "");

  if (PostcodeExpression.test(input ?? "") === false) {
    return undefined;
  }
  return input;
};

interface SearchBarProps {
  UpdateMap: React.Dispatch<React.SetStateAction<MapValues>>;
}

interface SearchBarState {
  search?: string;
  validationMessage?: string;
  listFilterData?: MockBeachItem[];
}

export const SearchMap = ({ UpdateMap }: SearchBarProps) => {
  const [state, setState] = React.useState<SearchBarState>({
    search: "",
    validationMessage: SearchBarMessages.Default,
    listFilterData: [],
  });
  const { setLocation } = MapContainer.useContainer();

  const SetSearch = (searchText: string) => {
    setState({
      search: searchText,
      listFilterData: MockData.filter((x) => x.beachName.includes(searchText)),
    });
  };

  const doSearch = () => {
    if (state.search === "") {
      setState({ listFilterData: [] });
      UpdateMap(InitialMapLocation);
    }

    const searchInput = ValidateSearchInput(state.search);

    if (searchInput === undefined) {
      setState({ validationMessage: SearchBarMessages.ValidationError });
      return;
    }

    GetLocation(state.search)
      .then((response) => {
        UpdateMap(
          new MapValues(
            response.result.latitude,
            response.result.longitude,
            DefaultLatDelta,
            DefaultLongDelta
          )
        );
      })
      .then(() => setState({ validationMessage: undefined }))
      .catch(() =>
        setState({ validationMessage: SearchBarMessages.Exception })
      );
  };

  const onSearchItemPress = (key: number) => {
    const { latitude, longitude } =
      MockData.find((x) => x.beachKey == key) ?? InitialMapLocation;
    setState({ listFilterData: undefined });
    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: DefaultLatDelta,
      longitudeDelta: DefaultLongDelta,
    });
  };
  return (
    <View>
      <SearchBar
        placeholder={state.validationMessage ?? SearchBarMessages.Default}
        onChangeText={SetSearch}
        value={state.search}
        onSubmitEditing={doSearch}
      ></SearchBar>
      <FlatList
        data={state.listFilterData}
        renderItem={({ item }) => (
          <RowItem
            key={item.beachKey}
            beachName={item.beachName}
            onPress={() => onSearchItemPress(item.beachKey)}
          />
        )}
      ></FlatList>
    </View>
  );
};
