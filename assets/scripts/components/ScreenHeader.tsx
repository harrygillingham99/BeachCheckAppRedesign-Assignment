import { Header, Icon } from "react-native-elements";
import * as React from "react";
import { ComponentRegistry } from "../utils/ComponentRegistry";

const componentId: ComponentRegistry = ComponentRegistry.Header;

interface ScreenHeaderProps {
  leftComponentOnPress: () => void;
  title: React.ReactElement;
  showBack?: boolean;
  rightComponent?: React.ReactElement
}

export const ScreenHeader = ({
  leftComponentOnPress,
  title,
  showBack = false,
  rightComponent
}: ScreenHeaderProps) => {
  return (
    <Header
      leftComponent={
        <Icon
          name={showBack ? "chevron-left" : "menu"}
          onPress={leftComponentOnPress}
        />
      }
      rightComponent={rightComponent}
      centerComponent={title}
    ></Header>
  );
};
