import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const FooterComponent = () => {
  return (
            <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 Mi Aplicación</Text>
            <Text style={styles.footerText}>Karen Estefania Rodriguez Garcia</Text>
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
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: 10,
      backgroundColor: '#333',
      alignItems: 'center',
    },
    footerText: {
      color: '#fff',
      fontSize: 14,
    },
  });