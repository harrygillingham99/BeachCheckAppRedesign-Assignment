import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import {
  BeachMapStyles,
  BeachMapWrapperStyles,
  GetColourForRiskLevel,
} from "../utils/Styles";
import { Text, View } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView, { Polygon } from "react-native-maps";
import { SearchMap } from "../components/SearchMap";
import { ScreenHeader } from "../components/ScreenHeader";
import { MapContainer } from "../state/MapState";
import { MockData } from "../utils/Constants";
import { SettingsContainer } from "../state/SettingsState";

/* This is the base map screen which is referenced in the navigation stack. */

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

export const BeachMap = ({ navigation }: BeachMapScreenProps) => {
  const { location } = MapContainer.useContainer();
  const { settings, setSettings } = SettingsContainer.useContainer();

  /* This is a hacky workaround for a known problem with Polygons not listening to styles on initial render, re-setting to the opacity in state on first load to force a re-render seems to mitigate it */
  React.useEffect(() => {
      setSettings({ polygonOpacity: 0.5 });
  }, []);

  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        centerComponent={<Text>Beach Map</Text>}
      ></ScreenHeader>
      <SearchMap/>
      <View style={BeachMapWrapperStyles}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={BeachMapStyles}
          region={location}
          mapType={settings.mapView}
        >
          {MockData.map(({riskLevel, beachKey, beachName, mapPolygon}) => {
            const riskColour = GetColourForRiskLevel(riskLevel, false);
            return (
              <React.Fragment key={`${beachName}-fragment`}>
                <Polygon
                  key={`${beachName}-polygon`}
                  onPress={() =>
                    navigation.navigate("DetailedBeach", {
                      beachKey: beachKey,
                    })
                  }
                  tappable={true}
                  coordinates={mapPolygon}
                  fillColor={riskColour}
                ></Polygon>
              </React.Fragment>
            );
          })}
        </MapView>
      </View>
    </>
  );
};
