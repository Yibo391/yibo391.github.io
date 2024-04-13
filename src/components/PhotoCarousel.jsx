import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
const PhotoCarousel = () => {
  const photos = [
    { id: 1, src: '/1.jpg', alt: 'Description of Photo 1' },
    { id: 2, src: '/2.jpg', alt: 'Description of Photo 2' },
    { id: 3, src: '/3.jpg', alt: 'Description of Photo 3' },
    // Add more photos as needed
  ];

  return (
    <Carousel id="photoCarousel">
      {photos.map((photo) => (
        <Carousel.Item key={photo.id}>
          <img
            className="d-block w-100"
            src={photo.src}
            alt={photo.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;