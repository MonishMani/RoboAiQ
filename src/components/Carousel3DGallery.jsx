import React, { useState, useEffect, useRef } from 'react';
import './Carousel3DGallery.css';

/**
 * Carousel3DGallery Component
 * A stunning 3D hollow circular carousel gallery with tunnel depth effect
 * Displays images in a rotating 3D carousel with deep perspective
 */
export default function Carousel3DGallery({ images = [] }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Default gallery images if none provided
  const galleryImages = images.length > 0 ? images : [
    '/assets/gallery/image1.jpg',
    '/assets/gallery/image2.jpg',
    '/assets/gallery/image3.jpg',
    '/assets/gallery/image4.jpg',
  ];

  const itemCount = galleryImages.length;
  const anglePerItem = 360 / itemCount;

  // Mouse drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev + deltaX * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX]);

  // Touch handling for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotation(prev => prev + deltaX * 0.5);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="carousel-3d-container"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Tunnel depth layers */}
      <div className="carousel-3d-tunnel">
        <div className="tunnel-ring tunnel-ring-1"></div>
        <div className="tunnel-ring tunnel-ring-2"></div>
        <div className="tunnel-ring tunnel-ring-3"></div>
        <div className="tunnel-ring tunnel-ring-4"></div>
      </div>

      {/* Main carousel content */}
      <div className="carousel-3d-content">
        <div
          className="carousel-3d-canvas"
          style={{
            transform: `perspective(1500px) rotateY(${rotation}deg)`,
          }}
        >
          {galleryImages.map((image, index) => {
            const angle = (index * anglePerItem);
            const radius = 350; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const z = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="carousel-3d-item"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <img src={image} alt={`Gallery item ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
