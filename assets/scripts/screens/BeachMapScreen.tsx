import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { BeachMapStyles, GetColourForRiskLevel } from "../utils/Styles";
import { Text, View } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView, { Polygon } from "react-native-maps";
import { SearchMap } from "../components/SearchMap";
import { MapValues } from "../types/MapValues";
import { ScreenHeader } from "../components/ScreenHeader";
import { MapContainer } from "../state/MapState";
import { InitialMapLocation, MockData } from "../utils/Constants";
import { SettingsContainer } from "../state/SettingsState";

/* This is the base map screen which is referenced in the navigation stack. */

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const { location, setLocation } = MapContainer.useContainer();
  const { settings, setSettings } = SettingsContainer.useContainer();

  React.useEffect(() => setSettings({ polygonOpacity: 50 }), []); //this is a bit of a hack, there is a known bug with polygons not listening to colour attributes so use effect with an empty array once to force a re render on first load

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
        centerComponent={<Text>Beach Map</Text>}
      ></ScreenHeader>
      <SearchMap UpdateMap={setLocation} />
      <View
        style={{
          alignSelf: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={BeachMapStyles}
          region={location}
          mapType={settings.mapView}
          initialRegion={InitialMapLocation}
          onRegionChangeComplete={setMapLocation}
        >
          {MockData.map((beach) => {
            return (
              <Polygon
                key={beach.beachKey.toString()}
                coordinates={beach.mapPolygon}
                fillColor={GetColourForRiskLevel(beach.riskLevel, false)}
              ></Polygon>
            );
          })}
        </MapView>
      </View>
    </>
  );
};
