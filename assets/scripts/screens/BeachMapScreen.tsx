import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, ScrollView, Text } from "react-native";
import { GetStyle } from "../utils/Styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView from "react-native-maps";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenFooter } from "../components/ScreenFooter";
import { SearchMap } from "../components/SearchMap";
import { MapValues } from "../types/MapValues";
import { InitialMapLocation } from "../utils/Constants";
import { ScreenHeader } from "../components/ScreenHeader";

const componentId: ComponentRegistry = ComponentRegistry.Map;

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

const styles = GetStyle(componentId);

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const [location, setLocation] = React.useState<MapValues>(InitialMapLocation);
  const setMapLocation = ({
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  }: MapValues) =>
    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });

  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        title={componentId}
      ></ScreenHeader>
      <SearchMap UpdateMap={setLocation} />
      <ScrollView>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.beachMap}
          initialRegion={InitialMapLocation}
          region={
            new MapValues(
              location.latitude,
              location.longitude,
              location.latitudeDelta,
              location.longitudeDelta
            )
          }
          onRegionChangeComplete={setMapLocation}
        ></MapView>
      </ScrollView>
      <ScreenFooter goBack={navigation.goBack}></ScreenFooter>
    </>
  );
};
