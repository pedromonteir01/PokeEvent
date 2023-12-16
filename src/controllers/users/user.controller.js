import Users from "../../models/users/users";

//instancia a lista
const usersList = new Users();

//coleta os usuários cadastrados
export const getAllUsers = (req, res) => {
    const users = usersList.getAllUsers();
    //verifica se existe usuários
    if(users.length) {
        return res.status(200).send({ users, quantity: users.length })
    }

    return res.status(200).send({
        message: 'no_users_registered'
    })
}