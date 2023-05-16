






import React, { useEffect, useState } from "react";
import "../frontAssets/css/Advice.css";

const Advice = () => {
  const [advices, setAdvices] = useState([]);
  const [newAdvice, setNewAdvice] = useState(''); // Pour la création d'un nouveau conseil

  useEffect(() => {
    fetch('http://localhost:3300/api/routes/routeAdvice/advices')
      .then(response => response.json())
      .then(data => setAdvices(data.data))
      .catch(error => console.error('Il y avait une erreur pour récupérer les conseils', error));
  }, []);

  const createAdvice = () => {
    fetch('http://localhost:3300/api/routes/routeAdvice/advices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newAdvice }) // Ici, je suppose que votre conseil a une propriété "name"
    })
    .then(response => response.json())
    .then(data => setAdvices([...advices, data.data]))
    .catch(error => console.error('Il y avait une erreur pour créer le conseil', error));
  }

  const deleteAdvice = (id) => {
    fetch(`http://localhost:3300/api/routes/routeAdvice/advices/${id}`, {
      method: 'DELETE'
    })
    .then(_ => setAdvices(advices.filter(advice => advice.id !== id)))
    .catch(error => console.error('Il y avait une erreur pour supprimer le conseil', error));
  }

  return (
    <>
       <h1>Conseils personnalisés</h1>
        <div className="container">
          <div className="advice-box" style={{ backgroundColor: "#ffd6a5" }}>
            <h2>Conseil 1</h2>
            <p>Voici un conseil personnalisé pour vous aider à surmonter vos défis.</p>
          </div>
          <div className="advice-box" style={{ backgroundColor: "#caffbf" }}>
            <h2>Conseil 2</h2>
            <p>Essayez cette technique pour améliorer votre quotidien et vous sentir mieux.</p>
          </div>
          <div className="advice-box" style={{ backgroundColor: "#9bf6ff" }}>
            <h2>Conseil 3</h2>
            <p>Voici une astuce pour vous aider à atteindre vos objectifs plus rapidement.</p>
          </div>
          <div className="advice-box" style={{ backgroundColor: "#a0c4ff" }}>
            <h2>Conseil 4</h2>
            <p>Découvrez cette méthode pour améliorer votre bien-être et votre santé.</p>
          </div>
        </div>

        <div className="container">
          {advices.map((advice, index) => (
            <div className="advice-box" style={{ backgroundColor: "#ffd6a5" }} key={index}>
              <h2>Conseil {index + 1}</h2>
              <p>{advice.name}</p> {/* Ici, je suppose que votre conseil a une propriété "name". Ajustez ceci en fonction de la structure réelle de vos données */}
              <button onClick={() => deleteAdvice(advice.id)}>Supprimer ce conseil</button>
            </div>
          ))}
        <div>
          <input type="text" value={newAdvice} onChange={e => setNewAdvice(e.target.value)} />
          <button onClick={createAdvice}>Ajouter un nouveau conseil</button>
        </div>
      </div>
    </>
  );
};

export default Advice;


