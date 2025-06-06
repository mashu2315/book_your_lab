import React from 'react'
import Headline from "../cards/Headline"

const BookYourSlot = () => {
  return (
    <div className="py-[90px] px-4 flex flex-col items-center justify-center animate-fadeInUp">
      <div className="scale-105 animate-fadeInUp delay-100">
        <Headline heading={"Book Now"} text={"Testing by Our Expert Lab Scientists"} />
      </div>

      <p className="text-[#434343] text-center mt-4 text-sm sm:text-base animate-fadeInUp delay-200">
        Bring to the table win-win survival strategies to ensure proactive domination and at the <br className="hidden sm:inline" /> end of the day.
      </p>

      <button className="bg-[#097C9A] mt-6 text-white border-0 rounded-br-xl rounded-tl-xl px-6 py-[8px] text-[14px] sm:text-[16px] font-bold transition-transform  hover:bg-[white] hover:text-[#097C9A] duration-200 hover:shadow-xl ">
        Book Now
      </button>
    </div>
  )
}

export default BookYourSlot
