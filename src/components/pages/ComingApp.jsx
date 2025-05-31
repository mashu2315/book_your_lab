

import React from "react";
import app from "../../assets/app.png";
import blue from "../../assets/blue.png";
import curve from "../../assets/curve.png";
import mobile from "../../assets/mobile.png";
import halflogo from "../../assets/halflogo.png";

const ComingApp = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[500px] lg:h-[600px] flex flex-col">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${app})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${blue})` }}
      ></div>

      {/* Top curve and logo */}
      <div className="relative w-full">
        <img
          src={curve}
          alt="curve"
          className="absolute top-0 left-0 w-full object-cover z-10"
        />
        <div className="absolute top-0 left-4 sm:left-10 z-20">
          <img src={halflogo} alt="not found" className="h-[100px] sm:h-[120px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full px-6 sm:px-12 lg:px-20 pt-10 sm:pt-20 animate-fadeInSlow">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-bold text-white text-3xl sm:text-4xl leading-snug animate-fadeInUp">
            Our App is <br /> COMING SOON
          </h1>
          <p className="text-white my-6 text-sm sm:text-base animate-fadeInUp delay-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br className="hidden sm:inline" />
            Lorem Ipsum has been the industry's standard dummy.
          </p>
          <button className="bg-[#00DBA1]  transition-all duration-100 hover:border-teal-300 hover:bg-[white] hover:text-[#00DBA1] text-white border-0 rounded-br-xl rounded-tl-xl px-6 py-2 text-sm font-bold   animate-fadeInUp delay-100">
            Get Notified
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate-fadeInUp delay-200">
          <img
            src={mobile}
            alt="not found"
            className="max-h-[400px] sm:max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingApp;
