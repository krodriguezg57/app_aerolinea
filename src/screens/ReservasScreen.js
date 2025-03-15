import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const ReservasScreen = () => {
  return (
    <View style ={styles.container}>
        <Text>Hola ReservasScreen</Text>
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