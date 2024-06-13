import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";



const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Image source={require('../assets/Label.png')} />
                <Text style={styles.texto}>ZestyBlaze</Text>
            </View>
            <View style={styles.form} >
                <View style={styles.flexColumn}>
                    <Text style={styles.label}>Correo electrónico</Text>
                </View>
                <View style={styles.inputForm}>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.flexColumn}>
                    <Text style={styles.label}> Contraseña</Text>
                </View>
                <View style={styles.inputForm}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                    />
                </View>

                <LinearGradient
                    colors={['#4158d0', '#c850c0', '#ffcc70']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonSubmit}
                >
                    <TouchableOpacity style={styles.buttonSubmitInner} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.buttonSubmitText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={styles.p} onPress={() => navigation.navigate('Register')}>
                    ¿No tienes una cuenta?{' '}
                    <Text style={styles.span}>Registrate</Text>
                </Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    },
    Logo: {
        textAlign: 'center',
        justifyContent: 'center',
        width:'100%',
        alignItems:'center'

    },
    form: {
        width: '100%',
        height: '60%',
        marginTop: 20
    },
    texto: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontSize: 24,
        color: 'black',
        marginTop: 10
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
        marginTop: 10,
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

export default Login;
