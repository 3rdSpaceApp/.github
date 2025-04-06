// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1_NameUsername from '../screens/onboarding/Step1_NameUsername';
// import Step2_AvatarUpload from '../screens/onboarding/Step2_AvatarUpload';
// import Step3_Prompts from '../screens/onboarding/Step3_Prompts';
// import Step4_Preferences from '../screens/onboarding/Step4_Preferences';
// import Step5_ReviewSubmit from '../screens/onboarding/Step5_ReviewSubmit';

export type AuthStackParamList = {
  Step1_NameUsername: undefined;
  Step2_AvatarUpload: undefined;
  Step3_Prompts: undefined;
  Step4_Preferences: undefined;
  Step5_ReviewSubmit: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step1_NameUsername" component={Step1_NameUsername} />
      {/* <Stack.Screen name="Step2_AvatarUpload" component={Step2_AvatarUpload} />
      <Stack.Screen name="Step3_Prompts" component={Step3_Prompts} />
      <Stack.Screen name="Step4_Preferences" component={Step4_Preferences} />
      <Stack.Screen name="Step5_ReviewSubmit" component={Step5_ReviewSubmit} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;




