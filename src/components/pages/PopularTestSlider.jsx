import React from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headline from "../cards/Headline"

import testCards from "../../data/testCards";

const NextArrow = ({ onClick }) => (
    <div
        className="absolute -right-[100px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 cursor-pointer hover:bg-[#097C9A]"
        onClick={onClick}
    >
        <svg
            className="w-4 h-4 text-[#097C9A] hover:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute -left-[100px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 cursor-pointer hover:bg-[#097C9A]"
        onClick={onClick}
    >
        <svg
            className="w-4 h-4 text-[#097C9A] hover:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    </div>
);


const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
        },
    ],
};

const PopularTestsSlider = ({ lowerlimit, upperlimit, heading, text }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <Headline heading={heading} text={text} />

            <Slider {...settings}>
                {testCards
                    .filter((test) => test.id <= upperlimit && test.id >= lowerlimit)
                    .map((test, idx) => (
                        <div key={idx} className="px-3 mt-[50px]">
                            <div className="rounded-bl-2xl rounded-tr-2xl h-[350px] relative overflow-hidden shadow-md group transition-all duration-500 ease-in-out hover:shadow-xl">
                                <img
                                    src={test.image}
                                    alt={test.title}
                                    className="absolute h-[230px] w-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                                />
                                <div className="p-5 bg-red-50 absolute top-[182px] text-start shadow-xl border-[0.5px] triangle-clip w-full transform transition-all duration-500 ease-in-out group-hover:-translate-y-2">
                                    <h3 className="font-semibold text-md text-[#434343]">{test.title}</h3>
                                    <p className="text-sm text-[#7B7B7B] mt-2">{test.text}</p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-[#00DBA1] text-xs font-medium hover:underline"
                                    >
                                        FIND OUT MORE <FaAngleRight className="inline ml-[1px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

            </Slider>
        </div>
    );
};



export default PopularTestsSlider;








