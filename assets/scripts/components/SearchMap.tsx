import React from "react";
import { View } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/Styles";
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

var validationMessage: string | undefined;

const styles = GetStyle(componentId);

const ValidateSearchInput = (input: string): boolean => {
  const PostcodeExpression = new RegExp(PostcodeRegex);
  return PostcodeExpression.test(input);
};

interface SearchBarProps {
  UpdateMap: React.Dispatch<React.SetStateAction<MapValues>>;
}

export const SearchMap = (props: SearchBarProps) => {
  const [search, setSearch] = React.useState<string>("");

  const doSearch = async () => {
    if (search === "") {
      props.UpdateMap(InitialMapLocation);
    }
    if (!ValidateSearchInput(search)) {
      setSearch("");
      validationMessage = SearchBarMessages.ValidationError;
      return;
    }

    GetLocation(search)
      .then((response) => {
        props.UpdateMap(
          new MapValues(
            response.result.latitude,
            response.result.longitude,
            DefaultLatDelta,
            DefaultLongDelta
          )
        );
      })
      .then(() => (validationMessage = undefined))
      .catch(() => (validationMessage = SearchBarMessages.Exception));
  };

  return (
    <View style={styles.footer}>
      <SearchBar
        placeholder={validationMessage ?? SearchBarMessages.Default}
        onChangeText={setSearch}
        value={search}
        onSubmitEditing={doSearch}
      ></SearchBar>
    </View>
  );
};
