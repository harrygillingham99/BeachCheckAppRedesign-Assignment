import React from "react";
import { View } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/styles";
import { SearchBar } from "react-native-elements";
import { GetLocation } from "../utils/Locator";
import { MapValues } from "../types/MapValues";
import {
  DefaultLatDelta,
  DefaultLongDelta,
  InitialMapLocation,
  PostcodeRegex,
  SearchBarMessages,
} from "../utils/Constants";

const componentId: ComponentRegistry = ComponentRegistry.SearchMap;

const styles = GetStyle(componentId);

const ValidateSearchInput = (input?: string): String | undefined => {
  const PostcodeExpression = new RegExp(PostcodeRegex);

  if (input === null || input === undefined) {
    return undefined;
  }

  input = input.replaceAll(" ", "");

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
}

export const SearchMap = ({UpdateMap}: SearchBarProps) => {
  const [state, setState] = React.useState<SearchBarState>({
    search: "",
    validationMessage: SearchBarMessages.Default,
  });

  const SetSearch = (searchText: string) => setState({ search: searchText });

  const doSearch = () => {
    if (state.search === "") {
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

  return (
    <View>
      <SearchBar
        placeholder={state.validationMessage ?? SearchBarMessages.Default}
        onChangeText={SetSearch}
        value={state.search}
        onSubmitEditing={doSearch}
      ></SearchBar>
    </View>
  );
};
