import React, { useState } from 'react';
import './carousel.css';
import i1 from './website.png';
import i2 from './textile.jpg';
import i3 from './lawnMower.png';
import portfolioPic from "./portfolioPic.png";
// import 'font-awesome/css/font-awesome.min.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
const slides = [
  {
    image: i1,
    description: 'This is slide 1',
    title:'Smart Recipe',
    subtitle:'Mern Project',
    link:'https://graceful-kleicha-2d0c35.netlify.app/',
    data:"Smart Recipe, a secure MERN project, elevates cooking with Spoonacular API for diverse recipes. MongoDB manages wishlists and user-uploaded recipes, offering a user-friendly platform for culinary enthusiasts."
  },
  {
    image: i2,
    description: 'This is slide 2',
    title:'Textile Management System',
    subtitle:'Java Project',
    link:'https://shorturl.at/ouDOR',
    data: 'Developed and implemented a fully automated Textile Management System encompassing stock management, delivery processes,  billing, calculating wages , streamlining operational efficiency and minimizing manual errors.'
  },
  {
    image: portfolioPic,
    description: 'This is slide 2',
    title:'Personal Portfolio',
    subtitle:'React Project',
    link:'',
    data: 'Explore my digital realm – a dynamic portfolio showcasing my journey as a software engineer. This space embodies my proficiency in Java and the MERN stack, offering a glimpse into diverse projects and accomplishments. '
  },
  {
    image: i3,
    description: 'This is slide 3',
    title:'Automatic Lawn Mower',
    subtitle:'Embedded Project',
    link:'',
    data:'Successfully integrated sensor systems for obstacle detection and navigation using Arduino resulting in a reliable and efficient autonomous lawn care solution.'
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      {/* <br></br> */}
      <div className="slider-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`slide ${currentSlide === index ? 'active' : ''}`}>
            <div className="slide-image">
              <img src={slide.image} alt="" />
            </div>
            <div className="slide-description">
            <div className='dpContent'>
            <h1>{slide.title}</h1>
        <h3>{slide.subtitle}</h3>
        <p>{slide.data}</p>
        <Button onClick={()=>{
              window.location.href = slide.link;
            }} >View Project</Button>
            </div>
              </div>
          </div>
        ))}
      </div>
      {(currentSlide>0)&&
      <div className="arrow left" onClick={() => moveToSlide(currentSlide - 1)}>
        <ArrowBackIosIcon sx={{marginLeft:'5px'}}/>
      </div>
}
      {(currentSlide<3)&&

      <div className="arrow right" onClick={() => moveToSlide(currentSlide + 1)}>
        <ArrowForwardIosIcon/>
      </div>
}
    </div>
  );
};

export default Slider;