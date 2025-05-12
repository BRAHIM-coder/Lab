import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CoursesPage.css';
const CoursesPage = ({ courses }) => {
const location = useLocation();
// Initialisez le filtre avec la valeur passée dans l'état de localisation, ou 'all'
const [filter, setFilter] = useState(location.state?.filter || 'all');
// Mettre à jour le titre de la page quand le filtre change
useEffect(() => {
document.title = filter === 'all'
? 'Tous les cours - AI Academy'
: `Cours ${filter} - AI Academy`;
// Nettoyer lors du démontage du composant
return () => {
document.title = 'AI Academy';
};
}, [filter]);
// Fonction pour filtrer les cours en fonction du niveau
const filteredCourses = filter === 'all'
? courses
: courses.filter(course => course.level.toLowerCase() === filter.toLowerCase());
// ... reste du composant inchangé
};
export default CoursesPage;