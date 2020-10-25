import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";
import { GetStyle } from "../utils/styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView from "react-native-maps";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenFooter } from "../components/ScreenFooter";
import { SearchMap } from "../components/SearchMap";
import { MapValues } from "../types/MapValues";

const componentId: ComponentRegistry = ComponentRegistry.Map;

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

const styles = GetStyle(componentId);

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const [location, setLocation] = React.useState<MapValues>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        <Text>Map</Text>
        <SearchMap UpdateMap={setLocation} />
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.beachMap}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: location.latitudeDelta,
            longitudeDelta: location.longitudeDelta,
          }}
          onRegionChangeComplete={setLocation}
        ></MapView>
      </ScrollView>
      <ScreenFooter goBack={navigation.goBack} />
    </View>
  );
};
