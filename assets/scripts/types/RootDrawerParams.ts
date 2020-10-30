import { MapValues } from "./MapValues";

export type RootDrawerParams = {
  Home: undefined;
  Settings: { testString: string } | undefined;
  BeachMap:  undefined;
  DetailedBeach : {beachName: string, latitude: number, longditude : number}
};
