import { DefaultLatDelta, DefaultLongDelta } from "../utils/Constants";
/* 
This is a custom implementation of the 'Reigon' class provided by react-native-maps, 
I opted to make the delta values optional as defaulting them in here seems cleaner
*/

export class MapValues {
  constructor(
    latitude: number,
    longitude: number,
    latDelta?: number,
    longDelta?: number
  ) {
    (this.latitude = latitude),
      (this.longitude = longitude),
      (this.latitudeDelta = latDelta ?? DefaultLatDelta),
      (this.longitudeDelta = longDelta ?? DefaultLongDelta);
  }

  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
