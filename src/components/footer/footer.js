import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-20 bottom-0 flex justify-between lg:p-10 p-3 items-center">
      <div>
        {" "}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
          FOLIO.
        </h1>
      </div>
      <div className="flex text-lg font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
        +212 669-105672
      </div>
    </div>
  );
};

export default Footer;
