import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // optional if you want GitHub icons
import { SectionWrapper } from "../hoc";
import { freelanceWorks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface FreelanceWork {
  title: string;
  client?: string;
  description: string;
  images: string[];
  status: string;
  learnings?: string[];
  link: { type: string; url?: string };
}

interface FreelanceCardProps {
  index: number;
  work: FreelanceWork;
}

const FreelanceCard: React.FC<FreelanceCardProps> = ({ index, work }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ scale: 0.97, boxShadow: "0 0 15px rgba(0, 255, 255, 0.4)" }} // Zoom out + glow
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-full"
    >
      <div className="relative w-full h-[230px] flex-shrink-0 overflow-hidden rounded-2xl">
        <img
            src={work.images[0]}
            alt={work.title}
            className="w-full h-full object-cover object-center rounded-2xl"
        />
        </div>


      <div className="mt-5 flex flex-col flex-grow">
        <div>
          <h3 className="text-white font-bold text-[24px]">{work.title}</h3>
          {work.client && (
            <p className="text-secondary text-[14px] italic">{work.client}</p>
          )}
        </div>

        <p className="mt-2 text-secondary text-[14px] flex-grow overflow-y-auto max-h-[6rem]">
          {work.description}
        </p>

        {work.learnings && (
            <div className="mt-3 text-[13px] text-gray-300 max-h-[6rem] overflow-y-auto">
                <p className="font-semibold mb-1">Learnings:</p>
                <ul className="list-disc list-outside pl-4 space-y-1"> {/* changed list-inside → list-outside and added pl-4 */}
                {work.learnings.map((learn, i) => (
                    <li key={i}>{learn}</li>
                ))}
                </ul>
            </div>
        )}

      </div>

      <div className="mt-4 flex justify-end flex-shrink-0">
        <button
          onClick={() => work.link.url && window.open(work.link.url, "_blank")}
          className="bg-blue-600 text-white px-3 py-1 rounded-md transition"
        >
          {work.link.type === "normal"
            ? "View Project"
            : work.link.type === "ongoing"
            ? "Ongoing"
            : "Non Disclosable"}
        </button>
      </div>
    </motion.div>
  );
};


const Freelance: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    function updateHeights() {
      if (cardRefs.current.length === 0) return;
      const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      const max = Math.max(...heights);
      setMaxHeight(max);
    }

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, [freelanceWorks.length]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Contract Projects</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Freelance & Contract Based
        </h2>
      </motion.div>

      <div className="w-full flex mt-3">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These freelance projects demonstrate my practical experience and
          ability to deliver real-world solutions. Each project showcases the
          technologies, problem-solving skills, and collaboration involved.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {freelanceWorks.map((work, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
            className="w-full sm:w-[360px]"
          >
            <FreelanceCard index={index} work={work} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Freelance, "freelance");
