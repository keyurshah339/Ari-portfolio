import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";
import { useEffect, useState } from "react";

export const serviceData = [];

export const aboutData = [
  {
    title: "WEB APPLICATIONS",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "MOBILE APPLICATIONS",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "MOBILE APPLICATIONS",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "SAAS PRODUCT DEVELOPMENT",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "AR/VR SOFTWARE DEVELOPMENT",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "AI APPLICATIONS",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
  {
    title: "CONSULTANCY",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [mount, setmount] = useState(false);

  useEffect(() => {
    setmount(true)
  },[])


  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-col gap-x-8">
          {/* text */}
          <div className="text-center flex  flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-full mx-auto lg:mx-0"
            >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              tempora eligendi, quisquam tempore sint reiciendis. */}
              {mount && <div style={{flexWrap:'wrap'}} className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                style={{marginBottom:'1rem'}}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>}
            
            </motion.p>

          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[100%]"
          >
            {/* <ServiceSlider /> */}
            
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].title == 'WEB APPLICATIONS' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div style={{backgroundColor: 'rgb(243 177 194 / 1)',color:'black'}} className="w-full md:w-3/4 h-full p-8 bg-white relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}

      {aboutData[index].title == 'MOBILE APPLICATIONS' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div style={{backgroundColor: 'rgb(234 218 184 / 1)',color:'black'}} className="w-full md:w-3/4 h-full p-8  relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p style={{color:'black'}}>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}
      {aboutData[index].title == 'AR/VR SOFTWARE DEVELOPMENT' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div style={{backgroundColor: 'rgb(169 196 203 / 1)',color:'black'}} className="w-full md:w-3/4 h-full p-8 bg-white relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}
      {aboutData[index].title == 'AI APPLICATIONS' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div className="w-full md:w-3/4 h-full p-8 bg-white relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}
      {aboutData[index].title == 'CONSULTANCY' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div className="w-full md:w-3/4 h-full p-8 bg-white relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}
      {aboutData[index].title == 'SAAS PRODUCT DEVELOPMENT' && <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{height:'300px',marginBottom:'2rem'}} className="relative w-full   overflow-hidden"
          > 
      {/* Box */}
      <div style={{backgroundColor: 'rgb(223 243 253  / 1)',color:'black'}} className="w-full md:w-3/4 h-full p-8 bg-white relative z-10">
        <h2 className="text-2xl font-bold mb-4">Your Box Content</h2>
        <p>Your box content description goes here.</p>
      </div>

      <div style={{backgroundColor:'transparent'}}>
      <img
        style={{zIndex:'100'}}
        src="/dummypic.png"
        alt="Image"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 h-full "
      />
      </div>
      
      </motion.div>}
          </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
