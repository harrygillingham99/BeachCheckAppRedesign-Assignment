import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Button } from "react-native";
import { RootDrawerParams } from "../types/RootDrawerParams";

type NotificationProps =  DrawerScreenProps<RootDrawerParams, 'Notifications'>

export const NotificationsScreen = ({ route, navigation }: NotificationProps) => {
  const {testString} = route.params
  console.log(testString);
  return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button onPress={() => navigation.goBack()} title={testString} />
  </View>
)}