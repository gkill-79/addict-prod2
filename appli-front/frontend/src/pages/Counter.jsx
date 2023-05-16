



// src/pages/Counter.js
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3300/api/routes/compteur/1");
      const data = await response.json();
      if (data) {
        setCount(data.count);
        setPrice(data.price);
      }
    }
    fetchData();
  }, []);

  const handleValidation = () => {
    if (!submitted) {
      setCount(count + 1);
      setSubmitted(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3300/api/routes/compteur/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count, price }),
    });

    if (response.ok) {
      alert("Données enregistrées avec succès !");
      setSubmitted(false);
    } else {
      alert("Erreur lors de l'enregistrement des données.");
    }
  };

  return (
    <div className="container">
      <div className="counter">
        <h2>Compteur : {count}</h2>
        <button onClick={handleValidation}>Valider la journée</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Prix moyen journalier des produits :</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Enregistrer le prix</button>
      </form>
    </div>
  );
};

export default Counter;




















