import React, { useState, useEffect, useRef } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import oladax from './Images/avaterscreenshoot-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Services from './Services';

function Portfolioheader() {
  const [Sun, setSun] = useState(true);

  const  body = document.querySelector("body")
  const  h1 = document.querySelector(".h1");
  const  homepage = document.querySelector(".header-main");
  const anchorTags = document.querySelectorAll('nav a');
 const intro = document.querySelectorAll('.social-media-icons a');
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  //grabbing the intro p tag with useref

  const pRef = useRef(true);
  const watch = useRef(true)

  const Darkmode = () => {
    setSun(!Sun);
    body.classList.toggle("darkmode")
    h1.classList.toggle("darkmode")
    homepage.classList.toggle("darkmode")
    intro.forEach((a) => a.classList.toggle("darkmode"))
    anchorTags.forEach((map) => map.classList.toggle("darkmode"))
    handleToggle();
    const pElement = pRef.current;
    pElement.classList.toggle("darkmode")
    const watch_intro = watch.current
    watch_intro.classList.toggle("darkmode")
  }

//openmenu
const [isMenuOpen, setIsMenuOpen] = useState(false);

 const triggermenu = () => {
     setIsMenuOpen(!isMenuOpen)
 }


  const [text, setText] = useState('');
  const message = "Hello! I'm\nOladax,\nA Frontend Web Developer."; // Use line breaks with '\n'
    
  
  useEffect(() => {
    // Recursive function to simulate typing effect
    const typeText = (currentIndex) => {
      // Base case: if currentIndex exceeds message length, return
      if (currentIndex >= message.length) return;

      // Update the text state with the current message
      setText(message.slice(0, currentIndex + 1));

      // Delay between each character typing
      const delay = 200;

      // Recursive call to type the next character
      setTimeout(() => {
        typeText(currentIndex + 1);
      }, delay);
    };

    // Start the typing effect when the component mounts
    typeText(0);
  }, []);

  return (
    <div className="project-con">
<div className='header-main'>

<header>
<div className="logo">
    <span className='icon'><FaLaptopCode /></span>
    <h1>
      Oladax
    </h1>
  </div>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <div className="hire">
    <a href="contact"> Hire Me <span className='forward'>&raquo;</span></a>
  </div>

  <div className="dropdown">
<button onClick={triggermenu}>  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
</button>  
</div>

</header>

<div className='error'>
</div>
<div className="sprinkle-container">
<span className="entity entity1">&#9733;&#9733;&#9733;&#9733;</span>
<span className="entity entity2">&hearts;&hearts;&hearts;</span>  
{/* Other components and content */}
<div className="toggle">
<button onClick={Darkmode}>
  <FontAwesomeIcon icon={Sun ? faSun : faMoon} />
</button>
</div>



</div>

{/*darkmode*/}

 <div className="section-con">
 <section>
  <div className="intro-con">
    {/* Use CSS white-space property to preserve line breaks */}
    <h1 className='h1'>
{text}
</h1>
    <p ref={pRef} >I specialize in crafting engaging websites that captivate users. Hire me now <br /> to discover the excellence of my web development expertise.
</p>
    <div className="cv-con"><button>Download CV</button>
    <button ref={watch}  className='play'>
          <span ><FontAwesomeIcon icon={faPlay} /></span>
        Watch Intro
        </button>
    </div>
  </div>

  <div className="oladax-pic">
    <img src={oladax} alt="Oladax" />
    <div>
      <div className="empty"></div>
    </div>

   

    <div className="social-media-icons">
      <a href="#">
        <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faWhatsapp} className="social-media-icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTelegram} className="social-media-icon" />
      </a>
    </div>
  </div>

 
</section>
 </div>

<div className="sprinkle-container">
<span className="entity entity3">&diams;&diams;&diams;&diams;</span>
<span className="entity entity4">&#9790;&#9790;&#9790;</span>  
{/* Other components and content */}
</div>
</div>
   <div className="service-div"><Services/></div>
    </div>
  );
}

export default Portfolioheader;
