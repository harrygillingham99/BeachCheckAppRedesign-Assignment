import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerParams } from "./assets/scripts/types/RootDrawerParams";
import { HomeScreen } from "./assets/scripts/screens/HomeScreen";
import { SettingsScreen } from "./assets/scripts/screens/SettingsScreen";
import { BeachMap } from "./assets/scripts/screens/BeachMapScreen";
import { DetailedBeach } from "./assets/scripts/screens/DetailedBeachScreen";
import { MapContainer } from "./assets/scripts/state/MapState";

const Drawer = createDrawerNavigator<RootDrawerParams>();

export default function App() {
  return (
    <MapContainer.Provider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen
            name="BeachMap"
            component={BeachMap}
            options={{ title: "Beach Map" }}
          />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen
            name="DetailedBeach"
            options={{ title: "" }}
            component={DetailedBeach}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </MapContainer.Provider>
  );
}
