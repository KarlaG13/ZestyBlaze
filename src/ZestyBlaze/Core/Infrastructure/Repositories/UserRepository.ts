import { UserEntity } from "../../Modules/Auth/Domain/Entities/UserEntity";
import { UserInterface } from "../../Modules/Auth/Domain/Interfaces/UserInterface";
import firestore from "@react-native-firebase/firestore";

export class UserRepository implements UserInterface {
    async signUp(user: UserEntity): Promise<any> {
        try {
            await firestore().collection('Usuarios').add({
                email: user.email,
                password: user.password,
                userName: user.userName,
                fullName: user.fullName,
            });

            return { status: "success", message: "Usuario registrado exitosamente" };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async logIn(email: string, password: string): Promise<any> {
        try {
            const querySnapshot = await firestore().collection('Usuarios').where("email", "==", email).get();
            if (!querySnapshot.empty) {
                const user = querySnapshot.docs[0].data();
                const storedPassword = user.password;

                if (password === storedPassword) {
                    const userData = {
                        id: querySnapshot.docs[0].id,
                        email: user.email,
                        userName: user.userName,
                    };

                    const response = {
                        status: "success",
                        data: userData
                    };
                    return Promise.resolve(response);
                } else {
                    const response = { status: "error", message: "Contraseña incorrecta" };
                    console.log(response);
                    return Promise.resolve(response);
                }
            } else {
                const response = { status: "error", message: "Usuario no encontrado" };
                return Promise.resolve(response);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUser(user_uuid: string): Promise<any> {
        try {
            const userDoc = await firestore().collection('Usuarios').doc(user_uuid).get();
    
            if (userDoc.exists) {
                const userData = userDoc.data();
                const response = {
                    status: "success",
                    data: userData
                };
                return response;
            } else {
                const response = { status: "error", message: "Usuario no encontrado" };
                return response;
            }
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            throw error;
        }
    }
    
}
