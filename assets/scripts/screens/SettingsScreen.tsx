import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, ScrollView, Text } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { GetStyle } from "../utils/styles";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenHeader } from "../components/ScreenHeader";

const componentId: ComponentRegistry = ComponentRegistry.Settings;

type SettingsProps = DrawerScreenProps<RootDrawerParams, "Settings">;

const styles = GetStyle(componentId);

export const SettingsScreen = ({ route, navigation }: SettingsProps) => {
  return (
    <>
    <ScreenHeader leftComponentOnPress={navigation.openDrawer} title={componentId}></ScreenHeader>
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    </View>
    </>
  );
};
