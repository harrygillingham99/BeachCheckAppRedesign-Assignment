import { StyleSheet, Dimensions } from "react-native";
import { ScreenRegistry } from "./ScreenRegistry";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  footer: {
    marginBottom: 20,
  },
});

const beachStyles = StyleSheet.create({
  ...styles,
  beachMap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export const GetStyle = (screen: ScreenRegistry) => {
  switch (screen) {
    case ScreenRegistry.Home:
      return styles;
    case ScreenRegistry.Settings:
      return styles;
    case ScreenRegistry.Map:
      return beachStyles;
    default:
      return styles;
  }
};
