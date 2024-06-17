import { UserRepository } from "../../../Infrastructure/Repositories/UserRepository";


export class FindUserByIdUseCase {
    private userRepository = new UserRepository;

    async execute(user_uuid: string): Promise<any> {
        return await this.userRepository.getUser(user_uuid);
    }
}
