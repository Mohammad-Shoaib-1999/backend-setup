const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
  getUserByEmail,
} = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getUsers);

// Search users by name
router.get('/users/search', searchUsers);

// Get user by email
router.get('/users/email/:email', getUserByEmail);

// Get a user by ID
router.get('/users/:id', getUserById);

// Update a user by ID
router.put('/users/:id', updateUser);

// Delete a user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;
