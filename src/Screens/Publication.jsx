import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import UploadButton from '../Components/UploadButton';
import DeleteButton from '../Components/DeleteButton';
import CustomButton from '../Components/CustomButton';
import { useUser } from '../ZestyBlaze/Core/Infrastructure/Context/UserContext';
import { UploadFileUseCase } from '../ZestyBlaze/Core/Modules/Auth/Applications/UploadFileUseCase';

const Publication = () => {
    const { userId, logout } = useUser();
    const [text, setText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file[0]);
    }

    const toPublic = async () => {
        let useCase = new UploadFileUseCase();
        await useCase.execute(selectedFile, text, userId);
    }

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
                <Text>Subir foto/video/audio</Text>
                <UploadButton onSelectFile={handleFileSelect} />
                {selectedFile && (
                    <View style={{ marginTop: 20 }}>
                        <Image
                            source={{ uri: selectedFile.uri }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                )}
            </View>

            <View style={styles.containerBtn}>
                <DeleteButton />
                <CustomButton text="Publicar" onPressed={toPublic}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    textArea: {
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
