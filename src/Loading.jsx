import React, { useEffect } from 'react';
import Oletter from './Images/Oletter1-removebg-preview.png';

function Loading() {
  useEffect(() => {
    const run = () => {
      const message = "You are highly welcome to oladax's Portfolio website.";
      const speech = new SpeechSynthesisUtterance(message);
      speech.lang = 'en-GB';
      speech.volume = 0.3;
      //speech.rate = 1;
     // window.speechSynthesis.speak(speech);
    };

    run();
  }, []);

  return (
    <div className='loaded' >
        <div className="logo-container">
          <img src={Oletter} alt="" />
          <h2>ladax</h2>
        </div> </div>
  );
}

export default Loading;
