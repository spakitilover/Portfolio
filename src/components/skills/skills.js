import React from "react";
import Storage from "@mui/icons-material/Storage";
import DataObject from "@mui/icons-material/DataObject";
import CheckCircleOutlineOutlined from "@mui/icons-material/CheckCircleOutlineOutlined";
import ConstructionOutlined from "@mui/icons-material/ConstructionOutlined";
import { motion } from "framer-motion";

const Skills = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="h-auto w-full bg-gray-100" id="skills">
      <h1 className=" flex justify-center text-4xl text-orange-600  ">
        SKILLS
      </h1>
      <div className="flex justify-center">
        <span className="text-lg text-center my-5 p-3 w-[500px] ">
          Im a Full Stack Web Developer useing the latest technologies for Web
          site Building , Take a Look{" "}
        </span>
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center lg:gap-10  md:p-10 p-10 md:gap-5">
        <div className=" flex justify-center my-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="lg:w-[300px] lg:h-[450px] md:w-[230px] md:h-[400px] w-[300px] h-[400px] bg-gray-200 rounded-2xl lg:p-10 md:p-5 p-10"
          >
            <div className=" flex justify-center">
              <div className="flex items-center justify-center lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-gradient-to-r from-orange-500 to-rose-500 rounded-full">
                <DataObject className="text-white" />
              </div>
            </div>
            <h1 className="flex justify-center lg:text-xl md:text-lg text-purple-800 my-5">
              Front Develoment
            </h1>
            <div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">ReactJs</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">Javascript</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">NextJs</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">HTML/CSS</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">Redux</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">Responsive Design </span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">Typescript</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" flex justify-center my-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="lg:w-[300px] lg:h-[450px] md:w-[230px] md:h-[400px] w-[300px] h-[400px] bg-gray-300 rounded-2xl lg:p-10 md:p-5 p-10"
          >
            <div className=" flex justify-center">
              <div className="flex items-center justify-center lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-gradient-to-r from-orange-500 to-rose-500 rounded-full">
                <Storage className="text-white" />
              </div>
            </div>
            <h1 className="flex justify-center lg:text-xl md:text-lg text-purple-800 my-5">
              Back Develoment
            </h1>
            <div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">NodeJs</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">NestJs</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">APIs</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">Relation Databases</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1">No SQL Database</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" flex justify-center my-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className="lg:w-[300px] lg:h-[450px] md:w-[230px] md:h-[400px] w-[300px] h-[400px] bg-gray-400 rounded-2xl lg:p-10 md:p-5 p-10"
          >
            <div className=" flex justify-center">
              <div className="flex items-center justify-center lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-gradient-to-r from-orange-500 to-rose-500 rounded-full">
                <ConstructionOutlined className="text-white" />
              </div>
            </div>
            <h1 className="flex justify-center lg:text-xl md:text-lg text-purple-800 my-5">
              Extra Bonus
            </h1>
            <div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1 text-gray-100">Problem Solving</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1 text-gray-100">
                  Communication Skills
                </span>
              </div>

              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1 text-gray-100">Reliability</span>
              </div>
              <div className="flex items-center">
                <CheckCircleOutlineOutlined className="text-green-500" />
                <span className="ml-5 my-1 text-gray-100">
                  Serious Work Attitude
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/**  <div className="my-10">
            <span>HTML , CSS</span>
            <div className="lg:w-full h-[8px] bg-cyan-200">
              <div className="lg:w-[90%] h-[8px] bg-cyan-700"></div>
            </div>
          </div> */
/**    <div className="w-full lg:h-auto bg-gray-500 flex justify-center">
        <div className="my-16">
          <h1 className=" text-4xl font-bold text-rose-600 flex justify-center ">
            SKILLS
          </h1>
          <div className="my-10 lg:w-[650px] text-center ">
            <span className="font-bold text-lg text-white ">
              Im a full stack web developer useing the latest technologies for
              Web site Builing , Take a Look{" "}
            </span>
          </div>
        </div>
      </div> */
