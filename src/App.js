// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React from "react";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience";
// import Contacts from "./components/contacts";

// function App() {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <>
//       {/* <Particles
//         className="tsparticles-canvas-el"
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           particles: {
//             number: {
//               value: 30,
//               density: {
//                 enable: true,
//                 value_area: 900
//               }
//             },
//             shape: {
//               type: "circle",
//               stroke: {
//                 width: 6,
//                 color: "#f9ab00"
//               }
//             },
//             move: {
//               enable: true,
//               speed: 2,
//               direction: "none",
//               random: false,
//               straight: false,
//               outMode: "bounce",
//               bounce: false,
//               attract: {
//                 enable: false,
//                 rotateX: 600,
//                 rotateY: 1200
//               }
//             }
//           }
//         }}
//       /> */}
//       <Navbar />
//       <Header />
//       <AboutMe/>
//       <Experience />
//       <Contacts />
//     </>
//   );
// }

// export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* <Particles
        className="tsparticles-canvas-el"
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          }
        }}
      /> */}
      <Navbar />
      <Header />
      <AboutMe/>
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
