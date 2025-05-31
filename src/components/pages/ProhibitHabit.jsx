import React from 'react'
import Headline from '../cards/Headline'
import habit from "../../assets/prohibit/habit.png"
import ig1 from "../../assets/prohibit/ig1.png"
import ig2 from "../../assets/prohibit/ig2.png"
import ig3 from "../../assets/prohibit/ig3.png"
import ig4 from "../../assets/prohibit/ig4.png"
import ig5 from "../../assets/prohibit/ig5.png"
import ig6 from "../../assets/prohibit/ig6.png"
import ig7 from "../../assets/prohibit/ig7.png"
import ig8 from "../../assets/prohibit/ig8.png"
import ig9 from "../../assets/prohibit/ig9.png"
import ig10 from "../../assets/prohibit/ig10.png"
import ig11 from "../../assets/prohibit/ig11.png"
import ig12 from "../../assets/prohibit/ig12.png"

const HabitData = [
    {
        id: 1,
        image: ig1,
        title: "Alcholism",
    },
    {
        id: 2,
        image: ig2,
        title: "Stress",
    },
    {
        id: 3,
        image: ig3,
        title: "No Sleep",
    },
    {
        id: 4,
        image: ig4,
        title: "Zero Exercise",
    },
    {
        id: 5,
        image: ig5,
        title: "Junk Food",
    },
    {
        id: 6,
        image: ig6,
        title: "Smoking",
    },
    {
        id: 7,
        image: ig7,
        title: "Poor Nutrition",
    },
    {
        id: 8,
        image: ig8,
        title: "Poor Eating",
    },
    {
        id: 9,
        image: ig9,
        title: "Low Iron Diet",
    },
    {
        id: 10,
        image: ig10,
        title: "Anger",
    },
    {
        id: 11,
        image: ig11,
        title: "Heart Burn",
    },
    {
        id: 12,
        image: ig12,
        title: "Medicine Overuse",
    },
]

const ProhibitHabit = () => {
    return (
        <div
            style={{ backgroundImage: `url(${habit})` }}
            className=" flex flex-col  items-center bg-cover  bg-center bg-no-repeat lg:h-[600px] w-full"
        >
            <div className="custom-headline mt-[80px] hidden md:block scale-95 ">
                <Headline text="Browse Test By Habit" heading="Our Tests" />
            </div>
            <div className=" mt-[80px] block md:hidden scale-95 ">
                <Headline text="Browse Test By Habit" heading="Our Tests" />
            </div>
            <div>
                <div className='flex pl-5 pt-12 flex-wrap gap-4 '>
                    {
                        HabitData.map((event) => {
                            return (
                                <div key={event.id} className='flex h-[160px] hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-[#097C9A] w-[185px] rounded-br-lg rounded-tl-lg items-center justify-center bg-white  flex-col '>
                                    <img src={event.image} alt="Not Found" className='h-[55px] w-[40px]' />
                                    <h1 className='text-[#097C9A] text-sm pt-2 font-semibold'>{event.title}</h1>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className=" bg-[#00DBA1] my-6  text-white border-0 rounded-br-xl rounded-tl-xl px-6 py-[6px] text-[12px] font-bold hover:scale-105 transition-all duration-200 hover:border-teal-300 hover:border-[0.5px] hover:bg-[white] hover:text-[#00DBA1]">
                View Details
            </button>
        </div>

    )
}

export default ProhibitHabit

