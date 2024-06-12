import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import UploadButton from '../Components/UploadButton';
import DeleteButton from '../Components/DeleteButton';
import CustomButton from '../Components/CustomButton';

const Publication = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerTextArea} >
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

            <View>

                <Text>Subir foto/video/audio</Text>
                <UploadButton />
            </View>

            <View style={styles.containerBtn}>
                <DeleteButton />
                <CustomButton/>

            </View>

        </View>
    )
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
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        textAlignVertical: 'top', 
    },
    containerTextArea: {
        width: '100%'
    },
    containerBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})


export default Publication
