import React from 'react';
import logo from '../logo.png';
import {Link} from "react-scroll";
//react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about me" offset={-110} className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact me" offset={-110} className="nav-link" href="#">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React from "react";
// import logo from "../logo.png";
// import { Link } from "react-scroll";
// // REACT FONTAWESOME IMPORTS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
//       <div className="container">

//         <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <Link smooth={true} to="" smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
//             </li>
//             <li className="nav-item">
//               <Link smooth={true} to="" smooth={true} to="about" offset={-110} offset={-110} className="nav-link" >about me</Link>
//             </li>
//             <li className="nav-item">
//               <Link smooth={true} to="" smooth={true} to="services" offset={-110} offset={-110} className="nav-link" href="#">services</Link>
//             </li>
//             <li className="nav-item">
//               <Link smooth={true} to="" smooth={true} to="experience" offset={-110} offset={-110} className="nav-link" >experience</Link>
//             </li>
//             <li className="nav-item">
//               <Link smooth={true} to="" smooth={true} to="portfolio" offset={-110} offset={-110} className="nav-link" >portfolio</Link>
//             </li>

//             <li className="nav-item">
//               <Link smooth={true} to="" smooth={true} to="contacts" offset={-110} offset={-110} className="nav-link" >contacts</Link>
//             </li>

//           </ul>

//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar
