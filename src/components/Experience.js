import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>07/2022-09/2022</h3>
            <p>I built a Netflix-clone site, where I learned mainly how to play with HTML and CSS and the use of CSS flexbox to make things look attractive</p>
          </div>
        </div>
        {/*- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>07/2022-09/2022</h3>
            <p>CALCULATOR : built a simple calculator using javascript</p>
          </div>
        </div>
        {/*- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>07/2022-09/2022</h3>
            <p>MUSIC SITES : made a music site for listening to songs whenever one's mood is off. Learned the designing part here a lot</p>
          </div>
        </div>
        {/*- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>07/2022-09/2022</h3>
            <p>GAMES : Built interesting fun games to check your memory, made some ancient old games like the tic tac toe</p>
          </div>
        </div>
        {/*- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>07/2022-09/2022</h3>
            <p>My portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
