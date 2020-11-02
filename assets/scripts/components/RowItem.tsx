import * as React from "react";
import { BeachRiskLevel } from "../utils/Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetColourForRiskLevel } from "../utils/Styles";
import { Card } from "react-native-elements";

const componentId: ComponentRegistry = ComponentRegistry.RowItem;

interface RowItemProps {
  beachName: string;
  riskLevel?: BeachRiskLevel;
  onPress: () => void;
}

export const RowItem = ({ beachName, riskLevel, onPress }: RowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor : GetColourForRiskLevel(riskLevel)}}>
      <Card>
        <Card.Title>{beachName}</Card.Title>
      </Card>
    </TouchableOpacity>
  );
};
