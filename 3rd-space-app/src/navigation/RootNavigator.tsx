// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator'; // For later, when user is logged in
// import { useAuth } from '../context/AuthContext'; // Example future hook

const RootNavigator = () => {
  // For now, just showing AuthNavigator. In the future, you can toggle based on login status
  // const { user } = useAuth();

  return (
    <NavigationContainer>
      {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;