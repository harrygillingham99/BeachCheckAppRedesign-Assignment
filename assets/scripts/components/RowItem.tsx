import * as React from "react";
import { BeachRiskLevel } from "../utils/Constants";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import {
  CardSubtitleStyles,
  GetColourForRiskLevel,
  SearchItemCardContainerStyles,
} from "../utils/Styles";
import { Card, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const componentId: ComponentRegistry = ComponentRegistry.RowItem;

interface RowItemProps {
  beachName: string;
  riskLevel?: BeachRiskLevel;
  onPress: () => void;
  isSearchList?: boolean;
}

export const RowItem = ({
  beachName,
  riskLevel,
  onPress,
  isSearchList = false,
}: RowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={
          isSearchList ? SearchItemCardContainerStyles : undefined
        }
      >
        <Card.Title>{beachName}</Card.Title>
        {!isSearchList && (
          <>
            <Card.Divider />
            <Card.FeaturedSubtitle style={CardSubtitleStyles}>
              <Text>
                Risk Level:{" "}
                <Text style={{ color: GetColourForRiskLevel(riskLevel) }}>
                  {riskLevel}
                </Text>
              </Text>
            </Card.FeaturedSubtitle>
          </>
        )}
      </Card>
    </TouchableOpacity>
  );
};
