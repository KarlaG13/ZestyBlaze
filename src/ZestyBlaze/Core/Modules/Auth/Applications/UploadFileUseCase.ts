import { uploadImageToFirebase } from "../../../Infrastructure/Services/UploadImage";
import { UserRepository } from "../../../Infrastructure/Repositories/UserRepository";
import { PublicationEntity } from "../Domain/Entities/PublicationEntity";
import { PublicationRepository } from "../../../Infrastructure/Repositories/PublicationRepository";


export class UploadFileUseCase {
    async execute(selectedFile: any, description: any, userId: string): Promise<any> {
        const userRepository = new UserRepository();
        const repository = new PublicationRepository();
        let url = await uploadImageToFirebase(selectedFile, userId);
        const userData = await userRepository.getUser(userId);
        let publication = new PublicationEntity(description, userId, url, userData.data.userName)
        return repository.create(publication)
    };
}
