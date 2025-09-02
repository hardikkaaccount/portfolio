import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const SplineScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] flex justify-center">
      <Spline
        scene="/scene.splinecode"
        style={{
          width: isMobile ? "110%" : "50%", // limit width on bigger screens
          maxWidth: "1200px", // don’t let it grow too much
          height: isMobile ? "60vh" : "80vh", // limit height for desktops
          maxHeight: "800px",
          position: "absolute",
          top: isMobile ? "250px" : "180px",
          right: isMobile ? "-40px" : "-40", // center on desktop
          transform: isMobile ? "scale(0.8)" : "scale(1)",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
};

export default SplineScene;
