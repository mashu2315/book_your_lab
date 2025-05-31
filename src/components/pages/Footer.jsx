
import React from 'react';
import logo2 from "../../assets/logo2.png";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import footer from "../../data/footer.js";

const Footer = () => {
  return (
    <div className='bg-[#097C9A26]'>
      <div className='bg-[#097C9A] w-screen flex items-center justify-center pb-16 relative'>
        {/* Newsletter Subscription Section */}
        <div className='bg-[#00DBA1] rounded-bl-3xl rounded-tr-3xl p-5  flex flex-col md:flex-row justify-center items-center w-9/12 md:w-10/12 scale-110 absolute -top-[50px] transition-all duration-500 ease-in-out hover:scale-115 animate-fadeIn '>
          <p className='text-white mr-0 md:mr-10 mb-4 md:mb-0 uppercase text-lg md:text-base font-semibold text-center'>
            Subscribe to Our Newsletter
          </p>
          <div className='w-[500px] md:w-full flex justify-center'>
            <input
              type="text"
              className='p-1 placeholder-text-white px-3 rounded-tl-lg text-[#097C9A] md:w-full'
              placeholder='Enter Your Email Id'
            />
            <button className='bg-[#097C9A] rounded-br-lg  text-white px-3 py-1 hover:bg-gray-300 hover:text-[#097C9A] transition-all duration-200'>
              Subscribe
            </button>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className='flex flex-col sm:flex-row pl-[40px] pt-[80px] gap-8 sm:gap-0'>
          {/* Logo and Social Section */}
          <div className='animate-fadeIn'>
            <img src={logo2} alt="Not found" className='h-[60px] mx-auto sm:mx-0' />
            <p className='text-white font-poppins whitespace-normal w-full sm:w-[300px] pt-5 text-center sm:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className='flex pt-2 justify-center sm:justify-start'>
              <div className='bg-[#00DBA1] text-white hover:bg-white hover:text-[#00DBA1] rounded-full p-2 mr-2 hover:scale-110 hover:cursor-pointer transition-all duration-200'>
                <FaFacebookF  fontSize={12} />
              </div>
              <div className='bg-[#00DBA1] text-white  hover:bg-white hover:text-[#00DBA1] rounded-full p-2 mr-2 hover:scale-110 transition-all hover:cursor-pointer duration-200'>
                <FaTwitter fontSize={12} />
              </div>
              <div className='bg-[#00DBA1] text-white hover:text-[#00DBA1] hover:bg-white rounded-full p-2 hover:scale-110 hover:cursor-pointer transition-all duration-200'>
                <FaYoutube fontSize={12} />
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className='mx-[40px] animate-fadeIn'>
            <h1 className='text-[#00DBA1] text-lg font-semibold text-center sm:text-left'>Quick Links</h1>
            <div className='p-[2px] bg-[#00DBA1] mt-1 w-1/3 mx-auto sm:mx-0'></div>
            <div className='opacity-90 mt-5'>
              {footer[0].map((event) => (
                <div key={event.id} className='text-white text-lg text-center sm:text-left'>
                  <a href="#" className='hover:text-[#00DBA1] transition-all duration-200'>{event.name}</a>
                  <div className='p-[0.5px] bg-white opacity-60 my-1'></div>
                </div>
              ))}
            </div>
          </div>
          {/* Popular Packages */}
          <div className='mx-[40px] animate-fadeIn'>
            <h1 className='text-[#00DBA1] text-lg font-semibold text-center sm:text-left'>Popular Packages</h1>
            <div className='p-[2px] bg-[#00DBA1] mt-1 w-1/3 mx-auto sm:mx-0'></div>
            <div className='opacity-90 mt-5'>
              {footer[1].map((event) => (
                <div key={event.id} className='text-white text-lg text-center sm:text-left'>
                  <a href="#" className='hover:text-[#00DBA1] transition-all duration-200'>{event.name}</a>
                  <div className='p-[0.5px] bg-white opacity-60 my-1'></div>
                </div>
              ))}
            </div>
          </div>
          {/* Our Presence */}
          <div className='mx-[40px] animate-fadeIn'>
            <h1 className='text-[#00DBA1] text-lg font-semibold text-center sm:text-left'>Our Presence</h1>
            <div className='p-[2px] bg-[#00DBA1] mt-1 w-1/3 mx-auto sm:mx-0'></div>
            <div className='opacity-90 mt-5 flex gap-10 flex-wrap justify-center sm:justify-start'>
              <div>
                {footer[2].map((event) => (
                  <div key={event.id} className='text-white text-lg text-center sm:text-left'>
                    <a href="#" className='hover:text-[#00DBA1] transition-all duration-200'>{event.name}</a>
                    <div className='p-[0.5px] bg-white opacity-60 my-1'></div>
                  </div>
                ))}
              </div>
              <div>
                {footer[2].map((event) => (
                  <div key={event.id} className='text-white text-lg text-center sm:text-left'>
                    <a href="#" className='hover:text-[#00DBA1] transition-all duration-200'>{event.name}</a>
                    <div className='p-[0.5px] bg-white opacity-60 my-1'></div>
                  </div>
                ))}
              </div>
              <div>
                {footer[2].map((event) => (
                  <div key={event.id} className='text-white text-lg text-center sm:text-left'>
                    <a href="#" className='hover:text-[#00DBA1] transition-all duration-200'>{event.name}</a>
                    <div className='p-[0.5px] bg-white opacity-60 my-1'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className='flex items-center justify-center p-4 flex-wrap'>
        {footer[3].map((event) => (
          <div key={event.id} className='flex flex-col items-center mx-[30px] w-[400px] animate-fadeIn'>
            <img src={event.image} alt="Not Found" className='h-[50px] hover:scale-105 transition-all duration-200' />
            <h1 className='text-[#434343] p-1 font-bold'>{event.title}</h1>
            <p className='text-[#434343] text-center text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
      <div className='py-4 bg-[#097C9A] text-white font-semibold text-center'>
        © 2020 All Rights Reserved by Intermediq Tech Health Services Private Limited
      </div>
    </div>
  );
};

export default Footer;