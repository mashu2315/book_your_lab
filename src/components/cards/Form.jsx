// import React from 'react'
// import Heart_rate from "../../assets/Heart_rate.png"
// const Disease = [
//     {
//         id: 1,
//         title: "Chest Pain"
//     },
//     {
//         id: 2,
//         title: "Dizziness"
//     },
//     {
//         id: 3,
//         title: "Shortness Of Breath"
//     },
//     {
//         id: 4,
//         title: "Fatigue"
//     },
//     {
//         id: 5,
//         title: "Pressure"
//     },
// ]

// const PreventiveTests = [
//     {
//         id: 1,
//         image: Heart_rate,
//         title: "Test One"
//     },
//     {
//         id: 2,
//         image: Heart_rate,
//         title: "Test One"
//     },
//     {
//         id: 3,
//         image: Heart_rate,
//         title: "Test One"
//     },
//     {
//         id: 4,
//         image: Heart_rate,
//         title: "Test One"
//     },
    
// ]

// const Form = () => {
//     return (
//         <div className='border-[3px] border-[#097C9A] w-[400px] h-[450px] rounded-xl font-poppins overflow-y-clip'>
//             <div className='flex text-[#6F8A9299] p-2 justify-between'>
//                 <div className='w-1/2 p-2' >
//                     <select name="gender" id="gender" className="bg-gray-50 border shadow-md  border-gray-300 text-[#6F8A9299] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                     </select>
//                 </div>
//                 <div className='w-1/2 p-2' ><select name="age" id="age" className="bg-gray-50 border shadow-md  border-gray-300 text-[#6F8A9299] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
//                     <option value="below 20 year">Below 20 Years</option>
//                     <option value="below 30 year">Below 30 Years</option>
//                     <option value="below 40 year">Below 40 Years</option>
//                     <option value="below 50 year">Below 50 Years</option>
//                     <option value="below 60 year">Below 60 Years</option>
//                     <option value="above 60 year">Above 60 Years</option>

//                 </select>
//                 </div>
//             </div>
//             <div className='mx-4 mb-3 py-[0.5px] px-4 bg-[#B7B7B7]'></div>
//             <div className='mx-4'>
//                 <p className='font-bold text-[#434343] pb-2 text-center'>Commonly faced issues related Heart</p>
//                 <div className='gap-2'>
//                     {
//                         Disease.map((event) => {
//                             return (
//                                 <button key={event.id} className='text-[#097C9A] border-[1px] flex-wrap bg-[#00DBA11A] py-1 px-2 mr-2 my-1
//                             border-[#00DBA1] rounded-lg'>
//                                     {event.title}
//                                 </button>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//             <div className='mx-4 my-3 py-[0.5px] px-4 bg-[#B7B7B7] '></div>

//             <div className='mx-4 '>
//                 <p className='font-bold text-[#434343] pb-2 text-center'>Suggested Preventive health profile</p>
//               <div className='gap-2 border shadow-md p-2 overflow-y-auto h-[150px] custom-scrollbar'>


//                     {
//                         PreventiveTests.map((event) => {
//                             return (
//                                <div>
//                                  <div key={event.id} className='flex gap-4  items-center justify-between'>
//                                     <div className='flex gap-4 items-center' ><img src={event.image} alt="not found" className='h-[40px]'/>
//                                     <h1 className='text-[#434343] font-bold text-sm'>{event.title}</h1></div>
//                                     <button className="flex gap-2 bg-[#097C9A] text-white border-0 rounded-br-xl rounded-tl-xl py-[6px] mr-2 px-[10px] text-[10px] font-bold ">
//                                         Know More
//                                     </button>
                                    
//                                 </div>
//                                 <div className='mx-2 my-[6px] py-[0.25px] px-4 bg-[#B7B7B7] opacity-60 '></div>
//                                </div>
//                             )
//                         })
//                     }
                    
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Form

import React from 'react'
import Heart_rate from "../../assets/Heart_rate.png"

// Array of common heart-related issues
const Disease = [
    {
        id: 1,
        title: "Chest Pain"
    },
    {
        id: 2,
        title: "Dizziness"
    },
    {
        id: 3,
        title: "Shortness Of Breath"
    },
    {
        id: 4,
        title: "Fatigue"
    },
    {
        id: 5,
        title: "Pressure"
    },
]

// Array of suggested preventive tests
const PreventiveTests = [
    {
        id: 1,
        image: Heart_rate,
        title: "Test One"
    },
    {
        id: 2,
        image: Heart_rate,
        title: "Test One"
    },
    {
        id: 3,
        image: Heart_rate,
        title: "Test One"
    },
    {
        id: 4,
        image: Heart_rate,
        title: "Test One"
    },
]

const Form = () => {
    return (
        // Main container with responsive width
        <div className='border-[3px] border-[#097C9A]  max-w-[400px] h-[450px] rounded-xl font-poppins overflow-y-clip mx-auto'>
            {/* Gender and Age selection section */}
            <div className='flex flex-col md:flex-row text-[#6F8A9299] p-2 justify-between'>
                <div className=' md:w-1/2 p-2'>
                    <select name="gender" id="gender" className="bg-gray-50 border shadow-md border-gray-300 text-[#6F8A9299] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className=' md:w-1/2 p-2'>
                    <select name="age" id="age" className="bg-gray-50 border shadow-md border-gray-300 text-[#6F8A9299] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="below 20 year">Below 20 Years</option>
                        <option value="below 30 year">Below 30 Years</option>
                        <option value="below 40 year">Below 40 Years</option>
                        <option value="below 50 year">Below 50 Years</option>
                        <option value="below 60 year">Below 60 Years</option>
                        <option value="above 60 year">Above 60 Years</option>
                    </select>
                </div>
            </div>
            {/* Divider */}
            <div className='mx-4 mb-3 py-[0.5px] px-4 bg-[#B7B7B7]'></div>
            {/* Common heart issues section */}
            <div className='mx-4'>
                <p className='font-bold text-[#434343] pb-2 text-center'>Commonly faced issues related Heart</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        Disease.map((event) => {
                            return (
                                <button key={event.id} className='text-[#097C9A] border-[1px] bg-[#00DBA11A] py-1 px-2 my-1 border-[#00DBA1] rounded-lg'>
                                    {event.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            {/* Divider */}
            <div className='mx-4 my-3 py-[0.5px] px-4 bg-[#B7B7B7]'></div>
            {/* Preventive health tests section */}
            <div className='mx-4'>
                <p className='font-bold text-[#434343] pb-2 text-center'>Suggested Preventive health profile</p>
                <div className='flex flex-col gap-2 border shadow-md p-2 overflow-y-auto h-[150px] custom-scrollbar'>
                    {
                        PreventiveTests.map((event) => {
                            return (
                                <div key={event.id}>
                                    <div className='flex gap-4 items-center justify-between'>
                                        <div className='flex gap-4 items-center'>
                                            <img src={event.image} alt="not found" className='h-[40px]'/>
                                            <h1 className='text-[#434343] font-bold text-sm'>{event.title}</h1>
                                        </div>
                                        <button className="bg-[#097C9A] text-white border-0 rounded-br-xl rounded-tl-xl py-[6px] px-[10px] sm:px-[8px] text-[10px] font-bold">
                                            Know More
                                        </button>
                                    </div>
                                    <div className='mx-2 my-[6px] py-[0.25px] px-4 bg-[#B7B7B7] opacity-60'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Form