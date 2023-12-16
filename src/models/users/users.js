//classe para vetor que contenha usuários

export default class Users {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id) {
        const user = this.users.filter((user) => user.id == id);
        return user;
    }

    createUser(user) {
        this.users.push(user);
    }
}