import React, { useEffect } from 'react';
import { PermissionsAndroid, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // Importar el selector de documentos

const UploadButton = ({ onSelectFile }) => {
    const handleFilePick = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]);

            if (
                granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images, DocumentPicker.types.audio, DocumentPicker.types.video],
                });
                onSelectFile(res);
            } else {
                console.log('Permisos de almacenamiento no concedidos');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleFilePick}>
            <Text style={styles.textSpan}>Click para subir imagen</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#cacaca',
        borderStyle: 'dashed',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 24,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
    textSpan: {
        fontWeight: '400',
        color: 'rgba(75, 85, 99, 1)',
    },
});

export default UploadButton;
