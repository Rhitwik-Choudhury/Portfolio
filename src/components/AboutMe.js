import React from "react"
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about me" className="container py-5"> 
       <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author"/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading"> about me</h1>
                <p>
                    Hello! I am Rhitwik Choudhury. I have been developing websites for over a year now. I'm a Full-Stack Web Developer, with more efficiency in the Frontend Development. Technologies I use is MERN(ReactJS and NodeJS).

                    I create responsive websites that are displayed on all desktops and smartphones.

                    Of course, before I begin developing any webapp, Landing Page or Buisness Website, I need to have a ready-made project layout(sketch).

                    I am ready and excited to work with you if you want to. Just contact me as mentioned below.
                </p>
            </div>
       </div>
    </div>
  )
}

export default AboutMe
