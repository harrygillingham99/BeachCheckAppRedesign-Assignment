import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { Card, Button } from "react-native-elements";
import { Text, Image } from "react-native";
import { MapValues } from "../types/MapValues";
import { MapContainer } from "../state/MapState";
import { DetailedViewImageStyles, DistancePhoto } from "../utils/Styles";

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
  const { beachName, latitude, longditude } = route.params;

  /*
  This is why global state was needed, I can update the map reigon with 
  the new values then push the user to the screen
  */
  const SetBeach = () => {
    setLocation(new MapValues(latitude, longditude));
    navigation.navigate("BeachMap");
  };
  return (
    <>
      <ScreenHeader
        centerComponent={<Text>{beachName}</Text>}
        leftComponentOnPress={navigation.goBack}
        showBack={true}
      ></ScreenHeader>
      <Card>
        <Card.Title>{beachName}, what a brilliant beach!</Card.Title>
        <Card.Divider />
        <Text>Lorem Ipsum here's whats going on at {beachName}...</Text>
        <Text>Please stay 2M apart.</Text>
        <Image source={DistancePhoto} style={DetailedViewImageStyles}></Image>
        <Card.Divider />
        <Button title={"View on map"} onPress={SetBeach}></Button>
      </Card>
    </>
  );
};
