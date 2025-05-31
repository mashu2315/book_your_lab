
import React from 'react'
import testTube from "../../assets/testTube.png"

const test = [
  {
    id: 1,
    image: testTube,
    title: "Tests Booked",
    testNo: 500,
  },
  {
    id: 2,
    image: testTube,
    title: "Tests Booked",
    testNo: 500,
  },
  {
    id: 3,
    image: testTube,
    title: "Tests Booked",
    testNo: 500,
  },
];

const Tests = () => {
  return (
    <div className="flex flex-wrap justify-center px-4 py-12 gap-6 animate-fadeInSlow">
      {test.map((event) => (
        <div
          className="flex items-center space-x-4 transition-transform duration-500 hover:scale-105 animate-fadeInUp"
          key={event.id}
        >
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center rounded-full h-[60px] w-[60px]">
            <img src={event.image} alt="Not Found" className="h-[40px]" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[#097C9A] font-bold text-lg">{event.testNo}+</h1>
            <p className="text-[#097C9A] font-semibold text-sm">{event.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tests;
