//classe para vetor que contenha usuários

export default class Users {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id) {
        return this.users.find((user) => user._id == id);
    }

    createUser(user) {
        this.users.push(user);
    }

    editUser(id, name, email, password, cpf, telephone, birthdate, balance) {
        const user = this.getUserById(id);

        if(user) {
            user.name = name;
            user.email = email;
            user._password = password;
            user._cpf = cpf;
            user.telephone = telephone;
            user.birthdate = birthdate;
            user.balance = balance;
        }

        return user;
    }

    deleteUser(id) {
        return this.users = this.users.filter((user) => user._id !== id);
    }
}