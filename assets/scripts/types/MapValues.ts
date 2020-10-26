export class MapValues {
  constructor(latitude: number, longditude: number, latDelta : number, longDelta : number) {
    (this.latitude = latitude), (this.longitude = longditude);
    (this.latitudeDelta = latDelta), (this.longitudeDelta = longDelta);
  }
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
