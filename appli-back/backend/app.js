




// app.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('./src/db/sequelize');

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Sequelize.initDb();

// Routes de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de l\'application de lutte contre les addictions !');
});

require('./src/routes/routePatients/findAllPatient')(app);
require('./src/routes/routePatients/findPatientByPk')(app);
// require('./src/routes/routePatients/createPatient')(app);
require('./src/routes/routePatients/updatePatient')(app);
require('./src/routes/routePatients/deletePatient')(app);

require('./src/routes/routeCompteur/createCompteur')(app);
require('./src/routes/routeCompteur/updateCompteur')(app);
require('./src/routes/routeCompteur/deleteCompteur')(app);
// require('./src/routes/routeCompteur/findCompteurByPk')(app);

// Routes pour Advices
require('./src/routes/routeAdvices/createAdvice')(app);
require('./src/routes/routeAdvices/updateAdvice')(app);
require('./src/routes/routeAdvices/deleteAdvice')(app);
require('./src/routes/routeAdvices/findAdviceByPk')(app);
// require('./src/routes/routeAdvices/findAllAdvice')(app);

// Routes pour Addictions
require('./src/routes/routeAddictions/createAddiction')(app);
require('./src/routes/routeAddictions/updateAddiction')(app);
require('./src/routes/routeAddictions/deleteAddiction')(app);
require('./src/routes/routeAddictions/findAddictionByPk')(app);
// require('./src/routes/routeAddictions/findAllAddiction')(app);

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});

require('module').Module._cache = {};























