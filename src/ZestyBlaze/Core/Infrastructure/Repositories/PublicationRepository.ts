import { PublicationEntity } from "../../Modules/Auth/Domain/Entities/PublicationEntity";
import { PublicationInterface } from "../../Modules/Auth/Domain/Interfaces/PublicationInterface";
import firestore from "@react-native-firebase/firestore";


export class PublicationRepository implements PublicationInterface {
    async create(publication: PublicationEntity): Promise<any> {
        try {
            await firestore().collection('Publicaciones').add({
                description : publication.description,
                imageUrl: publication.imageUrl,
                userId: publication.userId,
                publicationDate: publication.publicationDate,
                userName: publication.userName
            })
            return {message: "Publication created successfully", status: "success"};
        } catch (e) {
            return {message: "Error creating publication " + e.message, status: "error"};
        }
    }
    async getPublications(): Promise<any> {
        try {
            let publicaciones = (await firestore().collection('Publicaciones').get()).docs;
            let publicacionesArray = [];
            publicaciones.forEach(element => {
                publicacionesArray.push(element.data())
            });
            if (publicaciones.length > 0){
                return {message: "Publicaciones found", status: "success", data: this.shuffleArray(publicacionesArray)}
            } else {
                return {message: "Publicaciones not found", status: "not found"}
            }
        } catch (e) {
            return {message: "Error getting publications " + e.message, status: "error"};
        }
    }
    async getPublicationsByUser(userId: string): Promise<any> {
        try{
            let publicaciones = (await firestore().collection('Publicaciones').where("userId", "==", userId).get()).docs;
            let publicacionesArray = [];
            publicaciones.forEach(element => {
                publicacionesArray.push(element.data())
            });
            if (publicaciones.length > 0){
                return {message: "Publicaciones found", status: "success", data: publicacionesArray}
            } else {
                return {message: "Publicaciones not found", status: "not found"}
            }
        } catch (e){
            return {message: "Error getting publications " + e.message, status: "error"};
        }
    }

    
    shuffleArray = <T>(array: T[]): T[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
