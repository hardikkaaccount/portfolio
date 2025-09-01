import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Spline 
        scene="/scene.splinecode"
        style={{
          width: isMobile ? '110%' : '100%', // Smaller width on mobile
          height: isMobile ? '60vh' : '100vh', // Smaller height on mobile
          position: 'absolute',
          top: isMobile ? '250px' : '150px', // Move down on all devices
          right: isMobile ? '-40px' : '-150px', // Move right on desktop
          transform: isMobile ? 'scale(0.8)' : 'scale(1)', // Scale down on mobile
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
};

export default SplineScene;