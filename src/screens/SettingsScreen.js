import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { auth } from '../services/firebaseConfig';
import { showMessage } from 'react-native-flash-message';
import { updateEmail, updateProfile, updatePassword } from 'firebase/auth';
import  EditModal  from '../components/EditModal';  

const CLOUDINARY_URL = 'cloudinary://729688774938797:4aqJvtPJs2SyoZ3OdyFzYkw9x-w@dpboywv89'
const CLOUDINARY_URL_2 = 'https://api.cloudinary.com/v1_1/dpboywv89/image/upload'
const UPLOAD_PRESET = 'img-profile'


const SettingsScreen = () => {
    const { user, setUser } = useAuth();
    const [imageUri, setImageUri] = useState(user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png');

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [FieldValue, setFieldValue] = useState('');
    const [fieldType, setFieldType] = useState('');

    const handleEditProfile = (field) => {
        setModalTitle(field);
        setFieldValue(
                  field === 'Nombre'
                ? user?.displayName || ''
                : field === 'Correo'
                ? user?.email || ''
                : field === 'Contraseña'
                ? '********'
                : ''
        );
        setModalVisible(true);
    };

    const handleSave = async () => {
        console.log('Saving field:', modalTitle, 'with value:', FieldValue);
        try {
            if (modalTitle === 'Nombre') {
                await updateProfile(auth.currentUser, { displayName: FieldValue });
                showMessage({
                    message: '😊 Exito',
                    description: 'Nombre actualizado correctamente',
                    type: 'success',
                });
            } else if (modalTitle === 'Correo') {
                await updateEmail(auth.currentUser, FieldValue);
                showMessage({
                    message: '😊 Exito',
                    description: 'Correo actualizado correctamente',
                    type: 'success',
                });
            } else if (modalTitle === 'Contraseña') {
                await updatePassword(auth.currentUser, FieldValue);
                showMessage({
                    message: '😊 Exito',
                    description: 'Contraseña actualizada correctamente',
                    type: 'success',
                });
            }
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            showMessage({
                message: '😢 Fallido',
                description: 'Error al actualizar el perfil',
                type: 'danger',
            });
        } finally {
            setModalVisible(false);
            setFieldValue('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Settings Screen</Text>

            <View style={styles.infoContainer}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Nombre</Text>
                    <Text style={styles.value}>{user?.displayName || 'Sin nombre'}</Text>
                </View>
                <TouchableOpacity onPress={() => handleEditProfile('Nombre')} style={styles.editButton}>
                    <Text style={styles.editText}>Editar Nombre</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Correo</Text>
                    <Text style={styles.value}>{user?.email || 'Sin email'}</Text>
                </View>
                <TouchableOpacity onPress={() => handleEditProfile('Correo')} style={styles.editButton}>
                    <Text style={styles.editText}>Editar Correo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                    <Text style={styles.value}>********</Text>
                </View>
                <TouchableOpacity onPress={() => handleEditProfile('Contraseña')} style={styles.editButton}>
                    <Text style={styles.editText}>Editar Contraseña</Text>
                </TouchableOpacity>
            </View>

            <EditModal visible={isModalVisible}
                title={modalTitle}
                value={FieldValue}
                onChangeText={setFieldValue}
                onSave={handleSave}
                onCancel={() => setModalVisible(false)}
            />

           
        </View>
    );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
  },
})

export default SettingsScreen;
