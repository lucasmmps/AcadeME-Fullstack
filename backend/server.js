const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Conexão com o MongoDB
const CONNECTION_URL = 'mongodb+srv://Academe:Academe@academe.j9opv.mongodb.net/?retryWrites=true&w=majority&appName=AcadeMe';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`)))
    .catch((error) => console.log(error.message));


// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para receber JSON no corpo da requisição

// Definição do modelo de Usuário
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: { type: String, unique: true },
    password: String,
});

// Criar um novo usuário (Rota de Cadastro)
app.post('/api/users', async (req, res) => {
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

const User = mongoose.model('User', userSchema);