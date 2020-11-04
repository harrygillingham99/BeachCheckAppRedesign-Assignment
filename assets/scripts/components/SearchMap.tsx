import React from "react";
import { View, FlatList } from "react-native";
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
import { MapContainer } from "../state/MapState";
import { RowItem } from "./RowItem";

/* 
This is a custom search component used in the map screen. It will filter a flat list of beaches as the user searches and will search by postcode using Locator.ts when enter is pressed.    
*/

/* 
This method will validate and attempt to clean a postcode input before calling the api. 
*/
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
  UpdateMap: React.Dispatch<React.SetStateAction<MapValues>>; // a function reference to update the location state for the map
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
      listFilterData:
        searchText == ""
          ? []
          : MockData.filter((x) => x.beachName.includes(searchText)), // if there is no search text don't display any items
    });
  };

  /* 
  This method is called on enter being pressed from the search bar.
  It uses GetLocation from Locator.ts to call postcodes.io to get latitude and longitude
  Then updates the map location in state with those values
  */
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

  /* 
  This method is called when a beach row item is selected from the search. 
  It will use the beachKey associated to the row item to resolve the location 
  from MockData. Then set the map location state to these values.
  */
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
        keyExtractor={(item) => item.beachKey.toString()}
        renderItem={({ item }) => (
          <RowItem
            key={item.beachKey}
            beachName={item.beachName}
            riskLevel={item.riskLevel}
            isSearchList={true}
            onPress={() => onSearchItemPress(item.beachKey)}
          />
        )}
      ></FlatList>
    </View>
  );
};
