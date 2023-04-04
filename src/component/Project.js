import React from 'react'
// import { Link }  from "react-router-dom"
import active from "../svg/active-states.jpg"

import desktop from "../svg/desktop-preview.jpg"


import manage  from "../svg/desktop-preview-land.jpg"
import "../sass/Projects.scss"

export default function Project() {

  
  return (
    <section className="projects" id="project">
        <h1>Projects</h1>
         <div className="projects-section">

         <div className="project-one">
            <img src={active} alt="" />
            <h4>Launch countdown </h4>
           <div className="one-link">
             <p><a href="https://github.com/anikiyusuf/launch-countdown-timer-main" target="_blank" rel="noopener noreferrer">Github </a></p>
             <p><a href="https://anikiyusuf.github.io/launch-countdown-timer-main/" target="_blank" rel="noopener noreferrer">Live</a></p>
         </div>
      </div>

      

      <div className="project-two">
             <img src="Best-Ever-Meatloaf.jpg" alt="" />
              <h4>Recipe App</h4>
             <div className="two-link">
              <p><a href="https://https://github.com/anikiyusuf/client" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p><a href="https://https://me-recipe-app.netlify.app" target="_blank" rel="noopener noreferrer">Live</a></p>
            </div>
      </div>

      <div className="project-three">
        <img src={manage} alt="" />
           <h4>Manage Land page</h4>
        <div className="three-link">
           <p><a href="https://github.com/anikiyusuf/manage-landing-page"  target="_blank" rel="noopener noreferrer">Github</a></p>
           <p><a href="https://anikiyusuf.github.io/manage-landing-page" target="_blank" rel="noopener noreferrer">Live</a></p>
        </div>
      </div>

      <div className="project-four">
        <img src={desktop} alt="" />
           <h4>Theme Calculator</h4>
        <div className="four-link">
          <p> <a href="https://github.com/anikiyusuf/calculator-app-main-master" target="_blank" rel="noopener noreferrer">Github</a></p>
           <p><a href="https://anikiyusuf.github.io/calculator-app-main-master/" target="_blank" rel="noopener noreferrer">Live</a></p>
        </div>
      </div>

      <div className="project-five">
        <img src="SeaContainer.png" alt="" />
            <h4>Transport & Logistics</h4>
        <div className="five-link">
           <p><a href="https://https://github.com/anikiyusuf/nupat-app" target="_blank" rel="noopener noreferrer">Github</a></p>
           <p><a href="https://https://transport-logistics-nupat.netlify.app" target="_blank" rel="noopener noreferrer">Live</a></p>
        </div>
      </div>
        <div className="project-six">
           <img src="chatbot.png" alt="" />
              <h4>Chat Bot </h4>
           <div className="six-link">
              <p><a href="https://https://github.com/anikiyusuf/Restaurant-Chatbot" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p><a href="https://https://nikki-restaurant-chatbot.onrender.com" target="_blank" rel="noopener noreferrer">Live</a></p>
           </div>
         </div>
     </div>
     </section>
  )
}
