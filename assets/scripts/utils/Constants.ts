import { MapValues } from "../types/MapValues";
import { Polygon } from "react-native-maps";

//Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
export const PostcodeRegex: string =
  "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

export enum SearchBarMessages {
  Default = "enter a postcode or start typing a beach...",
  ValidationError = "invalid postcode...",
  Exception = "an error occured...",
}

export const PostcodeApiUrl: string = "https://api.postcodes.io/postcodes/";

export const DefaultLatDelta = 0.003;

export const DefaultLongDelta = 0.002;

export const InitialMapLocation = {
  latitude: 50.720806,
  longitude: -1.904755,
  latitudeDelta: DefaultLatDelta,
  longitudeDelta: DefaultLongDelta,
};

export interface MockBeachItem {
  beachKey: number;
  beachName: string;
  mapLocation: MapValues;
  mapPolygon: Polygon;
}

export const MockData: MockBeachItem[] = [
  {
    beachKey: 1,
    beachName: "Branksome Chine",
    mapLocation: new MapValues(1, 1, 1, 1),
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
  },
  {
    beachKey: 2,
    beachName: "Alum Chine",
    mapLocation: new MapValues(1, 1, 1, 1),
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
  },
  {
    beachKey: 3,
    beachName: "Bournemouth Beach",
    mapLocation: new MapValues(1, 1, 1, 1),
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
  },
  {
    beachKey: 4,
    beachName: "Boscombe Beach",
    mapLocation: new MapValues(1, 1, 1, 1),
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
  },
];
