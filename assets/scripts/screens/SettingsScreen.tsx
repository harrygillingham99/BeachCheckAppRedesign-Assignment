import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, ScrollView, Text } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { GetStyle } from "../utils/styles";
import { ComponentRegistry } from "../utils/ComponentRegistry"
import { ScreenFooter } from "../components/ScreenFooter";

const componentId : ComponentRegistry = ComponentRegistry.Settings;

type SettingsProps = DrawerScreenProps<RootDrawerParams, "Settings">;

const styles = GetStyle(componentId);

export const SettingsScreen = ({ route, navigation }: SettingsProps) => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
      <ScreenFooter Previous={navigation.goBack}/>
    </View>
  );
};
