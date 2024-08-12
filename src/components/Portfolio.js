import React from 'react'
import netflix from "../Images/Netflix.png"
import drum from "../Images/drum.png"
import simone from "../Images/simone.png"
import music from "../Images/music.png"
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"

const Portfolio = () => {

  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..."/>
        <p>This project is been made similar to the Netflix site with a sign in page. It's a user-friendly site with a smooth experience for users.</p>
        <b>Netflix-clone:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Rhitwik-Choudhury/Netflix-Clone")}>https://github.com/Rhitwik-Choudhury/Netflix-Clone</a>
      </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigNetflix = {

  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={drum} alt="Drum Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={simone} alt="Simone game Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={music} alt="Music Site Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>              
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
    </div>
  )
}

export default Portfolio
