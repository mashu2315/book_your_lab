
import React from 'react'
import Headline from '../cards/Headline'
import about1 from "../../assets/about/about1.png"
import about2 from "../../assets/about/about2.png"
import about3 from "../../assets/about/about3.png"
import about4 from "../../assets/about/about4.png"
import halflogo from "../../assets/halflogo.png"

const About = [
  {
    id: 1,
    image: about1,
    title: "600+ Different Tests",
    description: "Experienced Professionals"
  },
  {
    id: 2,
    image: about2,
    title: "Free Home Sampling",
    description: "Sampling At Your Address"
  },
  {
    id: 3,
    image: about3,
    title: "High-End Technology",
    description: "State-of-The Art Technology"
  },
  {
    id: 4,
    image: about4,
    title: "Patient Support",
    description: "Advice And Recommendations"
  },
]

const AboutUs = () => {
  return (
    <div className='relative mt-[480px] lg:mt-0 px-4'>
      <div className='flex  flex-col lg:flex-row justify-center items-center gap-8'>

        {/* Left div */}
        <div className='flex lg:flex-row md:w-[500px] md:h-[500px] justify-center flex-col sm:flex-row md:flex-row items-center gap-6'>
          <div className='flex flex-col gap-6 sm:w-1/2 w-full'>
            {
              About.filter(value => value.id <= 2).map((value) => (
                <div key={value.id} className='p-2 flex flex-col hover:scale-105 transition-all duration-200 hover:shadow-2xl items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
                  <img src={value.image} alt="Not Found" className='h-[80px] sm:h-[100px]' />
                  <h1 className='font-bold my-2 text-[#434343] text-sm text-center'>{value.title}</h1>
                  <p className='text-[#7B7B7B] text-xs text-center'>{value.description}</p>
                </div>
              ))
            }
          </div>
          <div className='flex  flex-col gap-6 sm:w-1/2 w-full md:mt-14'>
            {
              About.filter(value => value.id > 2).map((value) => (
                <div key={value.id} className='p-2 flex flex-col hover:scale-105 transition-all duration-200 hover:shadow-2xl items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
                  <img src={value.image} alt="Not Found" className='h-[80px] sm:h-[100px]' />
                  <h1 className='font-bold my-2 text-[#434343] text-sm text-center'>{value.title}</h1>
                  <p className='text-[#7B7B7B] text-xs text-center'>{value.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        {/* Right div */}
        <div className='flex justify-center flex-col w-full lg:mt-14 md:w-[480px]'>
          <div className='flex flex-col items-start justify-center'>
            <p className='font-semibold text-sm sm:text-base'>Why Choose Us</p>
            <div className='bg-[#00DBA1] h-[2px] w-10 my-1'></div>
            <p className='font-bold text-lg sm:text-xl text-[#097C9A] tracking-wide mt-1'>
              We'll Ensure You Always <br className='hidden sm:block' /> Get The Best Results
            </p>
          </div>
          <div className='text-[#434343] mt-4 text-sm sm:text-base'>
            <p>
              Your full-service lab for clinical trials. Our mission is to ensure the generation of accurate.
              Novalab is registered with the following governmental agencies:
            </p>
            <ul className='max-w-md text-[14px] list-disc list-inside marker:text-green-500 mt-5'>
              <li>Drug Enforcement Agency (DEA) No. RG0105216</li>
              <li>Food and Drug Administration (FDA) No. 2182801</li>
              <li>International Standards Organization (ISO9001 and ISO17025)</li>
              <li>United States Department of Agriculture (USDA) No. 35-R-034</li>
            </ul>
            <button className="flex gap-2 mt-6 bg-[#00DBA1] transition-all duration-200 hover:border-teal-300  hover:bg-[white] hover:text-[#00DBA1]  text-white border-[0.5] border-white rounded-br-xl rounded-tl-xl px-4 py-1.5 text-xs font-bold">
              View List
            </button>
          </div>
        </div>
      </div>

      {/* Background Logo */}
      <div className="absolute top-[50px] right-[30px] rotate-180">
        <img src={halflogo} alt="not found" className="h-[100px] sm:h-[120px] opacity-10" />
      </div>
    </div>
  )
}

export default AboutUs;
