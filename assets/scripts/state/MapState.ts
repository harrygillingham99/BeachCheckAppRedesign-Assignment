import React from "react";
import { createContainer } from "unstated-next";
import { MapValues } from "../types/MapValues";
import { InitialMapLocation } from "../utils/Constants";

const useMapState = (initialState = InitialMapLocation) => {
  const [location, setLocation] = React.useState<MapValues>(initialState);
  return { location, setLocation };
};

export const MapContainer = createContainer(useMapState);
