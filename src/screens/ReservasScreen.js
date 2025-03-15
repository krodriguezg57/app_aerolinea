import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { FooterComponent } from './shared/FooterComponent'; 
import Colors from '../constants/Colors';

export const ReservasScreen = () => {
  return (
    <View style ={styles.container}>
        <Text>Hola ReservasScreen</Text>
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