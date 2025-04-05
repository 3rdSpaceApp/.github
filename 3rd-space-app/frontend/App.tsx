import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import UserTest from './src/screens/UserTest';
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <UserTest />
      <RootNavigator />
    </SafeAreaView>
  );
}