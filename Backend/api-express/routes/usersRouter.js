const express = require('express');
const UserService = require('./../services/userService');

const router = express.Router();
const service = new UserService();


router.get('/', async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
})


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findUser(id);
  res.json(user);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.createUser(body);
  res.status(201).json(newUser);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedUser = await service.updateUser(id, body);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await service.deleteUser(id);
    res.json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

});

module.exports = router;
