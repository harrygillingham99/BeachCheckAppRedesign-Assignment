import * as React from "react";
import { BeachRiskLevel } from "../utils/Constants";
import {
  CardSubtitleStyles,
  GetColourForRiskLevel,
  SearchItemCardContainerStyles,
  SearchItemCardTitleStyle,
} from "../utils/Styles";
import { Card, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";

/* 
This is a custom RowItem component used by the iterator in the FlatLists in this application, 
it has variable styles based on what params are passed in. 
*/

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
}: RowItemProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={
          isSearchList ? SearchItemCardContainerStyles : undefined
        }
      >
        {isSearchList && (
          <Text style={SearchItemCardTitleStyle}>{beachName}</Text>
        )}
        {!isSearchList && (
          <>
            <Card.Title
              style={isSearchList ? SearchItemCardTitleStyle : undefined}
            >
              {beachName}
            </Card.Title>
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
