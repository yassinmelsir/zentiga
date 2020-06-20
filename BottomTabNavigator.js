import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OneScreen from './components/OneScreen';
import TwoScreen from './components/TwoScreen';
import ThreeScreen from './components/ThreeScreen';
import FourScreen from './components/FourScreen';
import FiveScreen from './components/FiveScreen';
import SixScreen from './components/SixScreen';
import SevenScreen from './components/SevenScreen';
import EightScreen from './components/EightScreen';


export default function BottomTabNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="1"
          component={OneScreen}
        />
        <Tabs.Screen
          name="2"
          component={TwoScreen}
        />
        <Tabs.Screen
          name="3"
          component={ThreeScreen}
        />
        <Tabs.Screen
          name="4"
          component={FourScreen}
        />
        <Tabs.Screen
          name="5"
          component={FiveScreen}
        />
        <Tabs.Screen
          name="6"
          component={SixScreen}
        />
        <Tabs.Screen
          name="7"
          component={SevenScreen}
        />
        <Tabs.Screen
          name="8"
          component={EightScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
