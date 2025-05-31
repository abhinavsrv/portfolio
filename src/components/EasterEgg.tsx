import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import easterEggImage1 from '../assets/easter_egg/011bc835bf67f3cb366be90194d6f619.jpg';
import easterEggImage2 from '../assets/easter_egg/3f3cf551c2e2a608d127b3d01ba39842.jpg';
import easterEggImage3 from '../assets/easter_egg/a54fbb20bc4b162997be54ec8bd918eb.jpg';
import easterEggImage4 from '../assets/easter_egg/11c8b3cfaba088776d75a6007097dec2.jpg';
import easterEggImage5 from '../assets/easter_egg/e35497cb43f6d01d9725207e03d79cb8.jpg';
import easterEggImage6 from '../assets/easter_egg/0a764481aeaa9dd967307d7fc110668e.jpg';
import easterEggImage7 from '../assets/easter_egg/1fdf4463189431c95a43956a50d8033b.jpg';
import easterEggImage8 from '../assets/easter_egg/-fo1k0s.jpg';
import easterEggImage9 from '../assets/easter_egg/5ac19a87212aff452652d8d1ddb22aaa.jpg';
import easterEggImage10 from '../assets/easter_egg/c809c61b5dda1f792bd1065e8f8c55e9.jpg';
import easterEggImage11 from '../assets/easter_egg/aae7710e8fe98772e0a5febc28d79208.jpg';
import easterEggImage12 from '../assets/easter_egg/1be3f7bca162f8fea548559890e843c4.jpg';
import easterEggImage13 from '../assets/easter_egg/03f11c998b9e1f6077e9cee939e042da.jpg';
import easterEggImage14 from '../assets/easter_egg/c43286a97ed61a7a5feffe5f5e351eef.jpg';
import easterEggImage15 from '../assets/easter_egg/4304c797b79523562b56ef1648b9e7f6.jpg';
import easterEggImage16 from '../assets/easter_egg/-2wru8o.jpg';
import easterEggImage17 from '../assets/easter_egg/1ae4b232ef14bec3f98fe106b2cce3f1.jpg';

const EasterEgg: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    easterEggImage1, easterEggImage2, easterEggImage3, easterEggImage4,
    easterEggImage5, easterEggImage6, easterEggImage7, easterEggImage8,
    easterEggImage9, easterEggImage10, easterEggImage11, easterEggImage12,
    easterEggImage13, easterEggImage14, easterEggImage15, easterEggImage16,
    easterEggImage17
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Add animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, index * 100);
    });

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="easter-egg-page">
      <div className="easter-egg-header">
        <h1>Secret Gallery</h1>
        <p>You found the hidden collection! Enjoy these special moments.</p>
      </div>
      
      <div className="easter-egg-gallery">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            onClick={() => openLightbox(image)}
          >
            <img src={image} alt={`Easter egg ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <div className="back-link">
        <Link to="/" className="project-link-button">Back to Home</Link>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeLightbox}>×</button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
