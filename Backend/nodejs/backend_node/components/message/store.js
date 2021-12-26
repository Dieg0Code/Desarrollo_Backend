const Model = require('./model')

const chalk = require('chalk');

const addMessage = (message) => {
   const newMessage = new Model(message);
    newMessage.save();
}

const getMessages = async (filterUser) => {
    return new Promise((resolve, reject) => {

        let filter = {};
        if (filterUser !== null) {
            filter = {
                user: filterUser
            }
        }
    
        Model.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(populated);
            });
    });
    
}

const updateMessage = async (id, message) => {
    const update = await Model.findOne({
        _id: id
    });

    update.message = message;
    const updated = await update.save();
    return updated;
}

const removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: removeMessage,
}