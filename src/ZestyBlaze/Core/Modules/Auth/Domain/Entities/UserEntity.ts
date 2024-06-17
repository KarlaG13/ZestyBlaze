export class UserEntity {
    public fullName: string;
    public email: string;
    public password: string;
    public userName: string;

    public constructor(fullName: string, email: string, password: string, userName: string) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
}
