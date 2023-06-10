import React, { useContext } from "react";
import "../../components/intro/intro.css";
import image1 from "../images/kb.png";
import { ThemeContext } from "../../pages/home/home";

const Intro = () => {
  const context = useContext(ThemeContext);

  return (
    <div className="h-auto " id="home">
      <div className="lg:flex h-full w-full">
        <div className="lg:flex-1 flex items-center ">
          <div className="lg:p-32 p-14">
            <h1 className="text-5xl font-bold lg:my-5 my-5 text-blue-500 ">
              I'm Kabaki
            </h1>
            <div>
              <span className="lg:text-7xl text-5xl text-center font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
                Full Stack-Web Developer.
              </span>
            </div>
            <div className=" lg:my-5 my-5">
              <span
                className={
                  context.theme
                    ? "text-gray-500 text-lg duration-500"
                    : "text-white text-lg duration-500"
                }
              >
                Welcome to my Portfolio , My name is Tarik Kabaki . Im A Full
                Stack Web Developer, UI/UX Integrator.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 h-full">
          <div>
            <div className="lg:h-[800px] w-full flex justify-center items-center">
              <img
                src={image1}
                className="lg:h-[700px] lg:w-[600px] h-[350px] w-[250px] rounded-t-full object-cover border-8 border-yellow-500  "
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
