import { PublicationEntity } from '../Entities/PublicationEntity'


export interface PublicationInterface {
    create(publication: PublicationEntity): Promise<any>;
    getPublications(): Promise<any>;
    getPublicationsByUser(userId: string): Promise<any>;
}