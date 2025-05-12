import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CoursesDetailPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/MemberArea/Dashboard';
import './pages/MemberArea/MemberArea.css';
import MemberLayout from './pages/MemberArea/MemberLayout';
import MyCourses from './pages/MemberArea/MyCourses';
import Profile from './pages/MemberArea/Profile';
import Settings from './pages/MemberArea/Settings';
import NotFoundPage from './pages/NotFoundPage';

// CSS
import './components/Header.css';
import './pages/AboutPage.css';
import './pages/ContactPage.css';
import './pages/CourseList.css';
import './pages/CoursesPage.css';
import './pages/NotFoundPage.css';

function App() {
  const coursesData = [
    {
      id: 1,
      title: "Introduction à l'IA",
      description: "Découvrez les fondamentaux de l'intelligence artificielle.",
      price: 199,
      level: "Débutant"
    },
    {
      id: 2,
      title: "Machine Learning Fondamental",
      description: "Apprenez les principes du machine learning et les algorithmes de base.",
      price: 299,
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Deep Learning Avancé",
      description: "Maîtrisez les réseaux de neurones profonds et leurs applications.",
      price: 399,
      level: "Avancé"
    },
    {
      id: 4,
      title: "IA et Éthique",
      description: "Explorez les implications éthiques et sociétales de l'intelligence artificielle.",
      price: 249,
      level: "Tous niveaux"
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage courses={coursesData} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage courses={coursesData} />} />
          <Route path="/courses/:id" element={<CourseDetailPage courses={coursesData} />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Routes imbriquées pour l'espace membre */}
          <Route path="/member" element={<MemberLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} AI Academy. Tous droits réservés.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
