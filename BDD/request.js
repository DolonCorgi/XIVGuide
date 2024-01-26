// Variables
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const fonction = require('./fonctions');

// Configuration
dotenv.config();

// Mise en place
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log("App is running...");
});

// Route pour récupérer les guides avec les phases
app.get('/getGuidesWithPhases', async (req, res) => {
    try {
        const guidesWithPhases = await fonction.getGuidesWithPhases();
        res.json(guidesWithPhases);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Erreur lors de la récupération des guides avec les phases: ${error}`);
    }
});