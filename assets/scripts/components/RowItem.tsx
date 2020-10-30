import * as React from "react";
import { MockBeachItem } from "../utils/Constants";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/styles";
import { Card } from "react-native-elements";

const componentId: ComponentRegistry = ComponentRegistry.RowItem;

const styles = GetStyle(componentId);

interface RowItemProps {
  latitude: number;
  longditude: number;
  beachName: string;
  onPress: () => void;
}

export const RowItem = ({ beachName, onPress }: RowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Card.Title>{beachName}</Card.Title>
      </Card>
    </TouchableOpacity>
  );
};
