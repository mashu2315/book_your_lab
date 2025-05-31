import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import flag from "../../assets/India.png";
import { FaMicrophone, FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="font-nunito flex flex-row items-center justify-between w-11/12 mx-auto h-[72px]">
        {/* Logo */}
        <div>
          <img src={logo} alt="BookYourLab Logo" height="72px" width="168px" className="p-2" />
        </div>

        {/* Search Bar and Flag Dropdown */}
        <div className="flex items-center w-full max-w-2xl">
          <div className="flex w-full items-center">
            <div className="flex p-2 bg-[#F4F4F4] items-center w-full rounded-tl-xl hover:scale-100 transition-all duration-200">
              <CiSearch fontSize={25} className="text-[#807F8A]" />
              <input
                type="search"
                placeholder="Search for Diagnostic tests / health checkup / scan"
                className="font-nunito bg-[#F4F4F4] px-2 w-full outline-none placeholder-[#807F8A] sm:text-sm sm:placeholder:text-xs"
              />
            </div>
            <div className="bg-[#097C9A] text-white p-3 rounded-br-xl hover:bg-white hover:text-[#097C9A] hover:scale-95 transition-all duration-200">
              <FaMicrophone fontSize="17px" />
            </div>
          </div>
          {/* Flag Dropdown: Visible on large devices, hidden on medium/small */}
          <div className="md:hidden lg:flex h-[36px] p-2 items-center ml-2 hover:scale-105">
            <img src={flag} alt="India Flag" className="h-5 w-7" />
            <FaAngleDown fontSize="13px" className="text-[#097C9A] ml-1" />
          </div>
        </div>

        {/* User Options */}
        <div className="flex gap-5 items-center relative">
          {/* Left Arrow and Dropdown for Medium Devices */}
          <div
            className="hidden md:flex lg:hidden items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaAngleLeft fontSize="20px" className="text-[#097C9A]" />
            {isHovered && (
              <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 z-10">
                <div className="flex items-start justify-start flex-col text-sm text-[#097C9A] hover:text-green-500 hover:scale-105 transition-all duration-200">
                  Hello, <b className="flex items-center">Sign In <FaAngleDown /></b>
                </div>
                <div className="flex items-start justify-center flex-col text-sm text-[#097C9A] hover:text-green-500 hover:scale-105 transition-all duration-200">
                  <p className="flex gap-1 items-start text-xs">
                    <FaLocationDot fontSize={10} /> Location
                  </p>
                  <b className="flex gap-2 justify-center">Mumbai <FaAngleDown /></b>
                </div>
                <div className="flex h-[36px] p-2 items-center hover:scale-105 text-[#097C9A]">
                  <img src={flag} alt="India Flag" className="h-5 w-7" />
                  <FaAngleDown fontSize="13px" className="text-[#097C9A] ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* User Options for Large Devices */}
          <ul className="text-[#097C9A] lg:flex items-center gap-4 hidden">
            <li>
              <a href="/" className="flex items-start justify-start flex-col text-sm hover:text-green-500 hover:scale-105 transition-all duration-200">
                Hello, <b className="flex items-center">Sign In <FaAngleDown /></b>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-start justify-center flex-col text-sm hover:text-green-500 hover:scale-105 transition-all duration-200">
                <p className="flex gap-1 items-start text-xs">
                  <FaLocationDot fontSize={10} /> Location
                </p>
                <b className="flex gap-2 justify-center">Mumbai <FaAngleDown /></b>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1 text-[#097C9A] border-[2px] border-[#097C9A] rounded-br-xl rounded-tl-xl p-2 hover:bg-[#097C9A] hover:text-white hover:scale-105 transition-all duration-200">
                <LuUpload />
                <span className="lg:inline md:hidden">Upload Prescription</span>
              </a>
            </li>
          </ul>

          {/* User Options for Medium Devices (only Upload Prescription) */}
          <ul className="text-[#097C9A] md:flex lg:hidden hidden items-center gap-4">
            <li>
              <a href="/" className="flex items-center gap-1 text-[#097C9A] border-[2px] border-[#097C9A] rounded-br-xl rounded-tl-xl p-2 hover:bg-[#097C9A] hover:text-white hover:scale-105 transition-all duration-200">
                <LuUpload />
                <span className="lg:inline md:hidden">Upload Prescription</span>
              </a>
            </li>
          </ul>

          {/* Small Devices: Only Upload Prescription Icon */}
          <ul className="text-[#097C9A] sm:flex md:hidden flex items-center gap-4">
            <li>
              <a href="/" className="flex items-center gap-1 text-[#097C9A] border-[2px] border-[#097C9A] rounded-br-xl rounded-tl-xl p-2 hover:bg-[#097C9A] hover:text-white hover:scale-105 transition-all duration-200">
                <LuUpload />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;