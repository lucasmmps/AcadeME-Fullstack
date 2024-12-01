// routes/user.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Criar um novo usuário
router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser  = new User({ name, email, password });

  try {
    const savedUser  = await newUser .save();
    res.status(201).json(savedUser );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;