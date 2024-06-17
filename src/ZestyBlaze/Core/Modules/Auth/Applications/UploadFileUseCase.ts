import { uploadImageToFirebase } from "../../../Infrastructure/Services/UploadImage";


export class UploadFileUseCase {
    async execute(selectedFile: any, description: any, userId: string): Promise<string> {
        return await uploadImageToFirebase(selectedFile, userId);
    };
}
