//Variables
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
const express = require('express');

//Mise en place
dotenv.config();

const app = express();
const fonction = require('./fonctions')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Requêtes
app.get('')