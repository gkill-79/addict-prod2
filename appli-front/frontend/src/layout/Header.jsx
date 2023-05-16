

import React from "react";
import { Link } from "react-router-dom";

// import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/addictions">Liste des addictions</Link>
          </li>
          <li>
            <Link to="/create-addiction">Créer une addiction</Link>
          </li>
          <li>
            <Link to="/counter">Compteur</Link>
          </li>
          <li>
            <Link to="/advice">Conseils personnalisés</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





















