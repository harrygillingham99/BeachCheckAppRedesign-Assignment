import * as React from "react";
import { BeachRiskLevel } from "../utils/Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetColourForRiskLevel, GetStyle } from "../utils/styles";
import { Card } from "react-native-elements";

const componentId: ComponentRegistry = ComponentRegistry.RowItem;

const styles = GetStyle(componentId);

interface RowItemProps {
  beachName: string;
  riskLevel: BeachRiskLevel;
  onPress: () => void;
}

export const RowItem = ({ beachName, riskLevel, onPress }: RowItemProps) => {
  const riskColour = GetColourForRiskLevel(riskLevel);
  return (
    <TouchableOpacity onPress={onPress} style={riskColour.rowItem}>
      <Card>
        <Card.Title>{beachName}</Card.Title>
      </Card>
    </TouchableOpacity>
  );
};
