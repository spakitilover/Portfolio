import React, { useContext } from "react";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import img1 from "../../components/images/image1.png";
import { ThemeContext } from "../../pages/home/home";

const AboutMe = () => {
  const context = useContext(ThemeContext);

  return (
    <div className="w-full h-auto  ">
      <div className="lg:flex w-full lg:p-32 ">
        <div className="lg:h-[600px] h-[400px] lg:flex-1 flex justify-center items-center p-5">
          <div className="lg:w-[35vw] lg:h-[650px] w-full h-full bg-gray-500 overflow-hidden rounded-2xl z-20 bg-gradient-to-r from-yellow-500 to-orange-300  ">
            <img
              src={img1}
              className="lg:w-full lg:h-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="lg:p-16 lg:flex-1">
          <div className="mb-5 lg:block flex justify-center">
            <span
              className={
                context.theme
                  ? "lg:text-8xl text-6xl font-bold text-slate-600 duration-500"
                  : "lg:text-8xl text-6xl font-bold text-orange-500 duration-500"
              }
            >
              ABOUT ME
            </span>
          </div>
          <div className="mb-10 lg:block flex justify-center">
            <span className="text-pink-500 font-bold lg:text-3xl text-xl">
              Full-Stack Web Developer
            </span>
          </div>
          <div className="lg:w-[80%] mb-10  lg:block flex justify-center lg:text-start text-center lg:p-0 p-3 ">
            <span
              className={
                context.theme
                  ? "text-slate-500 duration-500"
                  : "text-slate-200 duration-500"
              }
            >
              Hello my name is Tarik Kabaki, I'm an experienced Full-Stack Web
              Developer with 4 years of hands-on experience. Skilled in
              Front-End and Back-End Development, I specialize in creating
              user-friendly web applications using the latest technologies such
              as : HTML, CSS, JavaScript, React.js, Next.js, Nest.js, Node.js,
              etc...
              <br />
              <br /> I also excel at crafting intuitive interfaces and building
              robust server-side solutions,I prioritize clean, scalable code and
              stay updated with the latest industry trends. With a strong
              commitment to client satisfaction, I aim to deliver innovative web
              solutions that drive meaningful impact.
            </span>
          </div>
          <div className="gap-5 lg:flex lg:justify-start flex justify-center">
            <div
              className={
                context.theme
                  ? "hover:text-gray-500 duration-300 cursor-pointer"
                  : "hover:text-gray-500 duration-300 cursor-pointer text-slate-200 "
              }
            >
              <GitHub style={{ fontSize: "35px" }} />
            </div>
            <div
              className={
                context.theme
                  ? "hover:text-[#0A66C2] duration-300 cursor-pointer"
                  : "hover:text-[#0A66C2] duration-300 cursor-pointer text-slate-200"
              }
            >
              <LinkedIn style={{ fontSize: "35px" }} />
            </div>
            <div
              className={
                context.theme
                  ? "hover:text-[#00acee] duration-300 cursor-pointer"
                  : "hover:text-[#00acee] duration-300 cursor-pointer text-slate-200"
              }
            >
              <Twitter style={{ fontSize: "35px" }} />
            </div>
            <div
              className={
                context.theme
                  ? "hover:text-pink-600 duration-300 cursor-pointer"
                  : "hover:text-pink-600 duration-300 cursor-pointer text-slate-200"
              }
            >
              <Instagram style={{ fontSize: "35px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
