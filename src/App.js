import React, { useState, useEffect } from 'react';
import Portfolio from './Loading';
import Portfolioheader from './Portfolioheader';

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    // Start a timer to set 'loaded' to false after 3000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 2500);

    // Clean up the timer when the component unmounts or 'loaded' changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='whole'>
      {loaded ? (
        <Portfolio />
      ) : (
           <Portfolioheader/>
      )}
      
    </div>
  );
}

export default App;
