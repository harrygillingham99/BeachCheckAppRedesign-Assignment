import * as React from 'react';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerParams } from './assets/scripts/types/RootDrawerParams';
import { HomeScreen } from './assets/scripts/screens/HomeScreen';
import { NotificationsScreen } from './assets/scripts/screens/NotificationsScreen';

const Drawer = createDrawerNavigator<RootDrawerParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}