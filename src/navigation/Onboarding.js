import React from 'react';
import {StatusBar} from'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Onboarding/Login';
import Registration from '../screens/Onboarding/Registration';
import Welcome from '../screens/Onboarding/Welcome';

const OnBoaringStack = createStackNavigator();

const OnboardingNavigator = () => {
    return (
        <OnBoaringStack.Navigator headerMode="none">
            <OnBoaringStack.Screen name="Login" component={Login} />
            <OnBoaringStack.Screen name="Registration" component={Registration} />
            <OnBoaringStack.Screen name="Welcome" component={Welcome} />
        </OnBoaringStack.Navigator>
    )
}

export default OnboardingNavigator;