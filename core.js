/*
app.get('/users', obtenerUsuarios);
app.get('/users/:username', obtenerUsuarioPorUsername)
app.delete('/users/:username', borrarUsuarioPorUsername)
app.patch('/users/:username', editarUsuarioPorUsername)
app.post('/users', crearNuevoUsuario)

// Tweet's Routes
app.get('/tweets', obtenerTweets)
app.get('/tweets/:id', obtenerTweetPorId)
app.post('/tweets', crearNuevoTweet)

const tweets = [];


function obtenerTweets(req, res) {

    // Buscar todos los tweets y devolverlos


    let todosLosTweets = [];

    users.forEach(usuario => {
        const tweets = usuario.tweets;
        todosLosTweets = [...todosLosTweets, ...tweets]
    })


    res.json(todosLosTweets);
}



function obtenerTweetPorId(req, res) {

    // Buscar un tweet por el id y devolverlo 
}
function crearNuevoTweet(req, res) {

    // Crear un nuevo tweet en caso de que sea válido  
}

app.listen(_PORT, err => !err && console.log(`Escuchando en el puerto ${_PORT}`) || err && console.error(err));
*/