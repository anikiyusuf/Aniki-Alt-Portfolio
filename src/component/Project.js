import React from 'react'
// import { Link }  from "react-router-dom"
import active from "../svg/active-states.jpg"

import desktop from "../svg/desktop-preview.jpg"


import manage  from "../svg/desktop-preview-land.jpg"
import "../sass/Projects.scss"

export default function Project() {

  
  return (
   <>
    <section className="projects" id="project">
        <h1>Projects</h1>
         <div className="projects-section">
         <div className="project-one">
            <img src={active} alt="" />
            <h4>Launch countdown </h4>
           <div className="one-link">
           <form action="https://github.com/anikiyusuf/launch-countdown-timer-main"  method="get" target="_blank">
              <button  type="submit"  className="btn--github">Github</button>
        </form>
        <form action="https://anikiyusuf.github.io/launch-countdown-timer-main/"  method="get" target="_blank">
              <button   type="submit" class="btn--live">Server</button>
        </form>
           
         </div>
      </div>

      

      <div className="project-two">
             <img src="Best-Ever-Meatloaf.jpg" alt="" />
              <h4>Recipe App</h4>
             <div className="two-link">
             <form action="https://github.com/anikiyusuf/client"  method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
        <form action="https://me-recipe-app.netlify.app"  method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
            </div>
      </div>

      <div className="project-three">
        <img src={manage} alt="" />
           <h4>Manage Land page</h4>
        <div className="three-link">
        <form action="https://github.com/anikiyusuf/manage-landing-page" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
          
        <form action="https://anikiyusuf.github.io/manage-landing-page" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
      </div>

      <div className="project-four">
        <img src={desktop} alt="" />
           <h4>Theme Calculator</h4>
        <div className="four-link">
        <form action="https://github.com/anikiyusuf/calculator-app-main-master" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
        <form action="https://anikiyusuf.github.io/calculator-app-main-master/" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
      </div>

      <div className="project-five">
        <img src="SeaContainer.png" alt="" />
            <h4>Transport & Logistics</h4>
        <div className="five-link">
        <form action="https://github.com/anikiyusuf/nupat-app" method="get" target="_blank">
          <button  type="submit" className="btn--github">Github</button>
        </form>
        <form action="https://transport-logistics-nupat.netlify.app" method="get" target="_blank">
            <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
      </div>
        <div className="project-six">
           <img src="paper.jpg" alt="" />
              <h4> Restaurant Chat Bot </h4>
           <div className="six-link">
           <form action="https://github.com/anikiyusuf/Restaurant-Chatbot" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
        <form action="https://nikki-restaurant-chatbot.onrender.com" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
         </div>
         </div>
     

       <div className="project-seven">
            <img src="IMG_1426.jpg" alt="" />
            <h4>Tofagraphy</h4>
       <div className="seven-link">
           <form href="https://github.com/BreinsteinMedia/tofagraphy/tree/master" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
        <form href="https://tofagraphy.com/" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
       
      </div>

      <div className="project-eight">
            <img src="qr-code.png" alt="" />
            <h4>  Shortly</h4>
       <div className="eight-link">
           <form href="https://github.com/anikiyusuf/shortly" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
         <form href="https://shortly-ly.onrender.com" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
     </div>

     <div className="project-nine">
            <img src="home4.jpg" alt="" />
            <h4>Movie App</h4>
       <div className="nine-link">
           <form href="https://github.com/anikiyusuf/movie-projec" method="get" target="_blank">
              <button  type="submit" className="btn--github">Github</button>
        </form>
        <form href="https://movie-projecct.netlify.app/" method="get" target="_blank">
              <button  type="submit" class="btn--live">Server</button>
        </form>
        </div>
     </div> 
   </div>
     </section>
     </>
  )
}
