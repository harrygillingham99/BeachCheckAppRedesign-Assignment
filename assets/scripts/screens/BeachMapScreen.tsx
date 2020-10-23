import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";
import { GetStyle } from "../utils/styles";
import { RootDrawerParams } from "../types/RootDrawerParams";
import MapView from "react-native-maps";
import { ScreenRegistry } from "../utils/ScreenRegistry";

const PageId: ScreenRegistry = ScreenRegistry.Map;

type BeachMapScreenProps = DrawerScreenProps<RootDrawerParams, "BeachMap">;

const styles = GetStyle(PageId);

export const BeachMap = ({ navigation }: BeachMapScreenProps) => (
  <View style={{ ...styles.container, flex: 1 }}>
    <ScrollView>
      <Text>Map</Text>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.beachMap}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
    </ScrollView>
    <View style={styles.footer}>
      <Button onPress={() => navigation.goBack()} title={"Back"}></Button>
    </View>
  </View>
);
