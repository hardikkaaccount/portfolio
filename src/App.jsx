import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Achivement,
  Freelance, // ✅ added
} from "./components";

const App = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    // Check if device is large (desktop/laptop)
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 1024); // 1024px is typically laptop size
    };
    
    // Initial check
    checkDevice();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkDevice);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-20 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <About />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Experience />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Freelance />   {/* ✅ New Section */}
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Tech />
          <Works />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Feedbacks />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Achivement />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <div className="relative z-0">
          <Contact />
          {isLargeDevice && <StarsCanvas />}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
