import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";

//Navigators
import OnboardingNavigator from './Onboarding';
import MainNavigator from './Main';
import SplashScreen from '../screens/Onboarding/Splash';

const RootStack = createStackNavigator()

const RootNavigator = () => {
    const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
    const appIsLoading = useSelector((store) => store.app.isLoading);
    return (
        <NavigationContainer>
            {!appIsLoading &&
                <RootStack.Navigator headerMode="none">
                    {isLoggedIn && <RootStack.Screen name="Main" component={MainNavigator} />}
                    {!isLoggedIn && <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />}
                </RootStack.Navigator>
            }
            {appIsLoading && <SplashScreen />}
        </NavigationContainer>
    )
}

export default RootNavigator;