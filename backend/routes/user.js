// routes/user.js
const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const router = express.Router();

// Criar um novo usuário (Rota de Cadastro)
export const registerUser = app.post('/api/users', async (req, res) => {
  const { name, phone, email, password } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
      // Verificar se o usuário já existe
      const existingUser  = await User.findOne({ email });
      if (existingUser ) {
          return res.status(400).json({ message: 'Usuário já existe.' });
      }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar novo usuário
        const newUser  = new User({
            name,
            phone,
            email,
            password: hashedPassword,
        });

        await newUser .save();
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error); // Log do erro detalhado
      res.status(500).json({ message: 'Erro ao cadastrar usuário.', error: error.message }); // Envia a mensagem de erro
  }
});

module.exports = router;