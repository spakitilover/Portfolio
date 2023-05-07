import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full h-20  bottom-0 flex justify-between p-10 items-center">
      <div>
        {" "}
        <h1 className="text-4xl  font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
          FOLIO.
        </h1>
      </div>
      <div className="gap-3 flex">
        <div className="w-[40px] h-[40px] bg-gray-900 rounded-full flex justify-center items-center">
          <LinkedIn className="text-white" />
        </div>
        <div className="w-[40px] h-[40px] bg-gray-900 rounded-full flex justify-center items-center">
          <GitHub className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
