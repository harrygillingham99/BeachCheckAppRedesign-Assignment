import { DefaultLatDelta, DefaultLongDelta } from "../utils/Constants";

export class MapValues {
  constructor(
    latitude: number,
    longditude: number,
    latDelta?: number,
    longDelta?: number
  ) {
    (this.latitude = latitude),
      (this.longitude = longditude),
      (this.latitudeDelta = latDelta ?? DefaultLatDelta),
      (this.longitudeDelta = longDelta ?? DefaultLongDelta);
  }

  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
