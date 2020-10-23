import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";
import { GetStyle } from "../utils/styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ComponentRegistry } from "../utils/ComponentRegistry";
import { ScreenFooter } from "../components/ScreenFooter";

const componentId: ComponentRegistry = ComponentRegistry.Home;

type HomeProps = DrawerScreenProps<RootDrawerParams, "Home">;

const styles = GetStyle(componentId);

export const HomeScreen = ({ navigation }: HomeProps) => (
  <View style={{ ...styles.container, flex: 1 }}>
    <ScrollView>
      <Text>Home</Text>
    </ScrollView>
    <ScreenFooter Previous={navigation.goBack}/>
  </View>
);
