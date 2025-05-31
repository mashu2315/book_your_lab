import React from 'react'
import halfcircle from "../../assets/halfcircle.png"
import home from "../../assets/home.png"
import call from "../../assets/call.png"
const Homepage = () => {

  return (
    <div className='relative md:p-0 md:m-0'>
      <div className='overflow-hidden relative'>

        <img src={halfcircle} alt="Not found" className=' w-full top-[345px] absolute z-50' />
        <div className="relative w-full h-[400px] bg-white flex items-center overflow-hidden scale:95 md:scale-100 ">
          {/* Background Geometric Shapes */}
          <div>
            <div className="absolute bottom-0 left-[650px] w-[20%] h-[65px] bg-[#00DBA1]  -skew-x-[30deg] scale-x-[-1] z-0"></div>
            <div className="absolute bottom-[70px] left-[711px] w-[20%] h-[140px] bg-[#00DBA166] -skew-x-[30deg] scale-x-[-1] z-0"></div>
            <div className="absolute bottom-0 left-[46px] w-[800px] h-[100%] bg-[#097C9A26] transform -skew-x-[30deg] origin-top-left z-0"></div>
            <div className="absolute top-0 left-[30px] w-[58%] h-full bg-[#097C9A] transform -skew-x-[30deg] origin-top-left z-10"></div>
          </div>

          {/* Text and Button Section */}
          <div className="z-20 ml-10 w-1/2 ">
            <h1 className="text-xl md:text-5xl font-bold text-white leading-tight">
              Best PET CT Services<br />At Affordable Prices
            </h1>
            <p className="text-white mt-4 text-xs md:text-lg">
              Lorem ipsum is simply dummy text of the printing and<br />
              typesetting industry. Lorem ipsum has been the<br />
              industry's standard dummy.
            </p>
            <button className="mt-6 bg-white text-[#1A6A83] transition-all duration-150 font-semibold py-2 px-6 rounded-br-xl rounded-tl-xl hover:bg-[#1A6A83] hover:text-white scale-75 md:scale-100">
              Check Out Now
            </button>
          </div>


          {/* Image Placeholder */}
          <div className="relative z-20 w-1/2 h-full flex items-center justify-center scale-95 md:scale-100">
            <div className="w-[400px] h-[400px]  flex z-0 items-center justify-center">
              <img src={home} alt="" className=' absolute h-full w-[603px]' />
            </div>
          </div>
        </div>
      </div>
      <img src={call} alt="Not found" className='absolute top-[345px] hover:scale-105 transition-all duration-150  cursor-pointer right-[120px] h-[90px] z-50' />
    </div>
  );
}

export default Homepage;





