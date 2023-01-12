import React from 'react'
import '../sass/About.scss'
import Yusuf from '../svg/IMG_7029.JPG' 


export default function About() {
  return (
          <section className="about-section" id="about">
                <h2>About Me</h2>
                <div className="sections">
                  <div class="section-text">
                  <h3 className="para-one">Hallo , I'm Yusuf Aniki a Frontend Developer.</h3>
                  <p className="para-two">Highly accomplish and user-focused Frontend Developer adapt in collaborating with UX and design teams to plan the technical writing and execution of functional specifications for websites and application. Experienced in building multi-platform websites using Responsive Web Design. </p>
                  <p className="para-three">I'm also an aspiring backend developer and a student at  Alt_School Africa  school of software engineering  with experience  and extensive education in backend development. Fluent in English with excellent communication and interpersonal skills. A fast learner with strong time management and multi-tasking skills.</p>
                 </div>
                 <div className="image">
                  <img src={Yusuf}  alt="anikiyusuf"/>
                </div>
                </div>
       </section> 

  )
}
