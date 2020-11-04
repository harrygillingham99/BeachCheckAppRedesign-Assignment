import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { BeachMapStyles, GetColourForRiskLevel } from "../utils/Styles";
import { Text, View } from 'react-native'
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
  const { settings, setSettings } = SettingsContainer.useContainer();

  React.useEffect(() => setSettings({polygonOpacity : 50}),[]) 
  //this is a bit of a hack, there is a known bug with polygons not listening to colour attributes so use effect with an empty array once to force a re render on first load

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
        title={<Text>Beach Map</Text>}
      ></ScreenHeader>
      <SearchMap UpdateMap={setLocation} />
      <View style={{ alignSelf: 'center', width: '100%', height: '100%', overflow: 'hidden' }}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={BeachMapStyles}
        region={location}
        mapType={settings.mapView}
        onRegionChangeComplete={setMapLocation}
      >
        {MockData.map((beach) => {
          return(
          <Polygon
            key={beach.beachKey.toString()}
            coordinates={beach.mapPolygon}
            fillColor={GetColourForRiskLevel(beach.riskLevel, false)}
          ></Polygon>
        )})}
      </MapView>
      </View>
    </>
  );
};
