import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { FlatList } from "react-native";
import { GetStyle } from "../utils/Styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenHeader } from "../components/ScreenHeader";
import { MockBeachItem, MockData } from "../utils/Constants";
import { RowItem } from "../components/RowItem";

const componentId: ComponentRegistry = ComponentRegistry.Home;

type HomeProps = DrawerScreenProps<RootDrawerParams, "Home">;

const styles = GetStyle(componentId);

export const HomeScreen = ({ navigation }: HomeProps) => {
  const onItemPress = (item: MockBeachItem) => {
    navigation.navigate("DetailedBeach", {
      beachName: item.beachName,
      latitude: item.latitude,
      longditude: item.longitude,
    });
  };
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        title={"BCP Beach Check"}
      />
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <RowItem
            beachName={item.beachName}
            riskLevel={item.riskLevel}
            onPress={() => onItemPress(item)}
          />
        )}
        keyExtractor={(item) => item.beachKey.toString()}
      />
    </>
  );
};
