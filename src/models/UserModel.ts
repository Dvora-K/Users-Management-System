export default class UserModel {
    id!: string
    name!: string
    username!: string
    email!: string
    constructor(id: string, name: string, username: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }
}