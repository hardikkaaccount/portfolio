import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Achievements } from "../constants";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="carousel-container">
      <p className={styles.sectionSubText}></p>
      <a href="https://pesce.ac.in/department-artificial-intelligence-machine-learning.php#achievements" target="_blank"><h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
        Achievements
      </h2>
      </a>
      <Slider {...settings}>
        {Achievements.map((project) => (
          <div key={project.id} className="carousel-slide">
            <div className="carousel-content">
              <div className="text-content">
                <h3 className="text-white title-style">{project.title}</h3>
                <p className="description-style">{project.description}</p>
              </div>
              <div className="image-content">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img className="small-img" src={project.image} alt={project.title} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const Achievement = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "");
