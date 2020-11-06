import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { Card, Button } from "react-native-elements";
import { Text, Image } from "react-native";
import { MapValues } from "../types/MapValues";
import { MapContainer } from "../state/MapState";
import {
  DetailedViewImageStyles,
  DistancePhoto,
  GetColourForRiskLevel,
  HeaderStyles,
} from "../utils/Styles";
import { MockData } from "../utils/Constants";

/* 
This is a custom detailed view component for when a beach is selected from the home screen,
It contains placeholder text and a button to navigate to the beach on the map.
*/

type DetailedBeachScreenProps = DrawerScreenProps<
  RootDrawerParams,
  "DetailedBeach"
>;

export const DetailedBeach = ({
  navigation,
  route,
}: DetailedBeachScreenProps) => {
  const { setLocation } = MapContainer.useContainer();
  const { beachKey } = route.params;
  const { beachName, latitude, longitude, riskLevel } =
    MockData.find((beach) => beach.beachKey == beachKey) ?? MockData[0];

  /*
  This is why global state was needed, I can update the map reigon with 
  the new values then push the user to the screen, navigation does not force a
  re render so using route params was not viable.
  */
  const SetBeachThenShowMap = () : void => {
    navigation.navigate("BeachMap");
    setLocation(new MapValues(latitude, longitude));
  };
  return (
    <>
      <ScreenHeader
        centerComponent={<Text style={HeaderStyles.textStyle}>Beach Details</Text>}
        leftComponentOnPress={navigation.goBack}
        showBack={true}
      ></ScreenHeader>
      <Card>
        <Card.Title>What's going on at {beachName}?</Card.Title>
        <Card.Divider />
        <Text>
          Lorem ipsum dolor sit amet, in dicta impetus nec. Elitr congue ea vix,
          ex graecis detraxit conclusionemque has. Justo dicit ea vel, eos ex
          persius hendrerit intellegat. Simul omnium intellegam ei sea, sit
          iriure salutatus accommodare te, per et falli numquam admodum. Movet
          appellantur te mei, sea dico repudiandae te.
        </Text>
        <Image source={DistancePhoto} style={DetailedViewImageStyles}></Image>
        <Card.Divider />
        <Card.Title>
          Risk Level:{" "}
          <Text style={{ color: GetColourForRiskLevel(riskLevel) }}>
            {riskLevel}
          </Text>
        </Card.Title>
        <Card.Divider />
        <Button title={"View on map"} onPress={SetBeachThenShowMap}></Button>
      </Card>
    </>
  );
};
