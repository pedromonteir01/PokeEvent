//classe para usuário 
export default class User {
    constructor(name, email, password, cpf, telephone, birthdate) {
        this.name = name;
        this.email = email;
        this._password = password;
        this._cpf = cpf;
        this.telephone = telephone;
        this.birthdate = birthdate;
        this.age = this.getAge(birthdate);
    }

    //method age
    getAge(birth) {
        const birthdate = new Date(birth);
        const today = new Date();

        const age = today.getFullYear() = birthdate.getFullYear();
        //verify age
        if(today.getMonth() < birthdate.getMonth() || today.getMonth() == birthdate.getMonth() && today.getDay() < birthdate.getDay()) {
            age--;
        }

        return age;
    }
}