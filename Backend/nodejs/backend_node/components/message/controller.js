const store = require('./store')
const { socket } = require('../../socket');

const config = require('../../config');

const chalk = require('chalk');

const addMessage = (chat, user, message, file) => new Promise((resolve, reject) => {

    if (!chat || !user || !message) {
        console.log(chalk.red('[messageController] : No hay usuario o mensaje'));
        return reject('Datos incorrectos');
    }

    let fileUrl = '';
    if (file) {
        fileUrl = `${config.host}:${config.port}${config.publicRoute}/${config.filesRoute}/` + file.filename;
    }

    const fullMessage = {
        chat: chat,
        user : user,
        message : message,
        date: new Date(),
        file: fileUrl,
    };

    store.add(fullMessage);
    console.log(`${chalk.green('[messageController] : Mensaje añadido')}`);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage)
});

const getMessages = (filterUser) => new Promise((resolve, reject) => {
    console.log(chalk.green('[messageController] : Obteniendo mensajes'));
    resolve(store.list(filterUser));
});

const updateMessage = (id, message) => new Promise( async (resolve, reject) => {
    if (!id || !message) {
        reject('Invalid data')
        return false;
    }
    
    const result = await store.update(id, message);
    
    console.log(chalk.green('[messageController] : Actualizando mensaje'));
    resolve(result);
})

const removeMessage = (id) => new Promise( async (resolve, reject) => {
    if (!id) {
        reject('Invalid data')
        return false;
    }
    store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
    console.log(chalk.green('[messageController] : Eliminando mensaje'));

});

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    removeMessage
};