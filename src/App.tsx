import './app.css';
import { Navbar } from './components/header';

import { Home } from './components/home';
import { Register } from './components/register';
import { Fade } from 'react-awesome-reveal';
import { Patronize } from './components/patronize';
import Gallery from './components/gallery';
import { useEffect, useState } from 'react';
import GalleryGrid from './components/galleryGrid';
import { Routes, Route } from 'react-router-dom';
import GalleryPage from './page/gallerylPage';
import GalerryId from './page/gallerylPage/galleryId';
import Team from './components/Team';
import TeamPage from './page/teamPage';
import ActivitiesPage from './page/activities';

import Home from './pages/home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="galeria" element={<GalleryPage />} />
      <Route path="atividades" element={<ActivitiesPage />} />
      <Route path="time" element={<TeamPage />} />
      <Route path="galeria/:id" element={<GalerryId />} />
    </Routes>
  );
}

function HomeScreen() {
  const [showGallery] = useState(true);

  return (
    <div className="body_complete">

      <Navbar showGallery={showGallery} showGalleryEllipse={true} />

      <>
        <div className="container-home">
          <Home />
        </div>
        <Fade triggerOnce direction="up" delay={100}>
          <About />
        </Fade>

        <Fade triggerOnce direction="up" delay={100}>
          <Course />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Activity />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Register />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Form />
        </Fade>
        <Fade>
          <Gallery />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Patronize />
        </Fade>
      </>
      <div className="containerFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
