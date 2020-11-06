import React from "react";
import { View, FlatList, Text, TextPropTypes } from "react-native";
import { SearchBar, Tooltip } from "react-native-elements";
import { GetLocation } from "../utils/Locator";
import { MapValues } from "../types/MapValues";
import {
  DefaultLatDelta,
  DefaultLongDelta,
  InitialMapLocation,
  MockData,
  SearchBarMessages,
} from "../utils/Constants";
import { MapContainer } from "../state/MapState";
import { RowItem } from "./RowItem";
import { SearchContainer } from "../state/SearchBarState";
import { BCPPurple, HeaderStyles } from "../utils/Styles";

/* 
This is a custom search component used in the map screen. It will filter a flat list of beaches as the user searches and will search by postcode using Locator.ts when enter is pressed.    
*/

export const SearchMap = () => {
  const {
    state,
    setState,
    ValidateSearchInput,
  } = SearchContainer.useContainer();

  const { setLocation } = MapContainer.useContainer();

  /*
  This is a reference to a search tooltip, used to show the tooltip when you hit a validation error
  */
  const validationTooltipRef = React.useRef<Tooltip | null>(null);

  const showTooltip = () => validationTooltipRef.current?.toggleTooltip();

  const SetSearch = (searchText: string) => {
    const trimmedSearch = searchText.trim();
    setState({
      search: searchText,
      listFilterData:
        trimmedSearch == ""
          ? []
          : MockData.filter((x) => x.beachName.includes(trimmedSearch)), // if there is no search text don't display any items
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
      setLocation(InitialMapLocation);
    }

    const searchInput = ValidateSearchInput(state.search);

    if (searchInput === undefined) {
      setState({ validationMessage: SearchBarMessages.ValidationError });
      showTooltip();
      return;
    }

    GetLocation(state.search)
      .then(({ result }) => {
        setLocation(
          new MapValues(
            result.latitude,
            result.longitude,
            DefaultLatDelta,
            DefaultLongDelta
          )
        );
      })
      .then(() => setState({ validationMessage: undefined }))
      .catch(() => {
        setState({ validationMessage: SearchBarMessages.Exception });
        showTooltip();
      });
  };

  /* 
  This method is called when a beach row item is selected from the search. 
  It will use the beachKey associated to the row item to resolve the location 
  from MockData. Then set the map location state to these values.
  */
  const onSearchItemPress = (key: number) => {
    const { latitude, longitude } =
      MockData.find(({ beachKey }) => beachKey == key) ?? InitialMapLocation;
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
      <Tooltip
        height={120}
        backgroundColor={BCPPurple}
        ref={validationTooltipRef}
        popover={
          <Text style={HeaderStyles.textStyle}>
            Start typing the name of a beach or enter a UK postcode.
          </Text>
        }
      />
      <FlatList
        data={state.listFilterData}
        keyExtractor={({ beachKey }) => beachKey.toString()}
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
