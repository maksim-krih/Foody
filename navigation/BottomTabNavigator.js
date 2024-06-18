import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/home/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends }
});

