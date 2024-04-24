import React, { useState, useEffect } from 'react';
import './MouseTracker.css'; // Import CSS file for styling

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-tracker">
      <div className="circle-1" style={{ top: position.y, left: position.x }}></div>
      <div className="circle-2" style={{ top: position.y, left: position.x }}></div>
    </div>
  );
};

export default MouseTracker;