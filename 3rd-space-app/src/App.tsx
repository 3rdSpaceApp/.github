import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigator';
import { OnboardingProvider } from './context/OnboardingContext';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <OnboardingProvider>
        <RootNavigator />
      </OnboardingProvider>
    </SafeAreaView>
  );
}

