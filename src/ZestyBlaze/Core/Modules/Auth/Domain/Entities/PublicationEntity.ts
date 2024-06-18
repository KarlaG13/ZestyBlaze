export class PublicationEntity {
    public description: string
    public userId: string
    public imageUrl: string
    public publicationDate: Date
    public userName: string

    constructor(description: string, userId: string, imageUrl: string, userName: string) {
        this.description = description
        this.userId = userId
        this.imageUrl = imageUrl
        this.publicationDate = new Date()
        this.userName = userName
    }
}