import { Header, Icon } from "react-native-elements";
import * as React from "react";
import { ComponentRegistry } from "../utils/ComponentRegistry";

const componentId: ComponentRegistry = ComponentRegistry.Header;

interface ScreenHeaderProps {
  leftComponentOnPress: () => void;
  title: string;
  showBack?: boolean;
}

export const ScreenHeader = ({
  leftComponentOnPress,
  title,
  showBack = false,
}: ScreenHeaderProps) => {
  return (
    <Header
      leftComponent={
        <Icon
          name={showBack ? "chevron-left" : "menu"}
          onPress={leftComponentOnPress}
        />
      }
      centerComponent={{ text: title }}
    ></Header>
  );
};
