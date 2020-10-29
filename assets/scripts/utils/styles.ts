import { StyleSheet, Dimensions, StyleProp } from "react-native";
import { ComponentRegistry } from "./ComponentRegistry";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  footer: {
    marginBottom: 20,
  },
});

const beachStyles = StyleSheet.create({
  beachMap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginBottom : Dimensions.get("window").height * 0.05, //any closer to the bottom and the map will just infinitely scroll down on IOS 
    flex : 1
  },
});

export const GetStyle = (component: ComponentRegistry) => {
  switch (component) {
    case ComponentRegistry.Home:
      return styles;
    case ComponentRegistry.Settings:
      return styles;
    case ComponentRegistry.Map:
      return beachStyles;
    default:
      return styles;
  }
};
