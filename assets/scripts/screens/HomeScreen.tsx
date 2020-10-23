import { DrawerScreenProps } from "@react-navigation/drawer"
import React from "react"
import { View, Button } from "react-native"
import { RootDrawerParams } from "../types/RootDrawerParams"

type HomeProps =  DrawerScreenProps<RootDrawerParams, 'Home'>

export const HomeScreen = ({ navigation } : HomeProps) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications", {testString : 'ree'})}
        title="Go to notifications" />
    </View>
  )