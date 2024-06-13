import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import IconExit from 'react-native-vector-icons/MaterialIcons';
import IconGrid from 'react-native-vector-icons/Fontisto';
import Card from '../Components/Card';



const Profile = () => {
    return (
        <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>

            <View style={styles.container}>
                <View style={styles.containerHeader} >
                    <View style={styles.Logo}>
                        <Image source={require('../assets/Label.png')} style={styles.image} />
                        <Text style={styles.texto}>ZestyBlaze</Text>
                    </View>

                    <View>
                        <IconExit name="exit-to-app" size={30} color="#757575" />
                    </View>

                </View>

                <View style={styles.containerDataProfile}>
                    <Image
                        source={require('../assets/young.jpg')}
                        style={styles.photoProfile}
                    />
                    <Text style={styles.nameProfile}>Ana García</Text>
                    <Text style={styles.userProfile}>@moonlight</Text>
                </View>

                <View style={styles.containerIconPublication}>
                    <IconGrid name="nav-icon-grid" size={30} color="#757575" />
                </View>
                <Card />
                <Card />
                <Card />


            </View>
        </ScrollView>

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
    },

    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    photoProfile: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    nameProfile: {
        fontSize: 24,
        color: 'black'
    },
    userProfile: {

    },
    containerDataProfile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%'
    },
    containerIconPublication: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#D9D9D9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInf: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 50

    },
})


export default Profile
