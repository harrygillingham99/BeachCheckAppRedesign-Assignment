import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { beachMapStyles, GetColourForRiskLevel } from "../utils/Styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView, { Polygon } from "react-native-maps";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { SearchMap } from "../components/SearchMap";
import { MapValues } from "../types/MapValues";
import { ScreenHeader } from "../components/ScreenHeader";
import { MapContainer } from "../state/MapState";
import { MockData } from "../utils/Constants";
import { SettingsContainer } from "../state/SettingsState";

const componentId: ComponentRegistry = ComponentRegistry.Map;

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const { location, setLocation } = MapContainer.useContainer();
  const { settings } = SettingsContainer.useContainer()

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
  console.log(`latitude: ${location.latitude},`);
  console.log(`longitude: ${location.longitude},`);
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        title={componentId}
      ></ScreenHeader>
      <SearchMap UpdateMap={setLocation} />
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={beachMapStyles}
        region={location}
        mapType={settings.mapView}
        onRegionChangeComplete={setMapLocation}
      >
        {MockData.map((beach) => {
          const beachRiskColour = GetColourForRiskLevel(beach.riskLevel);
          return(
          
          <Polygon
            key={beach.beachKey}
            coordinates={beach.mapPolygon}
            fillColor={beachRiskColour}
          ></Polygon>
        )})}
      </MapView>
    </>
  );
};
