





// src/routes/routeAdvices/findAllAdvices.js

const { Advice } = require('../../db/sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
  app.get('/api/routes/advices', (req, res) => {
    Advice.findAll()
      .then((advices) => {
        const message = 'La liste des avis a bien été trouvée.';
        res.json({ message, data: advices });
      })
      .catch((error) => {
        const message = `Les avis n'ont pas pu être trouvés. Réessaie dans un instant.`;
        res.status(500).json({ message, data: error });
      });
  });
};

























