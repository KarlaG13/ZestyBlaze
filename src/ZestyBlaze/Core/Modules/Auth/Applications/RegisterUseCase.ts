import { UserRepository } from "../../../Infrastructure/Repositories/UserRepository";
import { UserEntity } from "../Domain/Entities/UserEntity";


export class RegisterUseCase {
    private userRepository = new UserRepository;

    async execute(fullName: string, email: string, password: string, userName: string): Promise<any> {
        console.log(fullName);
        console.log(email);
        console.log(password);
        console.log(userName);
        return await this.userRepository.signUp(new UserEntity(fullName, email, password, userName));
    }
}
