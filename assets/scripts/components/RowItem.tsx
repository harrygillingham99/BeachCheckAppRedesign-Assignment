import * as React from "react";
import { MockBeachItem } from "../utils/Constants";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/Styles";

const componentId: ComponentRegistry = ComponentRegistry.RowItem;

const styles = GetStyle(componentId);

interface RowItemProps {
  item: MockBeachItem;
  onPress: () => void;
}

export const RowItem = ({ item, onPress }: RowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.beachName}</Text>
    </TouchableOpacity>
  );
};
