import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { FooterComponent } from './shared/FooterComponent'; 
import { useAuth } from '../context/AuthContext';

export const UserScreen = ({navigation}) => {
  const {user}=useAuth()
  return (
    <View style ={styles.container}>
        <Text>{user?.displayName|| "Usuario"}</Text>
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