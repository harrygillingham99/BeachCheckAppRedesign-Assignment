import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, ScrollView, Text } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { GetStyle } from "../styles/styles";

const PageTitle = "Settings";

type SettingsProps = DrawerScreenProps<RootDrawerParams, "Settings">;

const styles = GetStyle(PageTitle);

export const SettingsScreen = ({ route, navigation }: SettingsProps) => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={() => navigation.goBack()} title={"Back"}></Button>
      </View>
    </View>
  );
};
