import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from "@expo/vector-icons"


import { HomeScreen } from '../screens/HomeScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { UserScreen } from '../screens/UserScreen';
import { BuscarVuelosScreen } from '../screens/BuscarVuelosScreen';
import { TicketScreen } from '../screens/TicketScreen';
import  LoginScreen  from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen'
import SettingsScreen from '../screens/SettingsScreen';
import PokemonInfo from '../screens/PokemonScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={
      ({route})=>({tabBarIcon:({color,size})=>{
          let inconName
          if (route.name == "Home"){
            inconName = "home-outline"
          }else if (route.name == "User"){
            inconName = "person-outline"
          }
          return <Ionicons name={inconName} size={size} color={color}/>

      }})
    }>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="User" component={UserScreen} options={{}} />
      <Tab.Screen name="Reserva" component={BuscarVuelosScreen} options={{}} />
      <Tab.Screen name="Ticket" component={TicketScreen} options={{}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{}} />
      <Tab.Screen name="Pokemon" component={PokemonInfo} options={{}} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

