import { StyleSheet, Dimensions } from "react-native";

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

export const GetStyle = (screen: string) => {
  switch (screen) {
    case "Home":
      return styles;
    case "Settings":
      return styles;
    case "BeachMap":
      return beachStyles;
    default:
      return styles;
  }
};
