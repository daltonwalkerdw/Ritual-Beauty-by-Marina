import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const importImages = async () => {
      const imageModules = import.meta.glob('/src/assets/Marina_photos/*.jpg', { eager: true }) as Record<string, { default: string }>;
      const imagePaths: string[] = Object.values(imageModules).map((module) => module.default);
      setImages(imagePaths);
    };

    importImages();
  }, []);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: (current: number) => setCurrentSlide(current + 1), 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom id='gallery' className='section-title'>
        Gallery
      </Typography>
      <div className="gallery-counter">
        {currentSlide} / {images.length}
      </div>
      <Slider {...settings} className='gallery-slider'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Gallery;
