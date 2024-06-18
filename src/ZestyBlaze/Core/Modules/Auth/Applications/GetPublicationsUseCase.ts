import { PublicationRepository } from "../../../Infrastructure/Repositories/PublicationRepository";


export class GetPublicationsUseCase {
    private repository = new PublicationRepository();
    async execute(): Promise<any> {
        return await this.repository.getPublications()
    }
}