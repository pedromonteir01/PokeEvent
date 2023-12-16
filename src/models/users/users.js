//classe para usuário 
export default class User {
    constructor(name, email, password, cpf, telephone, birthdate) {
        this.name = name;
        this.email = email;
        this._password = password;
        this._cpf = cpf;
        this.telephone = telephone;
        this.birthdate = birthdate;
    }
}