// screens/BuscarVuelosScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BuscarVuelosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí podrás buscar tus vuelos ✈️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});
