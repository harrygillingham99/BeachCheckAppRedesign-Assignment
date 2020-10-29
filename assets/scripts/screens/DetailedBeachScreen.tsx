import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenHeader } from "../components/ScreenHeader";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { GetStyle } from "../utils/Styles";

const componentId: ComponentRegistry = ComponentRegistry.DetailsScreen;

const styles = GetStyle(componentId);

type DetailedBeachScreenProps = DrawerScreenProps<
  RootDrawerParams,
  "DetailedBeach"
>;

export const DetailedBeach = ({
  navigation,
  route,
}: DetailedBeachScreenProps) => {
  const { beachName } = route.params;
  return (
    <>
      <ScreenHeader
        title={beachName}
        leftComponentOnPress={navigation.goBack}
        showBack={true}
      ></ScreenHeader>
    </>
  );
};
