const store = require('./store');

const addChat = (users) => {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };

    console.log('[chatController] : Chat añadido');
    return store.add(chat);
}

const getChats = (userId) => {
    console.log('[chatController] : Obteniendo chats');
    return store.get(userId);
}

module.exports = {
    addChat,
    getChats,
}