import React, { useState } from 'react'; // ❌ ERROR: Faltaba importar useState
// ✅ CORREGIDO: Se importó correctamente useState
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Colors from '../../constants/Colors';
import { auth } from '../../services/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); // ❌ ERROR: `setError('')` no es consistente (debería ser booleano)
// ✅ CORREGIDO: Se inicializó `setError(false)`

  const [errorMensaje, setErrorMensaje] = useState('');

  const navigation = useNavigation(); 

  const handleLogin = () => {
    if (!email || !password) {
      setError(true);
      setErrorMensaje("Por favor, ingresa un correo y contraseña.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        console.log("Usuario logueado: ", userCredential.user);
        setError(false);
        setErrorMensaje('');
        navigation.navigate('MainTabs'); 
      
      })
      .catch((error) => {
        console.error("Error en login:", error);
        setError(true);
        setErrorMensaje(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/kitty.jpeg')} style={styles.image} />

      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error && (
        <Text style={styles.errorText}>
          {/* ❌ ERROR: Si `errorMensaje` es `undefined`, causa error de nodo de texto */}
          {/* ✅ CORREGIDO: Convertimos `errorMensaje` en string seguro */}
          Revisa tus credenciales e intenta nuevamente: {String(errorMensaje) || ""}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.title}>¿Aún no tienes una cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        {/* ❌ ERROR: <Text> dentro de <TouchableOpacity> sin `style` puede generar problemas */}
        {/* ✅ CORREGIDO: Se agregó `style` al texto */}
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Regístrate aquí
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: Colors.alert,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
