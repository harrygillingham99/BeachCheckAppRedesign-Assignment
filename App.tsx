import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerParams } from "./assets/scripts/types/RootDrawerParams";
import { HomeScreen } from "./assets/scripts/screens/HomeScreen";
import { SettingsScreen } from "./assets/scripts/screens/SettingsScreen";
import { BeachMap } from "./assets/scripts/screens/BeachMapScreen";

const Drawer = createDrawerNavigator<RootDrawerParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="BeachMap" component={BeachMap} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
