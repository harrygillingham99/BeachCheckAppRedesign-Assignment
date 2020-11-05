/* 
This is the way to use a strongly typed navigator with typescript, giving proper intellisense. This type is used as an annotation in App.tsx when calling createDrawerNavigator()
*/

export type RootDrawerParams = {
  Home: undefined;
  Settings: { testString: string } | undefined;
  BeachMap: undefined;
  DetailedBeach: { beachKey: number };
};
