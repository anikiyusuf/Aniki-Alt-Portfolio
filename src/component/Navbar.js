import React from 'react'
import '../sass/Navbar.scss'
// import {Link}  from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


function Navbar(){
    const [navbarOpen, setNavbarOpen] = React.useState('false');

    function open(){
      setNavbarOpen(!navbarOpen);
    }

   function closeMenu(){
     setNavbarOpen(false)
  }

  return(
    <div>
      <header>
        <nav className='navbar-content'>
          <div className='navbar-logo'>
             <h4> Yusuf Aniki🤲👨‍💻 </h4> 
          </div>
          <div className="navbar-menu">
            <ul>
              <li> <Link to="#about"  style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>About</Link></li>
              <li><Link to="#project" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Projects</Link></li>
              <li><Link to="#skill" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Skills</Link></li>
              <li><Link to="#contact" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Contact</Link></li>
            </ul>
     
          </div>
      {/* Menu Bar for mobile  */}
       <div className="menu-icon">
                 <div onClick={open}>{navbarOpen? (<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="hsl(272, 96%, 10%)" fill-rule="evenodd"/></svg>):(<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="hsl(277, 100%, 62%)" fill-rule="evenodd" opacity=".201"/></svg>)}</div> 
                  <div     className="closeBtn" onClick={closeMenu}>{navbarOpen? " " :
                   ( <ul  className="navbarOpen-list">
                   <li> <Link to="#about" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>About</Link></li>
                   <li><Link to="#project" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Projects</Link></li>
                   <li><Link to="#skill" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Skills</Link></li>
                   <li><Link to="#contact" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Contact</Link></li>
                      </ul>)
                    }
                  </div>
             </div> 
        </nav>
   </header>
    </div>

  )
}

export default Navbar