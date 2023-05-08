import React, { useState } from "react";
import MenuRounded from "@mui/icons-material/MenuRounded";
import WorkOutline from "@mui/icons-material/WorkOutline";
import Telegram from "@mui/icons-material/Telegram";
import StarBorder from "@mui/icons-material/StarBorder";
import Close from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:h-20 bg-gray-100 top-0 sticky z-[999]">
      <div className="flex p-6 justify-between items-center">
        <div>
          <a
            href="#home"
            className="text-4xl  font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent"
          >
            FOLIO.
          </a>
        </div>
        <div className="lg:visible invisible">
          <ul className="flex lg:gap-10 gap-3">
            <li className="lg:text-lg text-sm text-blue-900">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="lg:text-lg text-sm text-blue-900">
              <a href="#contact">CONTACT</a>
            </li>
            <li className="lg:text-lg text-sm text-blue-900">
              <a href="#skills">SKILLS</a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="lg:invisible visible absolute right-0 p-6 hover:text-orange-500 duration-300 cursor-pointer"
        >
          <MenuRounded />
        </div>
        <div
          className={`bg-orange-400 h-full w-[350px] fixed z-30 right-0 bottom-0 ${
            open === false ? "translate-x-[400px] duration-500" : "duration-500"
          }`}
        >
          <div>
            <div className="p-5 flex items-center gap-3">
              <div
                onClick={() => setOpen(false)}
                className="p-2 rounded-full bg-white hover:bg-black hover:text-white duration-300 cursor-pointer"
              >
                <Close />
              </div>
            </div>
            <ul className="p-5">
              <li className=" mb-10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white">
                  <WorkOutline />
                </div>
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-black duration-300"
                >
                  PROJECTS
                </a>
              </li>
              <li className="  mb-10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white">
                  <Telegram />
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-black duration-300"
                >
                  CONTACT
                </a>
              </li>
              <li className=" mb-10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white">
                  <StarBorder />
                </div>
                <a
                  href="#skills"
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-black duration-300"
                >
                  SKILLS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
