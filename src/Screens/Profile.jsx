import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import IconExit from 'react-native-vector-icons/MaterialIcons';
import IconGrid from 'react-native-vector-icons/Fontisto';
import Card from '../Components/Card';
import { FindUserByIdUseCase } from '../ZestyBlaze/Core/Modules/Auth/Applications/FindUserByIDUseCase';
import { useUser } from '../ZestyBlaze/Core/Infrastructure/Context/UserContext';

const Profile = () => {
    const { userId, logout } = useUser();
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const useCase = new FindUserByIdUseCase();
                const user = await useCase.execute(userId);

                if (user) {
                    setName(user.data.fullName || ''); // Assuming fullName is a string or can be safely defaulted to an empty string
                    setUserName(user.data.userName || ''); // Assuming userName is a string or can be safely defaulted to an empty string
                } else {
                    // Handle case where user is not found
                    console.log('Usuario no encontrado');
                }
            } catch (error) {
                console.error('Error al obtener perfil:', error);
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, [userId]);

    if (loading) {
        return <Text>Cargando perfil...</Text>; // Mostrar un indicador de carga mientras se obtiene el perfil
    }

    return (
        <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.Logo}>
                        <Image source={require('../assets/Label.png')} style={styles.image} />
                        <Text style={styles.texto}>ZestyBlaze</Text>
                    </View>
                    <View>
                        <IconExit name="exit-to-app" size={30} color="#757575" />
                    </View>
                </View>

                <View style={styles.containerDataProfile}>
                    <Image source={require('../assets/young.jpg')} style={styles.photoProfile} />
                    <Text style={styles.nameProfile}>{name}</Text>
                    <Text style={styles.userProfile}>@{userName}</Text>
                </View>

                <View style={styles.containerIconPublication}>
                    <IconGrid name="nav-icon-grid" size={30} color="#757575" />
                </View>
                <Card />
                <Card />
                <Card />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    Logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    photoProfile: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    nameProfile: {
        fontSize: 24,
        color: 'black',
    },
    userProfile: {},
    containerDataProfile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
    },
    containerIconPublication: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#D9D9D9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInf: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 50,
    },
});

export default Profile;
