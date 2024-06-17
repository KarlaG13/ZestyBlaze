import { UserEntity } from "../Entities/UserEntity";

export interface UserInterface {
    signUp(user: UserEntity): Promise<any>;
    logIn(email:string, password:string): Promise<any>;
    getUser(user_uuid: string): Promise<any>;
}