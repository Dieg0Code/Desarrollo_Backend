const store = require('./store');

const addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    
    const user = {
        name,
    };

    console.log('[userController] : Usuario añadido');
    return store.add(user);

}

const getUsers = () => new Promise((resolve, reject) => {
    console.log('[userController] : Obteniendo usuarios');
    resolve(store.get());
});

module.exports = {
    addUser,
    getUsers,
}