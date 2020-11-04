import React from "react";
import { createContainer } from "unstated-next";
import { MapValues } from "../types/MapValues";
import { InitialMapLocation } from "../utils/Constants";

/* 
This is a global state container for the map state. It uses unstated-next to create a container with a state hook within that is accessible anywhere.
This allows the map state to be updated even when the screen is not in view and from outside the map component its self.
*/

const useMapState = (initialState = InitialMapLocation) => {
  const [location, setLocation] = React.useState<MapValues>(initialState);
  return { location, setLocation };
};

export const MapContainer = createContainer(useMapState);
