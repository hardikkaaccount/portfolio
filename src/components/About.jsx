import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hardik } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Google Developer Group (GDG)</p>
        <h5 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          GDG on Campus - PESCE, Mandya.
        </h5>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Google Developer Groups (GDG) is a global network of developers who share a passion for building technology solutions using Google’s developer tools and platforms. At PES College of Engineering, our GDG chapter provides a vibrant community where students collaborate, innovate, and grow together through various activities and events. 

          <br /><br />
          
          Our goal is to empower students by organizing workshops, hackathons, coding challenges, and tech talks that enhance their knowledge in cutting-edge technologies like Machine Learning, Cloud Computing, Web Development, and Mobile App Development. We also offer opportunities for students to connect with industry professionals, learn from their experiences, and gain hands-on exposure to real-world projects.

          <br /><br />
          
          Whether you're interested in Google Cloud, Android Development, or the latest AI advancements, GDG PES College of Engineering fosters a welcoming environment for students to learn, create, and innovate. If you're looking to expand your skills, collaborate with like-minded individuals, or simply explore new technologies, our GDG community is the perfect place to start.

          <br /><br />
          
          To learn more about the GDG program and how to get involved, visit the official GDG website:{" "}
          <a
            href="https://developers.google.com/community"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            GDG Official Site
          </a>.
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={hardik}  // Replace with your image here
                alt="Hardik"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
