//Variables
const dotenv = require('dotenv');
const mysql = require('mysql');

//Mise en place
dotenv.config();

//Connexion à la base de données
const connexion = mysql.createConnection({ 
    host: process.env.host, 
    user: process.env.user, 
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
});

connexion.connect((err) =>{
    if(err){
        console.log(err.message);
    }
    console.log("DB " + connexion.state + ".");
});

// Fonction pour récupérer les guides
async function getGuides(){
    const query = 
    `SELECT * FROM guides`;

    try{
        const guide = await new Promise((resolve, reject) =>{
            connexion.query(query, (error, results) =>{
                if(error){
                    reject(error);
                } else{
                    resolve(results);
                }
            });
        });
        return guide;
    } catch(error){
        throw error;
    }
}

module.exports= {getGuides};