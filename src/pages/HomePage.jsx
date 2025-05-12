import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = ({ courses }) => {
const navigate = useNavigate();
// Fonction pour naviguer vers la page des cours
const goToCourses = () => {
navigate('/courses');
};
return (
<main className="main-content">
<div className="hero">
<h2>Bienvenue à AI Academy</h2>
<p>Découvrez nos cours sur l'intelligence artificielle et commencez votre voyage dans le
monde de l'IA.</p>
<button className="btn" onClick={goToCourses}>Voir nos cours</button>
</div>
{/* Reste du composant inchangé */}
{/* ... */}
</main>
);
};
export default HomePage;