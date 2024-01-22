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

app.listen(3000, () =>{
    console.log("App is running...");
});

// Requête GET pour récupérer les guides
app.get('/getGuides', async(req, res) =>{
    try{
        const guides = await fonction.getGuides();
        res.json(guides);
    } catch(error){
        console.error(error);
        res.status(500).send(`Erreur lors de la récupération du contenu du guide: ${error}`);
    }
});