import e from "express";
import Users from "../../models/users/users.js";
import User from "../../models/users/user.js";

//instancia a lista
const usersList = new Users();

//coleta os usuários cadastrados
export const getAllUsers = (req, res) => {
    const users = usersList.getAllUsers();
    //verifica se existe usuários
    if(users.length) {
        return res.status(200).send({ users, quantity: users.length });
    } else {
        return res.status(200).send({
            message: 'no_users_registered'
        });
    }
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = usersList.getUserById(id);

    if(user) {
        return res.status(200).send(user);
    } 

        return res.status(400).send({
            message: 'invalid_id'
        });
    
}

export const postUser = (req, res) => {
    const { name, email, password, cpf, telephone, birthdate, balance } = req.body;

    const errors = [];

    if(!name || !email || !password || !cpf || !telephone || !birthdate || !balance) {
        errors.push('complete_all_fields');
    }

    if(name.length < 3 && name.length > 100) {
        errors.push('invalid_name');
    }

    if(email.length < 8 && email.length > 75) {
        errors.push('invalid_name');
    }

    if(password.length < 8) {
        errors.push('invalid_password');
    }

    if(cpf.length < 12 && cpf.length > 12 && typeof(cpf) != 'number') {
        errors.push('invalid_cpf');
    }

    if(typeof(telephone) != 'number') {
        errors.push('invalid_telephone');
    }

    if(typeof(balance) != 'number' && balance < 0) {
        errors.push('invalid_balance');
    }

    if(errors.length) {
        return res.status(400).send({ errors });
    } else {
        const user = new User(name, email, password, cpf, telephone, birthdate, balance);
        usersList.createUser(user);
        return res.status(200).send({ user });
    }
}

export const putUser = (req, res) => {
    const { id } = req.params;
    const { name, email, password, cpf, telephone, birthdate, balance } = req.body;

    const user = usersList.editUser(id, name, email, password, cpf, telephone, birthdate, balance);

    if(user) {
        return res.status(200).send({ user });
    } else {
        return res.status(400).send({
            message: 'invalid_id'
        });
    }

}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = usersList.deleteUser(id);
    if(user) {
        return res.status(200).send({ user });
    } else {
        return res.status(400).send({
            message: 'invalid_id'
        });
    }
}