import React, {useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Card from '../Components/Card';
import Logo from '../Components/CustomCheckbox';
import { useUser } from '../ZestyBlaze/Core/Infrastructure/Context/UserContext';

const Home = () => {
    const { userId, logout } = useUser();

    useEffect(() => {
        console.log(userId);
    }, []);

    return (
        <View style={styles.container} >
            <View style={styles.Logo} >
                <Image source={require('../assets/Label.png')} style={styles.image} />
                <Text style={styles.texto}>ZestyBlaze</Text>
            </View>
            <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>
                <Card />
               



            </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    Logo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderBottomColor: '#D9D9D9',
    },
    texto: {
        color: 'black',
        fontSize:15,
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
