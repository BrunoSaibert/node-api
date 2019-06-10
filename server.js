const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Inniciando o DB
// const MONGO_URL = 'mongodb://192.168.99.100:27017/nodeapi';
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);
requireDir('./src/models/');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);