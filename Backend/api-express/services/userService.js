const faker = require('faker');

class UserService {

  constructor() {
    this.users = [];
    this.generateUsers();
  }

  generateUsers() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
      });
    }
  }

  async createUser(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.users.push(newUser);
    return newUser;
  }


  async getUsers() {
    return this.users;
  }

  async findUser(id) {
    return this.users.find(user => user.id === id);
  }

  async updateUser(id, changes) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UserService;
