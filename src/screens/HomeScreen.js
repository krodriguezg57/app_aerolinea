import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const HomeScreen = () => {
  return (
    <View style ={styles.container}>
         <Text> hola estoy en HomeScreen</Text>
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