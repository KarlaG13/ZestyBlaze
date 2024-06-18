import { PublicationRepository } from "../../../Infrastructure/Repositories/PublicationRepository";


export class GetPublicationsByUserUseCase{
    private repository = new PublicationRepository()
    async execute(user_id: string): Promise<any>{
        const publications = await this.repository.getPublicationsByUser(user_id)
        return publications
    }
}