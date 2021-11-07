import React from 'react';
import {Dimensions, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import Payment from '../screens/Payment';
import Clearance from '../screens/Clearance';
import Profile from '../screens/Profile';

import DrawerContent from './component/DrawerContent';

const {width} = Dimensions.get('window')
const DRAWER_WIDTH = width * 0.7;

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="Dashboard" component={Dashboard} />
            <MainStack.Screen name="Payment" component={Payment} />
            <MainStack.Screen name="Clearance" component={Clearance} />
            <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
    )
}


const MainDrawer = createDrawerNavigator();


const MainNavigator = () => {
  return (
      <MainDrawer.Navigator
        drawerStyle={{
            width: DRAWER_WIDTH,
        }}
        drawerContent={(props) => <DrawerContent {...props}/>} 
      >
        <MainDrawer.Screen name="Home" component={MainStackNavigator} />
      </MainDrawer.Navigator>
  );
}

export default MainNavigator;