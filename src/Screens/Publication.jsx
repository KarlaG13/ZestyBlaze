import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button, PermissionsAndroid, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useUser } from '../ZestyBlaze/Core/Infrastructure/Context/UserContext';
import { UploadFileUseCase } from '../ZestyBlaze/Core/Modules/Auth/Applications/UploadFileUseCase';
import DeleteButton from '../Components/DeleteButton';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from "@react-navigation/native";

const Publication = () => {
    const navigation = useNavigation();
    const { userId } = useUser();
    const [text, setText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        const requestStoragePermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Permiso de almacenamiento',
                        message: 'La aplicación necesita acceso a su almacenamiento para seleccionar archivos',
                        buttonNeutral: 'Preguntar más tarde',
                        buttonNegative: 'Cancelar',
                        buttonPositive: 'OK',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        };
        let permission = requestStoragePermission()
        setHasPermission(permission);
    }, []);

    const handleFileSelect = async () => {
        if (!hasPermission) {
            console.log('Permiso de almacenamiento denegado');
            return;
        }

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            setSelectedFile(res[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.warn('Usuario canceló el selector de documentos');
            } else {
                console.error('Error desconocido: ', err);
            }
        }
    };

    const toPublic = async () => {
        if (selectedFile) {
            try {
                const useCase = new UploadFileUseCase();
                let publicated = await useCase.execute(selectedFile, text,  userId);
                if (publicated.status == 'success') {
                    alert('Publicación creada')
                    navigation.navigate('Menu')
                } else {
                    alert('Error al crear la publicación')
                }
            } catch (err) {
                console.error('Error al subir el archivo:', err);
            }
        } else {
            console.warn('No se ha seleccionado ningún archivo');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTextArea}>
                <Text>Añadir mensaje</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Escribe algo..."
                    placeholderTextColor="grey"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => setText(text)}
                    value={text}
                />
            </View>

            <View style={styles.containerUpload}>
                <Text>Subir foto</Text>
                <Button title="Seleccionar archivo" onPress={handleFileSelect} />
                {selectedFile && (
                    <View style={{ marginTop: 20 }}>
                        {selectedFile.type.startsWith('image/') && (
                            <Image
                                source={{ uri: selectedFile.uri }}
                                style={{ width: 200, height: 200 }}
                            />
                        )}
                        <Text>{selectedFile.name}</Text>
                    </View>
                )}
            </View>

            <View style={styles.containerBtn}>
                <DeleteButton />
                <CustomButton text="Publicar" onPressed={toPublic} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    textArea: {
        color: 'black',
        height: 150,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        textAlignVertical: 'top',
    },
    containerTextArea: {
        width: '90%',
    },
    containerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    containerUpload: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
});

export default Publication;