import React from "react";
import { View } from "react-native";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/Styles";
import { SearchBar } from "react-native-elements";
import { GetLocation } from "../utils/Locator";
import { MapValues } from "../types/MapValues";

const componentId: ComponentRegistry = ComponentRegistry.SearchMap;

var validationMessage: string | undefined;

const styles = GetStyle(componentId);

const ValidateSearchInput = (input: string): boolean => {
  //Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
  const PostcodeExpression = new RegExp(
    "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})"
  );
  return PostcodeExpression.test(input);
};

interface SearchBarProps {
  UpdateMap: React.Dispatch<React.SetStateAction<MapValues>>;
}

export const SearchMap = (props: SearchBarProps) => {
  const [search, setSearch] = React.useState<string>("");

  const doSearch = async () => {
    if (!ValidateSearchInput(search)) {
      setSearch("");
      validationMessage = "Enter a valid postcode";
      return;
    }

    GetLocation(search)
      .then((response) => {
        props.UpdateMap(
          new MapValues(response.result.latitude, response.result.longitude)
        );
      })
      .then(() => (validationMessage = undefined))
      .catch(() => (validationMessage = "An error occured..."));
  };

  return (
    <View style={styles.footer}>
      <SearchBar
        placeholder={validationMessage ?? "Type Here..."}
        onChangeText={setSearch}
        value={search}
        onSubmitEditing={doSearch}
      ></SearchBar>
    </View>
  );
};
