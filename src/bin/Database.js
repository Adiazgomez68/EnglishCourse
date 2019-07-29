const mongoose = require('mongoose');
const Usuarios = require('./models/Usuarios');
const Nivelescursos = require('./models/Nivelescursos');
const Coins = require('./models/Coins');
const Temas = require('./models/Temas');
const Subtemas = require('./models/Subtemas');
const Actividades = require('./models/Actividades');

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://Adiazgomez68:Bimadino@cluster0-gm5l3.mongodb.net/english-courseDB?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            )

            console.log("Database connected");

        }
        catch (err) {
            console.error(err);
        }
    }


// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

// CRUD DE LA COLECCIÓN USUARIOS

// Guardar usuario

setUser(user, res) {
    Usuarios.create(user, (err, nUser) => {
        if (err) throw err;
        res.send({status: 200, newUser: nUser});
    })
}

// Buscar todos los usuarios

getUsers(res) {
    Usuarios.find({}, (err,users) => {
        if (err) throw err;
        res.send({allUsers: users});
    })
}

// Buscar un usuario por ID

getUserId(res,id) {
    Usuarios.find({_id: id}, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
}

// Actualizar un usuario

updateUser(newDatas, res) {
    let { usuario, password } = newDatas;

    Usuarios.updateOne(
        { _id: id },
        { $set: {usuario: usuario, password: password} }
    )

    .then(rawResponse => {
        res.send({message: "Update success", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Eliminar un usuario

deleteUser(id, res) {
    Usuarios.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "User deleted successfully"})
    })
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CRUD DE LA COLLECIÓN NIVELESCURSO

// Guardar un nivel del curso

setLevel(level, res) {
    Nivelescursos.create(level, (err, nLevel) => {
        if (err) throw err;
        res.send({status: 200, newLevel: nLevel});
    })
}

// Buscar todos lo niveles del curso

getLevels(res) {
    Nivelescursos.find({}, (err, levels) => {
        if (err) throw err;
        res.send({allLevels: levels});
    })
}

// Buscar un nivel del curso por ID

getLevelId(id, res) {
    Nivelescursos.find({_id: id}, (err, level) => {
        if (err) throw err;
        res.send(level);
    })
}

// Actualizar un nivel del curso

updateLevel(newD, res) {
    let {id, descripcion} = newD;

    Nivelescursos.updateOne(
        {_id: id},
        { $set: {descripcion: descripcion} }
    )

    .then(rawResponse => {
        res.send({message: "Level updated successfully", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Borrar un nivel del curso

deleteLevel(id, res) {
    Nivelescursos.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "Level deleted with success"});
    })
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CRUD DE LA COLECCIÓN COINS

// Guardar coins

setCoin(coin,res) {
    Coins.create(coin, (err, nCoin) => {
        if (err) throw err;
        res.send({status: 200, newCoin: coin});
    })
}

// Buscar todos los coins

getCoins(res) {
    Coins.find({}, (err,coins) => {
        if (err) throw err;
        res.send({allCoins: coins});
    })
}

// Buscar coins por ID

getCoinId(id, res) {
    Coins.find({_id: id}, (err, coin) => {
        if (err) throw err;
        res.send(coin);
    })
}

// Actualizar cantidad de coins

updateCoin(newCant, res) {
    let {id, cantidad} = newCant;

    Coins.updateOne(
        {_id: id},
        { $set: {cantidad: cantidad} }
    )

    .then(rawResponse => {
        res.send({message: "Cantidad updated successfully", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Borrar la cantidad de coins por ID

deleteCoin(id, res) {
    Coins.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "Cantidad deleted with success"});
    })
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CRUD DE LA COLECCIÓN TEMAS

// Guardar un tema

setTopic(topic,res) {
    Temas.create(topic, (err, nTopic) => {
        if (err) throw err;
        res.send({status: 200, newTopic: topic});
    })
}

// Buscar todos los temas

getTopics(res) {
    Temas.find({}, (err,topics) => {
        if (err) throw err;
        res.send({allTopics: topics});
    })
}

// Buscar un tema por ID

getTopicId(id, res) {
    Temas.find({_id: id}, (err, topic) => {
        if (err) throw err;
        res.send(topic);
    })
}

// Actualizar un tema

updateTopic(newDatas, res) {
    let {id, titulo, descripcion} = newDatas;

    Temas.updateOne(
        {_id: id},
        { $set: {titulo: titulo, descripcion: descripcion} }
    )

    .then(rawResponse => {
        res.send({message: "Topic updated successfully", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Borrar un tema por ID

deleteTopic(id, res) {
    Temas.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "Topic deleted with success"});
    })
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CRUD DE LA COLECCIÓN SUBTEMAS

// Guardar un subtema

setSubtopic(subtopic,res) {
    Subtemas.create(subtopic, (err, nSubtopic) => {
        if (err) throw err;
        res.send({status: 200, newSubtopic: nSubtopic});
    })
}

// Buscar todos los subtemas

getSubtopics(res) {
    Subtemas.find({}, (err,subtopics) => {
        if (err) throw err;
        res.send({allSubtopics: subtopics});
    })
}

// Buscar un subtema por ID

getSubtopicId(id, res) {
    Subtemas.find({_id: id}, (err, subtopic) => {
        if (err) throw err;
        res.send(subtopic);
    })
}

// Actualizar un subtema

updateSubtopic(newDatas, res) {
    let {id, titulo, descripcion} = newDatas;

    Subtemas.updateOne(
        {_id: id},
        { $set: {titulo: titulo, descripcion: descripcion} }
    )

    .then(rawResponse => {
        res.send({message: "Subtopic updated successfully", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Borrar un subtema por ID

deleteSubtopic(id, res) {
    Subtemas.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "Subtopic deleted with success"});
    })
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// CRUD DE LA COLECCIÓN ACTIVIDADES

// Guardar una actividad

setAct(subtopic,res) {
    Actividades.create(subtopic, (err, nAct) => {
        if (err) throw err;
        res.send({status: 200, newActivity: nAct});
    })
}

// Buscar todas las actividades

getActs(res) {
    Actividades.find({}, (err,acts) => {
        if (err) throw err;
        res.send({allActivities: acts});
    })
}

// Buscar una actividad por ID

getActId(id, res) {
    Actividades.find({_id: id}, (err, act) => {
        if (err) throw err;
        res.send(act);
    })
}

// Actualizar una actividad

updateAct(newDatas, res) {
    let {id, proposito, descripcion} = newDatas;

    Actividades.updateOne(
        {_id: id},
        { $set: {proposito: proposito, descripcion: descripcion} }
    )

    .then(rawResponse => {
        res.send({message: "Activity updated successfully", raw: rawResponse})
    })

    .catch(err => {
        if (err) throw err;
    });
}

// Borrar una actividad por ID

deleteAct(id, res) {
    Actividades.deleteOne({_id: id}, (err) => {
        if (err) throw err;
        res.send({message: "Activity deleted with success"});
    })
}

}

exports.database = new Database();