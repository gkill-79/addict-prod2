// src/Signup.js
import React, { useState } from 'react';
import '../frontAssets/css/Signup.css';

// Composant d'inscription (formulaire) avec hooks et fonction fléchée (useState)
const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });

  // fonction de soumission du formulaire d'inscription
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrement des informations d'identification dans votre API
    console.log(credentials);
  };

  // fonction de gestion des changements dans le formulaire d'inscription
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // affichage du formulaire d'inscription
  return (
    <div className="signup-container">
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Identifiant :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Signup;














