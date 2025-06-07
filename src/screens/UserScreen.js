import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native'

import { FooterComponent } from './shared/FooterComponent'; 

import { useAuth } from '../context/AuthContext';
import Colors from '../constants/Colors';
import { signOut } from 'firebase/auth';

import { auth } from '../services/firebaseConfig';
import { showMessage } from 'react-native-flash-message';

export const UserScreen = ({navigation}) => {
 
  const {user}=useAuth()
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const defaultImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'; 

  React.useEffect(() => {
    if (user && user.photoURL) {
      setImageUri(user.photoURL);
    } else {
      setImageUri(defaultImage); 
    }
  }, [user]);

  const handleLogout =async ()  => {
    try{
      await signOut(auth); 
      showMessage({
        message: '😊 Exito',
        description: 'Sesión cerrada correctamente',
        type: 'success',
      });
      setLogoutModalVisible(false)
      navigation.navigate('Login');

    }catch(error){
      console.error("Error al cerrar sesión:", error);
      showMessage({
        message: '😢 Fallido',
        description: 'Error al cerrar sesión',
        type: 'danger',
      });
      
    }
    
  }

  return (
    <View style ={styles.container}>
        <Text>{user?.displayName|| "Usuario"}</Text>
        <Text>Hola UserScreen</Text>
        <Text>Foto de perfil</Text>
        <Image source={{uri: imageUri || defaultImage}} style={styles.image}  />
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={{color: Colors.primary}}>Ajustes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{color: Colors.primary}}>Cerrar sesion</Text>
        </TouchableOpacity>
      
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
  },image: {
    width: 150,
    height: 150,
    borderRadius: 10, // opcional
  }
});