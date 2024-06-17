import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { RegisterUseCase } from '../ZestyBlaze/Core/Modules/Auth/Applications/RegisterUseCase';


const Register = () => {
    const navigation = useNavigation();
    const inputRef = useRef(null);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const useCase = new RegisterUseCase();

    const handleRegister = async () => {
        if (!email || !fullName || !username || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos.');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        let response = await useCase.execute(fullName, email, password, username);
        if (response.status === 'success') {
            alert(response.message);
            navigation.navigate('Login');
        } else {
            alert(response.message);
        }
    };
    

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Image source={require('../assets/Label.png')} />
                <Text style={styles.texto}>ZestyBlaze</Text>
            </View>

            <View style={styles.form} >
                <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>

                    <View style={styles.flexColumn}>
                        <Text style={styles.label}>Correo electrónico</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.flexColumn}>
                        <Text style={styles.label}>Nombre completo</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            keyboardType="name"
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.flexColumn}>
                        <Text style={styles.label}>Usuario</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View style={styles.flexColumn}>
                        <Text style={styles.label}>Contraseña</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <View style={styles.flexColumn}>
                        <Text style={styles.label}>Confirmar contraseña</Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <LinearGradient
                        colors={['#4158d0', '#c850c0', '#ffcc70']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonSubmit}
                    >
                        <TouchableOpacity style={styles.buttonSubmitInner} onPress={handleRegister}>
                            <Text style={styles.buttonSubmitText}>Registrate</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <Text style={styles.p}>
                        ¿Ya tienes una cuenta?{' '}
                        <Text style={styles.span} onPress={() => navigation.navigate('Login')}>Inicia sesión</Text>
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    },
    containerInf: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        width: '100%',
        height: 700,
    },
    Logo: {
           textAlign: 'center',
        justifyContent: 'center',
        width:'100%',
        alignItems:'center'

    },
    form: {
        width: '100%',
        height: '70%',
    },
    texto: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontSize: 24,
        color: 'black',
        marginTop: 10, 
        marginBottom:20
    },

    label: {
        color: '#151717',
        fontWeight: '600',
    },
    inputForm: {
        borderWidth: 1.5,
        borderColor: '#ecedec',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    input: {
        marginLeft: 10,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 3,
        marginRight: 5,
    },
    checkboxLabel: {
        fontSize: 14,
        color: 'black',
    },
    span: {
        fontSize: 14,
        color: '#2d79f3',
        fontWeight: '500',
    },
    buttonSubmit: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 40,
        marginBottom: 40
    },
    buttonSubmitInner: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonSubmitText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
    },
    p: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        marginVertical: 5,
    },
    line: {
        marginVertical: 20,
    },
    btn: {
        width: '48%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    flexColumn: {
        marginTop: 20
    }
});

export default Register
