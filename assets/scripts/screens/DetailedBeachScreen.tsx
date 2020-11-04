import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { Card, Button } from "react-native-elements";
import { Text } from "react-native";
import { MapValues } from "../types/MapValues";
import { MapContainer } from "../state/MapState";

const componentId: ComponentRegistry = ComponentRegistry.DetailsScreen;

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
  const SetBeach = () => {
    setLocation(new MapValues(latitude, longditude));
    navigation.navigate("BeachMap");
  };
  return (
    <>
      <ScreenHeader
        title={<Text>{beachName}</Text>}
        leftComponentOnPress={navigation.goBack}
        showBack={true}
      ></ScreenHeader>
      <Card>
        <Text></Text>
        <Card.Divider />
        <Button title={"View on map"} onPress={SetBeach}></Button>
      </Card>
    </>
  );
};
