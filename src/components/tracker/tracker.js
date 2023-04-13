import React from "react";
import Home from "@mui/icons-material/Home";
import Send from "@mui/icons-material/Send";
import Work from "@mui/icons-material/Work";
import Code from "@mui/icons-material/Code";
import { motion } from "framer-motion";

const Tracker = () => {
  return (
    <div className="w-full flex justify-start items-end p-20 fixed bottom-0">
      <div className="lg:w-[300px] lg:h-[80px] bg-gradient-to-r from-yellow-500 to-rose-500  rounded-full flex justify-center items-center">
        <ul className="flex justify-between w-full p-5">
          <motion.li
            herf="#home"
            className="lg:w-[50px] lg:h-[50px] bg-white rounded-full flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Home />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:w-[50px] lg:h-[50px] bg-white rounded-full flex justify-center items-center"
          >
            <Code />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:w-[50px] lg:h-[50px] bg-white rounded-full flex justify-center items-center"
          >
            <Work />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:w-[50px] lg:h-[50px] bg-white rounded-full flex justify-center items-center"
          >
            <Send />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Tracker;
