import './app.css';
import { About } from './components/about';
import { Activity } from './components/activity';
import Course from './components/course';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Navbar } from './components/header';
import { Home } from './components/home';
import { Register } from './components/register';
import { Fade } from 'react-awesome-reveal';
import { Patronize } from './components/patronize';
import Gallery from './components/gallery';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GalleryPage from './components/gallerylPage';
import GalerryId from './components/galleryId';
import Team from './components/Team';
import { Teams } from './page/Teams';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="galeria" element={<GalleryPage />} />
      <Route path="galeria/:id" element={<GalerryId />} />
      <Route path="equipe" element={<Teams />} />
    </Routes>
  );
}

function HomeScreen() {
  const [showGallery] = useState(true);

  return (
    <div className="body_complete">
      <Navbar showGallery={showGallery} />

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

      <Footer />
    </div>
  );
}

export default App;
