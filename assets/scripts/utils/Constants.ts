import { Polygon } from "react-native-maps";

//Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
export const PostcodeRegex: string =
  "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

export enum SearchBarMessages {
  Default = "Postcode Search",
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

export enum BeachRiskLevel {
  VeryHigh,
  High,
  Medium,
  Low,
  VeryLow,
}

export interface MockBeachItem {
  beachKey: number;
  beachName: string;
  latitude: number;
  longitude: number;
  mapPolygon: Polygon;
  riskLevel: BeachRiskLevel;
}

export const MockData: MockBeachItem[] = [
  {
    beachKey: 1,
    beachName: "Branksome Chine",
    latitude: 50.706461814683735,
    longitude: -1.909446157515049,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 2,
    beachName: "Sandbanks Beach",
    latitude: 50.6882118692494,
    longitude: -1.937926858663559,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 3,
    beachName: "Bournemouth Beach",
    latitude: 50.71518479061355,
    longitude: -1.8755205720663068,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.VeryHigh,
  },
  {
    beachKey: 4,
    beachName: "Boscombe Beach",
    latitude: 50.71910878328881,
    longitude: -1.8430524319410324,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.High,
  },
  {
    beachKey: 5,
    beachName: "Southbourne Beach",
    latitude: 50.719336973998466,
    longitude: -1.7928347736597061,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.Medium,
  },
  {
    beachKey: 6,
    beachName: "Hengistbury Head",
    latitude: 50.71507079143355,
    longitude: -1.759541854262352,
    mapPolygon: new Polygon({ coordinates: [{ latitude: 0, longitude: 0 }] }),
    riskLevel: BeachRiskLevel.Low,
  },
];
