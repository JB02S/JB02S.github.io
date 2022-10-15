import React, { useState } from 'react';
import About from './about';
import Index from './index';
import Contact from './contact';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <Index />
      </Carousel.Item>
      <Carousel.Item>
      <About />
      </Carousel.Item>
      <Carousel.Item>
      <Contact />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel