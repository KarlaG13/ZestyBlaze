import storage from '@react-native-firebase/storage';

export const uploadImageToFirebase = async (selectedFile: any, userId: string): Promise<any> => {
    if (!selectedFile) {
        throw new Error('No file selected');
    }

    const { uri, name } = selectedFile;
    try{
        const path = `images/${userId}/${name}`;
        const reference = storage().ref(path);
        const response = await reference.putFile(uri);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};

