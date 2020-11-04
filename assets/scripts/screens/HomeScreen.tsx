import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { FlatList, Image } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { MockData } from "../utils/Constants";
import { RowItem } from "../components/RowItem";
import { BCPLogo, HeaderLogoStyles } from "../utils/Styles";

/* This is the home screen which is referenced in the navigation stack. */

type HomeProps = DrawerScreenProps<RootDrawerParams, "Home">;

export const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <>
      <ScreenHeader
        leftComponentOnPress={navigation.openDrawer}
        centerComponent={
          <Image
            source={BCPLogo}
            style={HeaderLogoStyles}
          ></Image>
        }
      />
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <RowItem
            beachName={item.beachName}
            riskLevel={item.riskLevel}
            onPress={() =>
              navigation.navigate("DetailedBeach", {
                beachName: item.beachName,
                latitude: item.latitude,
                longditude: item.longitude,
              })
            }
          />
        )}
        keyExtractor={(item) => item.beachKey.toString()}
      />
    </>
  );
};
