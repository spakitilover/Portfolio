import React from "react";
import "../../components/intro/intro.css";
import image1 from "../images/kb.png";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Intro = () => {
  return (
    <div className="h-auto bg-gray-100" id="home">
      <div className="lg:flex h-full">
        <div className="lg:flex-1 flex items-center ">
          <div className=" lg:p-32 p-14">
            <h1 className="text-5xl font-bold lg:my-5 my-5 text-blue-500">
              I'm Kabaki
            </h1>
            <div>
              <span className=" lg:text-7xl text-5xl text-center font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
                Full Stack-Web Developer.
              </span>
            </div>
            <div className=" lg:my-5 my-5">
              <span className=" text-gray-500 text-lg ">
                Welcome to my Portfolio , My name is Tarik Kabaki . Im A Full
                Stack Web Developer, UI/UX Integrator.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 h-full">
          <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-rose-500 lg:rounded-bl-[50%] overflow-hidden p-5 ">
            <div className="lg:h-[800px] w-full flex justify-center items-center ">
              <img
                src={image1}
                className="lg:h-[550px] lg:w-[550px] h-[250px] w-[250px] rounded-full object-cover border-8 border-white  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

/**    <div>
              <p className="text-gray-500">
                Im a Full Stack Web Developer with strong knowledge on React Js
                and Nest Js also able to Work with Next Js and Node js,
                producing quality work{" "}
              </p>
            </div> */

/*
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
             */

/* <div className="bg-gray-500 rounded-full w-[450px] h-[450px] overflow-hidden">
                <img
                  src={image1}
                  className="w-[450px] h-[450px] object-cover"
                />
              </div>*/
