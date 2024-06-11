import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Heart from './Icon_Heart';

const Card = (props) => {
    const { title, description, img } = props;

    return (
        <View style={styles.container}>
            
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/young.jpg')} // Cambia la fuente según la imagen real
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <View style={styles.profileText}>
                    <Text style={styles.title}>Lucia</Text>
                    <Text style={styles.description}>2 de mayo</Text>
                </View>
            </View>

            <Image
                source={require('../assets/planetario.jpg')} // Cambia la fuente según la imagen real
                style={styles.publicationImage}
            />

            <TouchableOpacity style={styles.heartButton}>
                <Heart />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileText: {
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
    publicationImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    heartButton: {
        alignSelf: 'center',
    },
});

export default Card;
