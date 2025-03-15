import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { FooterComponent } from './shared/FooterComponent'; 

export const UserScreen = () => {
  return (
    <View style ={styles.container}>
        <Text>Hola UserScreen</Text>
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