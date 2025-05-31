
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import halflogo from "../../assets/halflogo.png";
import cardimage from "../../assets/cardimage.jpg";
import black from "../../assets/black.png";

// Sample data
const checkups = [
    {
        id: 1,
        title: "Full Body Health Checkup",
        tests: "79 Tests",
        oldPrice: "₹ 31000/-",
        newPrice: "₹ 1300/-",
        image: cardimage,
    },
    {
        id: 2,
        title: "Full Body Health Checkup",
        tests: "79 Tests",
        oldPrice: "₹ 32000/-",
        newPrice: "₹ 1300/-",
        image: cardimage,
    },
    {
        id: 3,
        title: "Full Body Health Checkup",
        tests: "79 Tests",
        oldPrice: "₹ 33000/-",
        newPrice: "₹ 1300/-",
        image: cardimage,
    },
];

// Custom Next Arrow component
const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
               right-2 sm:right-4 md:right-[-40px] lg:right-[-60px] bg-white
               rounded-full shadow-lg p-2 hover:bg-[#097C9A]"
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

// Custom Prev Arrow component
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
               left-2 sm:left-4 md:left-[-40px] lg:left-[-60px] bg-white
               rounded-full shadow-lg p-2 hover:bg-[#097C9A]"
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

// Slider settings
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

const HealthCheckupSlider = () => {
    // check the current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);


    // Handle slide change to update currentSlide state
    const handleAfterChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        // Main slider container with background logo
        <div className="relative w-[400px] sm:w-auto">

            <div className="relative px-4 sm:px-6 md:px-10 w-full max-w-[1000px] mx-auto h-auto sm:h-[300px] my-10 ">
                {/* Slider component */}
                <Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
                    {checkups.map((item) => {
                        // Determine if this card is the middle one


                        const slidesToShow = window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
                        const middleIndex = currentSlide + Math.floor(slidesToShow / 2);
                        const isMiddle = item.id === checkups[middleIndex % checkups.length]?.id;
                        return (
                            <div
                                key={item.id} className={`px-3 relative  transition-all duration-500 ease-in-out ${isMiddle ? 'scale-110 transition-all duration-500' : 'scale-90'
                                    }`}>
                                <div className="rounded-br-xl rounded-tl-xl overflow-hidden shadow-md text-center relative">
                                    <div className={`${isMiddle ? 'bg-blur-sm' : ''
                                        }`}>
                                        <div className="flex justify-center">
                                            <div className={`relative w-full min-h-[250px] sm:h-64 ${isMiddle ? 'opacity-10' : ''
                                                }`}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover blur-xs"
                                                />
                                                <img
                                                    src={black}
                                                    alt={item.title}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className={`absolute top-16 ${isMiddle ? 'text-black' : 'text-white'}`}>
                                                <h3 className="font-bold text-2xl ">{item.title}</h3>
                                                <p className="text-sm text-[#00DBA1] font-semibold mt-1">
                                                    {item.tests}
                                                </p>
                                                <div className="my-2">
                                                    <p className="text-sm font-semibold  relative flex justify-center">
                                                        {item.oldPrice}
                                                        <span className="absolute left-100 top-1/2 w-[50px] h-[2px] bg-red-500"></span>
                                                    </p>
                                                    <p className="text-xl font-bold ">{item.newPrice}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`absolute top-9 -left-[34px] w-[140px] text-center -rotate-[45deg] text-white text-xs bg-[#097C9A] py-[0.125px]`}>
                                            60% Off
                                        </div>
                                    </div>
                                    <button className="bg-[#097C9A]  text-white text-sm font-medium w-full py-2 flex items-center justify-center gap-2 hover:bg-white hover:text-[#097C9A] transition-all duration-200">
                                        Add To Cart <FiShoppingCart />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            {/* background logo */}
            <div className="absolute top-[0px] -left-[130px] rotate-180">
                <img src={halflogo} alt="not found" className="h-[120px] opacity-10" />
            </div>
        </div>
    );
};

export default HealthCheckupSlider;

