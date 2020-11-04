import React from "react";
import { createContainer } from "unstated-next";
import { MapTypes } from "../utils/Constants";

interface SettingsState {
  darkMode? : Boolean
  polygonOpacity? : number
  mapView?: MapTypes
}

const useSettingsState = () => {
  const [settings, setSettings] = React.useState<SettingsState>({darkMode : false, polygonOpacity : 0.5, mapView: MapTypes.standard});
  return { settings, setSettings };
};

export const SettingsContainer = createContainer(useSettingsState);
