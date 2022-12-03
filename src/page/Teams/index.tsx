import React, { useState } from 'react';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/header';
import Team from '../../components/Team';

import './style.css';

export const Teams = () => {
  const [showGallery] = useState(false);
  return (
    <div className="container-team">
      <Navbar showGallery={showGallery} showGalleryEllipse={false} />
      <div className="content-team">
        <Team />
      </div>

      <div className="content-footer">
        <Footer />
      </div>
    </div>
  );
};
