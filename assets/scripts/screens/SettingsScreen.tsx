import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, ScrollView, Text, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import DropDownPicker from "react-native-dropdown-picker";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { ListItem } from "react-native-elements";
import { useContainer } from "unstated-next";
import { SettingsContainer } from "../state/SettingsState";
import { MapTypes } from "../utils/Constants";

/* This is the settings screen which is referenced in the navigation stack. */

type SettingsProps = DrawerScreenProps<RootDrawerParams, "Settings">;

/* 
Seemingly pointless but nessesary to make typescript happy 
and convert the ReactText object supplied by DropDownPicker back to a MapType
*/
const GetMapType = (text: React.ReactText): MapTypes => {
  switch (text) {
    case MapTypes.hybrid:
      return MapTypes.hybrid;
    case MapTypes.satellite:
      return MapTypes.satellite;
    case MapTypes.standard:
      return MapTypes.standard;
    default:
      return MapTypes.standard;
  }
};

export const SettingsScreen = ({ navigation }: SettingsProps) => {
  const { settings, setSettings } = useContainer(SettingsContainer);
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        centerComponent={<Text>Settings</Text>}
      ></ScreenHeader>
      <View style={{ flex: 1 }}>
        <ListItem>
          <Text>Polygon Opacity:</Text>
          <Slider
            style={{ width: 180, height: 40 }}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            minimumValue={0}
            maximumValue={1}
            value={settings.polygonOpacity}
            onSlidingComplete={(value) =>
              setSettings({ polygonOpacity: value })
            }
          ></Slider>
          <Text>{(Number(settings.polygonOpacity) * 100).toFixed(0)}%</Text>
        </ListItem>
        <ListItem>
          <Text>Map View:</Text>
          <DropDownPicker
            items={[
              { label: MapTypes.standard, value: MapTypes.standard },
              { label: MapTypes.hybrid, value: MapTypes.hybrid },
              { label: MapTypes.satellite, value: MapTypes.satellite },
            ]}
            defaultValue={MapTypes.standard}
            onChangeItem={(itemValue) =>
              setSettings({
                mapView: GetMapType(itemValue.value),
                polygonOpacity: settings.polygonOpacity ?? 0.5,
              })
            }
            containerStyle={{ height: 40, width: 150 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
          />
        </ListItem>
      </View>
    </>
  );
};
