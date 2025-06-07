import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AuthContext'
import { auth } from '../services/firebaseConfig'
import { showMessage } from 'react-native-flash-message'
import { updateEmail } from 'firebase/auth'
import EditModal from '../components/ModalEditProfile'

export default function SettingsScreen() {

    const {user} = useAuth()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [FieldValue, setFieldValue] = useState('')
    const [fieldType, setFieldType] = useState('')  

    const handleEditProfile = (field) => {
        setModalTitle(field)
        setFieldValue(
            field === 'Nombre' 
                ? user?.displayName || ''
                : field === 'Correo' 
                ? user?.email || ''
                : field === 'Contraseña' 
                ? '********'
                : ''
        )
        setModalVisible(true)
    }

    const handleSave = async () => {
        try {   
            if (modalTitle === 'Nombre') {
                await updateProfile(auth.currentUser, { displayName: FieldValue })
                showMessage({       
                    message: '😊' ,
                    description: 'Nombre actualizado correctamente',
                    type: 'success',
                })
            } else if (modalTitle === 'Correo') {
                await updateEmail(auth.currentUser, { displayName: FieldValue })
                showMessage({       
                    message: '😊' ,
                    description: 'Correo actualizado correctamente',
                    type: 'success',
                })
            }else if (modalTitle === 'Contraseña') {
                await updatePassword(auth.currentUser, FieldValue)
                showMessage({       
                    message: '😊' ,
                    description: 'Contraseña actualizada correctamente',
                    type: 'success',
                })
            }
        }catch (error) {
            console.error('Error al actualizar el perfil:', error)      
            showMessage({       
                message: '😢' ,
                description: 'Error al actualizar el perfil',
                type: 'danger',
            })
        } finally { 
            setModalVisible(false)
            setFieldValue('')
        }
    

  return (
    <View>
        <Text>Settings Screen</Text>
        {/* Editar nombre */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View>
                <Text>Nombre</Text>
                <Text>{user?.displayName || 'Sin nombre'}</Text>
            </View>

            <TouchableOpacity onPress={() => handleEditProfile('Nombre')}>
                <Text>Editar Nombre</Text>
                </TouchableOpacity>
        </View>

        {/* Editar correo */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View>
                <Text>Correo</Text>
                <Text>{user?.email || 'Sin email'}</Text>
            </View>

            <TouchableOpacity onPress={() => handleEditProfile('Correo')}>
                <Text>Editar Correo</Text>
                </TouchableOpacity>
        </View>
        {/* Editar contraseña */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View>
                <Text>Contraseña</Text>
                <Text>********</Text>
            </View>

            <TouchableOpacity onPress={() => handleEditProfile('Contraseña')}>
                <Text>Editar Contraseña</Text>
            </TouchableOpacity>

          
            <TouchableOpacity onPress={() => handleEditProfile('About')}>
                <Text>Editar Acerca de</Text>
            </TouchableOpacity>

        </View>

        <EditModal
            visible={isModalVisible}
            title={modalTitle}
            value={FieldValue}
            onChangeText={setFieldValue}
            onSave={handleSave}
            onCancel={() => setModalVisible(false)}
        />
    </View>
    
  )
}
}

