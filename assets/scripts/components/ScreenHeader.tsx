import { Header, Icon } from "react-native-elements";
import * as React from "react";
import { BCPPurple, HeaderStyles } from "../utils/Styles";

/* 
This is a custom header component used by the the screens in this application, 
it allows for custom sub components to be passed in from the parent. 
*/

interface ScreenHeaderProps {
  leftComponentOnPress: () => void; //a function reference to either go back or open the drawer, depending on whats passed in
  centerComponent: React.ReactElement;
  showBack?: boolean;
  rightComponent?: React.ReactElement;
}

export const ScreenHeader = ({
  leftComponentOnPress,
  centerComponent,
  showBack = false, // optional, used on the detailed beach view, to be able to return to the previous easily
  rightComponent,
}: ScreenHeaderProps) : JSX.Element => {
  return (
    <Header
      leftComponent={
        <Icon
          name={showBack ? "chevron-left" : "menu"}
          onPress={leftComponentOnPress}
          color={HeaderStyles.iconColour}
        />
      }
      rightComponent={rightComponent}
      centerComponent={centerComponent}
      backgroundColor={BCPPurple}
      style={HeaderStyles.containerStyle}
    ></Header>
  );
};
