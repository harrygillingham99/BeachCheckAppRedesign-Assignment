import { Polygon, LatLng } from "react-native-maps";

//Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
export const PostcodeRegex: string =
  "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

export enum SearchBarMessages {
  Default = "Postcode or Beach Search",
  ValidationError = "invalid postcode...",
  Exception = "an error occured...",
}

export enum MapTypes {
  standard="standard",
  satellite="satellite",
  hybrid="hybrid"
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
  mapPolygon: LatLng[];
  riskLevel: BeachRiskLevel;
}

export const MockData: MockBeachItem[] = [
  {
    beachKey: 1,
    beachName: "Branksome Chine",
    latitude: 50.706461814683735,
    longitude: -1.909446157515049,
    mapPolygon: [{latitude: 50.701568, longitude: -1.919300},
      {latitude: 50.702009, longitude: -1.918463},
      {latitude: 50.704218, longitude: -1.914107},
      {latitude: 50.705202, longitude: -1.911902},
      {latitude: 50.706058, longitude: -1.910175},
      {latitude: 50.706337, longitude: -1.909478},
      {latitude: 50.708300, longitude: -1.904412},
      {latitude: 50.709984, longitude: -1.899597},
      {latitude: 50.711259, longitude: -1.895434},
      {latitude: 50.711938, longitude: -1.893546},
      {latitude: 50.711639, longitude: -1.893546},
      {latitude: 50.710633, longitude: -1.896593},
      {latitude: 50.710036, longitude: -1.898310},
      {latitude: 50.709015, longitude: -1.901710},
      {latitude: 50.708118, longitude: -1.904285},
      {latitude: 50.706814, longitude: -1.907589},
      {latitude: 50.706352, longitude: -1.908791},
      {latitude: 50.705482, longitude: -1.910808},
      {latitude: 50.705129, longitude: -1.911452},
      {latitude: 50.703330, longitude: -1.915154},
      {latitude: 50.701700, longitude: -1.918201},
      {latitude: 50.701292, longitude: -1.918802}],
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 2,
    beachName: "Sandbanks Beach",
    latitude: 50.6882118692494,
    longitude: -1.937926858663559,
    mapPolygon: [{latitude :50.683336, longitude: -1.946157},
      {latitude :50.683084, longitude: -1.945942},
      {latitude :50.683418, longitude: -1.945599},
      {latitude :50.683519, longitude: -1.945298},
      {latitude :50.683547, longitude: -1.945041},
      {latitude :50.683710, longitude: -1.944644},
      {latitude :50.683839, longitude: -1.944376},
      {latitude :50.683825, longitude: -1.943893},
      {latitude :50.683737, longitude: -1.943485},
      {latitude :50.683853, longitude: -1.943002},
      {latitude :50.684090, longitude: -1.942960},
      {latitude :50.684362, longitude: -1.942713},
      {latitude :50.684818, longitude: -1.941683},
      {latitude :50.686126, longitude: -1.939428},
      {latitude :50.686697, longitude: -1.938452},
      {latitude :50.686894, longitude: -1.938570},
      {latitude :50.687044, longitude: -1.938377},
      {latitude :50.687984, longitude: -1.937197},
      {latitude :50.688181, longitude: -1.937358},
      {latitude :50.690151, longitude: -1.934811},
      {latitude :50.696782, longitude: -1.926059},
      {latitude :50.701213, longitude: -1.918850},
      {latitude :50.701566, longitude: -1.919322},
      {latitude :50.699084, longitude: -1.923537},
      {latitude :50.698514, longitude: -1.924010},
      {latitude :50.694871, longitude: -1.929631},
      {latitude :50.690041, longitude: -1.936298},
      {latitude :50.687268, longitude: -1.939860},
      {latitude :50.687051, longitude: -1.939731},
      {latitude :50.684803, longitude: -1.942950},
      {latitude :50.684709, longitude: -1.942883},
      {latitude :50.684097, longitude: -1.944139},
      {latitude :50.683791, longitude: -1.945179},
      {latitude :50.683363, longitude: -1.946102}],
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 3,
    beachName: "Bournemouth Beach",
    latitude: 50.71518479061355,
    longitude: -1.8755205720663068,
    mapPolygon: [{latitude: 50.711931, longitude: -1.893497},
      {latitude: 50.712869, longitude: -1.890450},
      {latitude: 50.713834, longitude: -1.886695},
      {latitude: 50.715185, longitude: -1.879588},
      {latitude: 50.716910, longitude: -1.870576},
      {latitude: 50.717927, longitude: -1.863149},
      {latitude: 50.718662, longitude: -1.857719},
      {latitude: 50.719005, longitude: -1.853983},
      {latitude: 50.718665, longitude: -1.853855},
      {latitude: 50.718027, longitude: -1.860006},
      {latitude: 50.717660, longitude: -1.862666},
      {latitude: 50.717252, longitude: -1.866495},
      {latitude: 50.716845, longitude: -1.869607},
      {latitude: 50.716342, longitude: -1.871924},
      {latitude: 50.715649, longitude: -1.876022},
      {latitude: 50.715092, longitude: -1.878662},
      {latitude: 50.713965, longitude: -1.884734},
      {latitude: 50.713122, longitude: -1.888017},
      {latitude: 50.711668, longitude: -1.893317},
      {latitude: 50.711886, longitude: -1.893446}],
    riskLevel: BeachRiskLevel.VeryHigh,
  },
  {
    beachKey: 4,
    beachName: "Boscombe Beach",
    latitude: 50.71910878328881,
    longitude: -1.8430524319410324,
    mapPolygon: [{latitude : 0, longitude : 0}],
    riskLevel: BeachRiskLevel.High,
  },
  {
    beachKey: 5,
    beachName: "Southbourne Beach",
    latitude: 50.719336973998466,
    longitude: -1.7928347736597061,
    mapPolygon: [{latitude : 0, longitude : 0}],
    riskLevel: BeachRiskLevel.Medium,
  },
  {
    beachKey: 6,
    beachName: "Hengistbury Head",
    latitude: 50.71507079143355,
    longitude: -1.759541854262352,
    mapPolygon: [{latitude : 0, longitude : 0}],
    riskLevel: BeachRiskLevel.Low,
  },
];










