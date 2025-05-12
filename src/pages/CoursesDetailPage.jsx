import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './CoursesDetailPage.css';
const CourseDetailPage = ({ courses }) => {
const { id } = useParams();
const navigate = useNavigate();
const location = useLocation();
// Récupérer le filtre actif s'il existe dans l'état de localisation
const activeFilter = location.state?.filter || 'all';
// Trouver le cours correspondant à l'ID
const course = courses.find(c => c.id === parseInt(id));
// Si le cours n'existe pas, rediriger vers la page des cours
if (!course) {
return (
<div className="course-not-found">
<h2>Cours non trouvé</h2>
<p>Désolé, le cours que vous recherchez n'existe pas.</p>
<Link to="/courses" className="btn">Voir tous les cours</Link>
</div>
);
}
// Fonction pour retourner à la liste des cours avec le filtre actif
const goBack = () => {
navigate('/courses', { state: { filter: activeFilter } });
};
// ... reste du composant inchangé
};
export default CourseDetailPage;