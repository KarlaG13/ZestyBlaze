import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // Importar el selector de documentos

const UploadButton = () => {
    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.audio, DocumentPicker.types.video],
            });
            console.log(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Canceled from single doc picker');
            } else {
                throw err;
            }
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleFilePick}>
            <View style={styles.icon}>
               
            </View>
            <View style={styles.text}>
                <Text style={styles.textSpan}>Click to upload image</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        cursor: 'pointer',
        borderWidth: 2,
        borderColor: '#cacaca',
        borderStyle: 'dashed',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 24,
        borderRadius: 10,
        boxShadow: '0px 48px 35px -48px rgba(0,0,0,0.1)',
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSpan: {
        fontWeight: '400',
        color: 'rgba(75, 85, 99, 1)',
    },
});

export default UploadButton;
