import React, {Dispatch, SetStateAction}  from "react";
import { View, Button } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/styles";
import { SearchBar } from "react-native-elements";
import { GetLocation } from "../utils/locator";
import { MapValues } from "../types/MapValues";

const componentId: ComponentRegistry = ComponentRegistry.Footer;

const styles = GetStyle(componentId);

interface SearchBarProps {
  UpdateMap: React.Dispatch<React.SetStateAction<MapValues>
  >;
}

export const SearchMap = (props: SearchBarProps) => {
  const [search, setSearch] = React.useState<string>();

  const doSearch =  async () => {
    var searchTerm = search ?? ""
     GetLocation(searchTerm).then(response => {
        props.UpdateMap(new MapValues(response.result.latitude, response.result.longitude))})
  };

  return (
    <View style={styles.footer}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
        onSubmitEditing={doSearch}
      ></SearchBar>
    </View>
  );
};
