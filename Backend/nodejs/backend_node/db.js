const db = require('mongoose');
db.Promise = global.Promise;

const connect = async (url) => {
    await db.connect(url, {
        useNewUrlParser: true,
    })
        .then( () => console.log(('[DB] : Connected to DataBase')))
        .catch( err => console.log(err)); 
}

module.exports = connect;
