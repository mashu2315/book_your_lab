import React, { useState } from 'react'
import Heart_rate from "../../assets/Heart_rate.png"

const Disease = [
    { id: 1, title: "Chest Pain" },
    { id: 2, title: "Dizziness" },
    { id: 3, title: "Shortness Of Breath" },
    { id: 4, title: "Fatigue" },
    { id: 5, title: "Pressure" },
]

const PreventiveTests = [
    { id: 1, image: Heart_rate, title: "Test One" },
    { id: 2, image: Heart_rate, title: "Test One" },
    { id: 3, image: Heart_rate, title: "Test One" },
    { id: 4, image: Heart_rate, title: "Test One" },
]

const Form = () => {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    return (
        <div className='border-[3px] border-[#097C9A]  max-w-[400px] h-[450px] rounded-xl font-poppins overflow-y-clip mx-auto'>
            <div className='flex flex-col md:flex-row text-[#6F8A9299] p-2 justify-between'>
                <div className=' md:w-1/2 p-2'>
                    <select
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className={`bg-gray-50 border shadow-md hover:scale-105 transition-all duration-200 hover:border-teal-300 border-gray-300 ${gender ? 'text-[#097C9A]' : 'text-[#6F8A9299]'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    >

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className=' md:w-1/2 p-2'>
                    <select
                        name="age"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className={`bg-gray-50 border shadow-md border-gray-300 ${age ? 'text-[#097C9A]' : 'text-[#6F8A9299]'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:scale-105 transition-all duration-200 hover:border-teal-300`}>
                        <option value="below 20 year">Below 20 Years</option>
                        <option value="below 30 year">Below 30 Years</option>
                        <option value="below 40 year">Below 40 Years</option>
                        <option value="below 50 year">Below 50 Years</option>
                        <option value="below 60 year">Below 60 Years</option>
                        <option value="above 60 year">Above 60 Years</option>
                    </select>
                </div>
            </div>
            <div className='mx-4 mb-3 py-[0.5px] px-4 bg-[#B7B7B7]'></div>
            {/* Common heart issues section */}
            <div className='mx-4'>
                <p className='font-bold text-[#434343] pb-2 text-center'>Commonly faced issues related Heart</p>       <div className='flex flex-wrap gap-2'>
                    {
                        Disease.map((event) => {
                            return (
                                <button key={event.id} className='text-[#097C9A] border-[1px] bg-[#00DBA11A] py-1 px-2 my-1 border-[#00DBA1] rounded-lg hover:scale-105 transition-all duration-200 hover:border-teal-300 hover:bg-[#097C9A] hover:text-[white]'>
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
                                            <img src={event.image} alt="not found" className='h-[40px]' />
                                            <h1 className='text-[#434343] font-bold text-sm'>{event.title}</h1>
                                        </div>
                                        <button className="bg-[#097C9A] text-white border-2 rounded-br-xl rounded-tl-xl py-[6px] px-[10px] sm:px-[8px] text-[10px] font-bold  transition-all duration-200 hover:border-teal-300 hover:border-2  hover:bg-[white] hover:text-[#097C9A]">
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
