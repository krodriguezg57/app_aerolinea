import React, { useEffect } from 'react';  // Corrected the import here
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

export const SplashScreen = () => {
  const navigation = useNavigation();  // Corrected typo: 'navegation' -> 'navigation'

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);  // Cleanup the timer on unmount
  }, [navigation]);  // Dependency on 'navigation'

  return (
    <View style={styles.container}>
      {/* Temporarily remove the Text to isolate the error */}
      {/* <Text>Hola estoy en SplashScreen</Text> */}
      <Image source={require('./../../assets/kitty.jpeg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  }
});
