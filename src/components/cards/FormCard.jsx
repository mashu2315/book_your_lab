import React from 'react'
import Headline from './Headline'
import formbg from "../../assets/formbg.png"
import body from "../../assets/body.png"
import Form from './Form'
import halflogo from "../../assets/halflogo.png"

const FormCard = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col'>
        <Headline heading={"Health Checkups"} text={"Let Us Suggest You The Best"} />
        <p className='font-poppins pt-5 text-center text-[#434343]'>Select a body organ and we’ll suggest the best available tests to help in precise diagnosis of
          <br /> the problem.
        </p>
        <div >
          <div className='relative  flex flex-col items-center lg:flex-row h-[450px] gap-2 mt-4 '>
            <div className='w-[410px]  relative flex items-center justify-center'><img src={formbg} alt="Not found bg" /><img src={body} alt="Not found bg" className=' absolute h-[420px]' />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>

      </div>
      <div className="absolute top-[150px]  -left-[325px] rotate-180 scale-x-[-1]">
        <img src={halflogo} alt="not found" className="h-[120px] opacity-10 " />
      </div>
    </div>
  )
}

export default FormCard







