import { Dimensions } from "react-native";
import { BeachRiskLevel } from "./Constants";

export const GetColourForRiskLevel = (risk?: BeachRiskLevel) : string  => {
  switch (risk) {
    case BeachRiskLevel.VeryLow:
      return "blue";
    case BeachRiskLevel.Low:
      return "green";
    case BeachRiskLevel.Medium:
      return "yellow";
    case BeachRiskLevel.High:
      return "orange";
    case BeachRiskLevel.VeryHigh:
      return "red";
    default:
      return "black"
  }
};

export const beachMapStyles = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginBottom: Dimensions.get("window").height * 0.05, //any closer to the bottom and the map will just infinitely scroll down on IOS
    flex: 1
  }
