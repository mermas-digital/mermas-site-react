import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import GalleryGrid from '../../components/galleryGrid';
import { Navbar } from '../../components/header';

export default function GalleryPage() {
  const [showGallery, setShowGallery] = React.useState(false);

  const refMount = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGallery(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (refMount.current) {
      observer.observe(refMount.current);
    }

    return () => {
      observer.unobserve(refMount.current as any);
      setShowGallery(false);
    };
  }, []);

  return (
    <div ref={refMount}>
      <Navbar showGallery={showGallery} />
      <GalleryGrid />
      <Outlet />
      <Footer />
    </div>
  );
}
