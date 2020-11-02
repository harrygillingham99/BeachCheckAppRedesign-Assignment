import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, ScrollView, Text, Switch } from "react-native";
import { Picker } from "@react-native-community/picker";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenHeader } from "../components/ScreenHeader";
import { ListItem, Slider } from "react-native-elements";
import { useContainer } from "unstated-next";
import { SettingsContainer } from "../state/SettingsState";
import { MapTypes } from "../utils/Constants";

const componentId: ComponentRegistry = ComponentRegistry.Settings;

type SettingsProps = DrawerScreenProps<RootDrawerParams, "Settings">;

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

export const SettingsScreen = ({ route, navigation }: SettingsProps) => {
  const { settings, setSettings } = useContainer(SettingsContainer);
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        title={componentId}
      ></ScreenHeader>
      <View style={{ flex: 1 }}>
        <ListItem>
          <Text>Map View:</Text>
          <Picker
            selectedValue={settings.mapView}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) =>
              setSettings({ mapView: GetMapType(itemValue) })
            }
            mode={"dropdown"}
          >
            <Picker.Item label={MapTypes.standard} value={MapTypes.standard} />
            <Picker.Item label={MapTypes.hybrid} value={MapTypes.hybrid} />
            <Picker.Item
              label={MapTypes.satellite}
              value={MapTypes.satellite}
            />
          </Picker>
        </ListItem>
      </View>
    </>
  );
};
