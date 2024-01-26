// Variables
const dotenv = require('dotenv');
const mysql = require('mysql');

// Configuration
dotenv.config();

// Connexion à la base de données
const connexion = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
});

connexion.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("DB " + connexion.state + ".");
});

// Fonction pour récupérer les guides avec leurs phases
async function getGuidesWithPhases() {
    const query =
        `SELECT * FROM GUIDES`;

    try {
        const guides = await new Promise((resolve, reject) => {
            connexion.query(query, async (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const guidesWithPhases = await Promise.all(results.map(async guide => {
                        const phases = await getPhasesByGuideId(guide.id);
                        return { ...guide, phases };
                    }));
                    resolve(guidesWithPhases);
                }
            });
        });
        return guides;
    } catch (error) {
        throw error;
    }
}

// Fonction pour récupérer les phases d'un guide par son ID
async function getPhasesByGuideId(guideId) {
    const query = `
        SELECT p.*, i.image_chemin 
        FROM PHASES p
        LEFT JOIN IMAGES i ON p.image_id = i.image_id
        WHERE p.guide_id = ?;
    `;

    try {
        const phases = await new Promise((resolve, reject) => {
            connexion.query(query, [guideId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        return phases;
    } catch (error) {
        throw error;
    }
}

module.exports = { getGuidesWithPhases, getPhasesByGuideId };
