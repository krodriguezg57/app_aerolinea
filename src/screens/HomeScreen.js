import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { FooterComponent } from './shared/FooterComponent';
import { useTheme } from '@react-navigation/native'; // Importa el hook para acceder al tema
import { useAuth } from '../context/AuthContext';

export const HomeScreen = ({navigation}) => {
  const { colors } = useTheme();
  const {user}=useAuth()
  return (
    <View style ={styles.container}>
         <Text>{user?.displayName || "Usuario"}</Text>
         <Text> hola estoy en HomeScreen</Text>
         <FooterComponent />
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});