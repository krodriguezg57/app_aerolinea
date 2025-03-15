
import React from 'react';
import { AppNavigator } from './src/navegation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {CustomTheme} from './src/constants/CustomTheme.js'

export default function App() {
  return (
   <NavigationContainer theme={CustomTheme}>
      <AppNavigator/>
   </NavigationContainer>
  );
}


