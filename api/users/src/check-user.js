module.exports = function (user, users) {
    const errors = [];
    if (!user) errors.push({ e: 'Cuerpo de la solicitud vacía' });
    if (user && !user.username) errors.push({ e: 'El usuario no contiene username' });
    if (user && !user.email) errors.push({ e: 'El usuario no contiene email' });
    if (user && users.some(u => u.username === user.username)) errors.push({ e: 'Username repetido' });
    return errors;
}