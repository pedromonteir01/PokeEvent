import { v4 as uuidv4 } from "uuid";

//classe para usuário 
export default class User {
    constructor(name, email, password, cpf, telephone, birthdate, balance) {
        this.name = name;
        this.email = email;
        this._password = password;
        this._cpf = cpf;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.balance = balance;
        this.age = this.getAge(birthdate);
        this._id = this.generateId();
    }

    //method age
    getAge(birth) {
        const birthdate = new Date(birth);
        const today = new Date();

        let age = today.getFullYear() - birthdate.getFullYear();
        //verify age
        if(today.getMonth() < birthdate.getMonth() || today.getMonth() == birthdate.getMonth() && today.getDay() < birthdate.getDay()) {
            age--;
        }

        return age;
    }

    //biblioteca de id
    generateId() {
        return uuidv4();
    }
}