import React from "react";
import image1 from "../images/image1.png";

const Intro = () => {
  return (
    <div className="h-auto bg-gray-100" id="home">
      <div className="lg:flex h-full">
        <div className="lg:flex-1 flex items-center ">
          <div className=" lg:p-32 p-14">
            <h1 className=" text-4xl lg:my-5 my-5 text-rose-700">Hello</h1>
            <div>
              <span className=" lg:text-7xl text-5xl text-center font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
                <span className=" text-purple-800">I'm</span> a Full Stack Web
                Developer.
              </span>
            </div>
            <div className=" lg:my-5 my-5">
              <span className=" text-gray-500 ">
                Hello there , My name is Tarik Kabaki . Im A Full Stack Web
                Developer, And UI/UX Integrator.
              </span>
            </div>
            <div>
              <button className="lg:my-5 my-5 w-[180px] h-[60px] bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-md shadow-black font-bold">
                Download Cv
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 h-full">
          <div className=" h-full lg:flex lg:items-center ">
            <div className="lg:h-[800px] lg:w-full bg-gradient-to-r from-yellow-500 to-rose-500 flex lg:justify-end lg:items-end lg:rounded-l-full">
              <img
                src={image1}
                className="lg:h-[750px] lg:w-[750px] object-cover z-20 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
