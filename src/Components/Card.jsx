import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Heart from './Icon_Heart';

const Card = (props) => {
    const { title, description, img, date } = props;

    return (
        <View style={styles.container}>
            
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/young.jpg')} // Cambia la fuente según la imagen real
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <View style={styles.profileText}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>

            <Text style={styles.description}  >{description}</Text>

            <Image
                source={img} // Cambia la fuente según la imagen real
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
        color:'black'
    },
    date: {
        fontSize: 14,
        color: '#888',
    },
    description:{
        color:'black',
        padding:3
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
