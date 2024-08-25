import React from 'react';
import netflix from "../Images/Netflix.png";
import drum from "../Images/drum.png";
import simone from "../Images/simone.png";
import music from "../Images/music.png";

const Portfolio = () => {

  // Function to handle redirection
  const redirectToSite = (url) => {
    window.open(url, "_blank");  // Open the link in a new tab
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper">
          <div 
            className="portfolio-image-box" 
            onClick={() => redirectToSite("https://github.com/Rhitwik-Choudhury/Netflix-Clone")}
          >
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
          </div>

          <div 
            className="portfolio-image-box" 
            onClick={() => redirectToSite("https://rhitwik-choudhury.github.io/Drum-Kit/")}
          >
            <img className="portfolio-image" src={drum} alt="Drum Project..." />
          </div>

          <div 
            className="portfolio-image-box" 
            onClick={() => redirectToSite("https://rhitwik-choudhury.github.io/Simon-Game-Challenge/")}
          >
            <img className="portfolio-image" src={simone} alt="Simone Game Project..." />
          </div>

          <div 
            className="portfolio-image-box" 
            onClick={() => redirectToSite("https://rhitwik-choudhury.github.io/Music/")}
          >
            <img className="portfolio-image" src={music} alt="Music Site Project..." />
          </div>
        </div>              
      </div>
    </div>
  );
}

export default Portfolio;

