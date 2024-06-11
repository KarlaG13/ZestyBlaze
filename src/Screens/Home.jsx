import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Card from '../Components/Card';
import Logo from '../Components/CustomCheckbox'

const Home = () => {
    return (
        <View style={styles.container} >
            <View style={styles.Logo} >
                <Image source={require('../assets/Label.png')} style={styles.image} />
                <Text style={styles.texto}>ZestyBlaze</Text>
            </View>
                <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Text ></Text>


                </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'white'
    },
    Logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    containerInf: {
        width: '100%',
        marginTop: 50,
    }

})


export default Home
