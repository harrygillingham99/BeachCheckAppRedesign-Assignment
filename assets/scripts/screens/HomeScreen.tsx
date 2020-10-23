import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";
import { GetStyle } from "../utils/styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import { ScreenRegistry } from "../utils/ScreenRegistry";

const PageId: ScreenRegistry = ScreenRegistry.Home;

type HomeProps = DrawerScreenProps<RootDrawerParams, "Home">;

const styles = GetStyle(PageId);

export const HomeScreen = ({ navigation }: HomeProps) => (
  <View style={{ ...styles.container, flex: 1 }}>
    <ScrollView>
      <Text>Home</Text>
    </ScrollView>
    <View style={styles.footer}>
      <Button onPress={() => navigation.goBack()} title={"Back"}></Button>
    </View>
  </View>
);
