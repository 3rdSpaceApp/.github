// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1_NameUsername from '../screens/onboarding/Step1_NameUsername.tsx';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Step1">
        <Stack.Screen
          name="Step1"
          component={Step1_NameUsername}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
};

export default RootNavigator;