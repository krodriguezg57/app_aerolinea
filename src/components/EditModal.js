//Mi primer componente de modal para editar el perfil del usuario
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const EditModal= ({visible, title, value, onChangeText, onSave, onCancel}) =>{
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        
        <View style={styles.modalContent}> 
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={`Nuevo ${title.toLowerCase()}`}
          />

          <View >
            <TouchableOpacity onPress={onSave}>
              <Text style={styles.button}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text >Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>    
  )
}

const styles = StyleSheet.create({
  modalContainer: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  }, input: {
    height: 40,
    borderColor: 'ff0000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },buttonText: {
    color: '##ff0000',
    fontSize: 16,
    textAlign: 'center',
  },button: {
    backgroundColor: '#00ff13',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },cancelButton: {
    backgroundColor: '#00c1ff', // Color diferente para el botón de cancelar
  },modalContent: {
    width: '80%',
    backgroundColor: '#fdfded',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }})

export default EditModal