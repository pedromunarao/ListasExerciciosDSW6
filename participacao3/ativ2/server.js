// server.js
const express = require('express');
const { User, printName, printAge } = require('./user');

const app = express();
const PORT = 8080;

const user = new User("Amazing", 100);

app.get('/user_data', (req, res) => {
    const userData = `User's name is ${user.name} and User's age is ${user.age}`;
    res.send(userData);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
