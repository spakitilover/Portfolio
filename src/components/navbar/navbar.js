import React from "react";

const Navbar = () => {
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
        <div>
          <ul className="flex lg:gap-10 gap-5">
            <li className="lg:text-lg text-blue-900">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="lg:text-lg text-blue-900">
              <a href="#contact">CONTACT</a>
            </li>
            <li className="lg:text-lg text-blue-900">
              <a href="#skills">SKILLS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
