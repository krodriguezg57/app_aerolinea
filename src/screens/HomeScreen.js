import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { FooterComponent } from './shared/FooterComponent';
import { useTheme } from '@react-navigation/native'; // Importa el hook para acceder al tema

export const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style ={styles.container}>
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