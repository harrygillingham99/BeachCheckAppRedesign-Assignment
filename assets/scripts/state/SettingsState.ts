import React from "react";
import { createContainer } from "unstated-next";
import { MapTypes } from "../utils/Constants";

/* 
This is a global state container for the apps settings. It uses unstated-next to create a container with a state hook within that is accessible anywhere.
*/

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
