import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { GetStyle } from "../utils/styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView from "react-native-maps";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { SearchMap } from "../components/SearchMap";
import { MapValues } from "../types/MapValues";
import { ScreenHeader } from "../components/ScreenHeader";
import { MapContainer } from "../state/MapState";

const componentId: ComponentRegistry = ComponentRegistry.Map;

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

const styles = GetStyle(componentId);

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const mapState = MapContainer.useContainer();

  const setMapLocation = ({
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  }: MapValues) =>
    mapState.setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
    console.log(`latitude: ${mapState.location.latitude},`)
    console.log(`longitude: ${mapState.location.longitude},`)
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        title={componentId}
      ></ScreenHeader>
      <SearchMap UpdateMap={mapState.setLocation} />
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.beachMap}
        region={mapState.location}
        onRegionChangeComplete={setMapLocation}
      ></MapView>
    </>
  );
};
