import React from 'react'
const Headline = ({heading,text}) => {
  return (
    <div className='flex flex-col items-center font-poppins justify-center'>
            <p className='font-medium'>{heading}</p>
            <div className='bg-[#00DBA1] h-[2px] w-10'></div>
            <p className='font-bold text-[#097C9A] tracking-[4%] mt-1'>{text}</p>
           
        </div>
  )
}

export default Headline