




// src/routes/routeAdvices/deleteAdvice.js

const { Advice } = require('../../db/sequelize');
  
module.exports = (app) => {
  app.delete('/api/routes/advices/:id', (req, res) => {
    Advice.findByPk(req.params.id).then(advice => {
      const adviceDeleted = advice;
      return Advice.destroy({
        where: { id: advice.id }
      })
      .then(_ => {
        const message = `L'avis avec l'identifiant n°${adviceDeleted.id} a bien été supprimé.`;
        res.json({message, data: adviceDeleted });
      })
      .catch(error => {
        const message = `La liste des avis n'a pas pu être supprimée. Réessaie dans un instant.`;
        res.status(500).json({ message, data: error });
      });
    }); 
  }); 
};




















