import React from 'react'
// import { Link }  from "react-router-dom"
import active from "../svg/active-states.jpg"
import desktopdesign from "../svg/desktop-design-completed.jpg"
import desktoppreview from "../svg/desktop-preview-two.jpg"
import desktop from "../svg/desktop-preview.jpg"
import desktopdesignadvice from "../svg/desktop-design-advice.jpg"
import tittac from "../svg/tic-tac.jpg"
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
             <img src={desktopdesign} alt="" />
              <h4>Tip Calculator</h4>
             <div className="two-link">
              <p><a href="https://github.com/anikiyusuf/tip-calculator-app-main" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p><a href="https://anikiyusuf.github.io/tip-calculator-app-main/" target="_blank" rel="noopener noreferrer">Live</a></p>
            </div>
      </div>

      <div className="project-three">
        <img src={desktoppreview} alt="" />
           <h4>Chat Illustrator</h4>
        <div className="three-link">
           <p><a href="https://github.com/anikiyusuf/chat-app-css-illustration-master"  target="_blank" rel="noopener noreferrer">Github</a></p>
           <p><a href="https://anikiyusuf.github.io/chat-app-css-illustration-master/" target="_blank" rel="noopener noreferrer">Live</a></p>
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
        <img src={desktopdesignadvice} alt="" />
            <h4>Advice App</h4>
        <div className="five-link">
           <p><a href="https://github.com/anikiyusuf/advice-generator-app-main-Day-17-18" target="_blank" rel="noopener noreferrer">Github</a></p>
           <p><a href="https://anikiyusuf.github.io/advice-generator-app-main-Day-17-18/" target="_blank" rel="noopener noreferrer">Live</a></p>
        </div>
      </div>
        <div className="project-six">
           <img src={tittac} alt="" />
              <h4>Tit-Tac Game </h4>
           <div className="six-link">
              <p><a href="https://github.com/anikiyusuf/my-tictac" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p><a href="https://tictachgame.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a></p>
           </div>
         </div>
     </div>
     </section>
  )
}
