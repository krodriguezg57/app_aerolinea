
import React from 'react';
import { AppNavigator } from './src/navegation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {CustomTheme} from './src/constants/CustomTheme.js'
import { AuthProvider } from './src/context/AuthContext.js';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={CustomTheme}>
        <AppNavigator/>
        <FlashMessage position="top" />
      </NavigationContainer>
    </AuthProvider>
   
  );
}


