import React, { Children, useEffect } from 'react';
import anime from 'animejs';
import './wallpaper.css';

function Wallpaper({children}) {
  useEffect(() => {
    function randomValues() {
      anime({
        targets: '.square, .circle, .triangle',
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-300, 300),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.2, 2),
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: randomValues, // Recursive animation
      });
    }
    randomValues(); // Start the animation once the component mounts
  }, []); // Empty dependency array to ensure this runs only once

  return (
    <div className="App">
        {children}
      {/* Shapes to animate */}
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
    </div>
  );
}

export default Wallpaper;
