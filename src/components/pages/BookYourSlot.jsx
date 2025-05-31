// import React from 'react'
// import Headline from "../cards/Headline"
// const BookYourSlot = () => {
//   return (
//     <div className='py-[90px] flex flex-col items-center justify-center scale-125 '>
//         <div>
//             <Headline heading={"Book Now"} text={"Testing by Our Expert Lab Scientists"} />
            
//         </div>
//         <p className='text-[#434343] text-center'>Bring to the table win-win survival strategies to ensure proactive domination and at the <br /> end of the day.</p>
            
//         <button className=" bg-[#097C9A] my-6 text-white border-0 rounded-br-xl rounded-tl-xl px-6 py-[6px] text-[16px] font-bold">
//                         Book Now
//     </button>
//     </div>
//   )
// }

// export default BookYourSlot

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

      <button className="bg-[#097C9A] mt-6 text-white border-0 rounded-br-xl rounded-tl-xl px-6 py-[8px] text-[14px] sm:text-[16px] font-bold transition-transform hover:scale-105 hover:bg-[#0a92b8] animate-fadeInUp delay-300">
        Book Now
      </button>
    </div>
  )
}

export default BookYourSlot
