import { useState, useEffect } from 'react';

function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const scrollPercent = (scrollY / scrollHeight) * 100;
        setScrollWidth(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${scrollWidth}%` }}
    ></div>
  );
}

export default ScrollIndicator;
