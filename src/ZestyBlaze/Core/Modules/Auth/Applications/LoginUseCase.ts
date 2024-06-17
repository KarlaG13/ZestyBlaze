import { UserRepository } from "../../../Infrastructure/Repositories/UserRepository";


export class logInUseCase{
    
    private userRepository = new UserRepository;

    async execute(email: string, password: string): Promise<any> {
        return await this.userRepository.logIn(email, password);
    }

}
