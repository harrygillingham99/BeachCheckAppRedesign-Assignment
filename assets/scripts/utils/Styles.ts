import {
  Dimensions,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SettingsContainer } from "../state/SettingsState";
import { BeachRiskLevel } from "./Constants";

/* 
This is another constants file but with all styling related functions and constants.
*/

/*
Using rgba strings here as its the only way to be able to toggle polygon opacity, and is compatible with normal styles.
*/
export const GetColourForRiskLevel = (
  risk?: BeachRiskLevel,
  opaque = true
): string => {
  const { settings } = SettingsContainer.useContainer();
  switch (risk) {
    case BeachRiskLevel.VeryLow:
      return `rgba(44, 130, 201, ${opaque ? 1 : settings.polygonOpacity})`;
    case BeachRiskLevel.Low:
      return `rgba(42, 187, 155, ${opaque ? 1 : settings.polygonOpacity})`;
    case BeachRiskLevel.Medium:
      return `rgba(247, 202, 24, ${opaque ? 1 : settings.polygonOpacity})`;
    case BeachRiskLevel.High:
      return `rgba(243, 156, 18, ${opaque ? 1 : settings.polygonOpacity})`;
    case BeachRiskLevel.VeryHigh:
      return `rgba(240, 52, 52, ${opaque ? 1 : settings.polygonOpacity})`;
    default:
      return `rgb(46, 49, 49, ${opaque ? 1 : settings.polygonOpacity})`;
  }
};

export const BCPPurple: string = "#361e54";

export const BeachMapStyles: StyleProp<ViewStyle> = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  marginBottom: Dimensions.get("window").height * 0.05,
  flex: 1,
};

export const SearchItemCardContainerStyles: StyleProp<ViewStyle> = {
  height: 70,
};

export const HeaderLogoStyles: StyleProp<ImageStyle> = {
  height: 45,
  width: 45,
  marginBottom: 5,
  justifyContent: "center",
};

export const HeaderStyles = {
  iconColour: "white",
  containerStyle: { height: 100 },
  textStyle: { color: "white" },
};

export const DetailedViewImageStyles: StyleProp<ImageStyle> = {
  width: 100,
  height: 150,
  overflow: "visible",
  alignSelf: "center",
  marginTop: 10,
  marginBottom: 10,
};

export const BeachMapWrapperStyles: StyleProp<ViewStyle> = {
  alignSelf: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

export const CardSubtitleStyles: StyleProp<TextStyle> = { textAlign: "center" };

export const BCPLogo = require("../../icons/bcp-logo.png");

export const DistancePhoto = require("../../icons/social-distance.png");
