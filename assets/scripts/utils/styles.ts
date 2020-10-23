import { StyleSheet, Dimensions } from "react-native";
import { ComponentRegistry } from "./ComponentRegistry";

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
