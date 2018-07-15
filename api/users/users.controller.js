const checkUser = require('./src/check-user');
const findIndex = require('./src/find-index');
const loadUsers = require('./src/load');
const saveUsers = require('./src/save');
const pathUsers = '/../data/usuarios.json';

const users = loadUsers(pathUsers);

module.exports = { getAll, getById, createUser, deleteUser , editUser };

function getAll (req, res) {
    return res.json(users);
}

function getById (req, res) {
    const username = req.params.username;
    let result = users.find(usuarioActual => usuarioActual.username === username);
    res.json(result);
}

function createUser (req, res) {
    const { name, email, username } = req.body;
    const user = { name, email, username, tweets: [] };
    const errors = checkUser(user, users);
    if (errors.length === 0) {
        users.push(user);
        res.json(user);
    } else {
        res.status(400).json(errors);
    }
}

function deleteUser (req, res) {
    const username = req.params.id;
    const userIdx = findIndex(users, username);
    if (userIdx !== -1) {
        const temp = users.splice(userIdx, 1);
        saveUsers(pathUsers, users);
        res.json(temp);
    } else {
        res.status(404).send('Fallo en borrar: usuario no registrado');
    }
}

function editUser (req, res) {
    const username = request.params.username;
    const indice = findIndex(users, username);

    if (request.body && request.body.email)
        users[indice].email = request.body.email;

    if (request.body && request.body.name)
        users[indice].name = request.body.name;

    save(pathUsers, users);
    return users[indice];
} 
