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
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '150px', // Move down more on all devices
          right: isMobile ? '0' : '-150px', // Move further right on desktop
        }}
      />
    </div>
  );
};

export default SplineScene;