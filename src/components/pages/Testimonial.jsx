
import React from "react";
import Slider from "react-slick";
import bgImage from "../../assets/testimonialbg.png";
import mukkaMalar from "../../assets/mukkaMalar.png";
import Headline from "../cards/Headline";
import halflogo from "../../assets/halflogo.png";
import curve from "../../assets/curve.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text:
      "In our long association with Novalab, the attribute we admire most is their passion for excellence. This passion is exemplified in a unique focus on quality, patient convenience and comfort.",
    name: "Jennifer Lee",
    role: "First Time Patient",
  },
  {
    text:
      "The care and attention I received were top-notch. From the moment I entered until I left, everything was seamless and comforting.",
    name: "Rahul Mehra",
    role: "Returning Patient",
  },
  {
    text:
      "Their tests are reliable and quick. I appreciated the professionalism and how informed the staff were throughout my visit.",
    name: "Ananya Singh",
    role: "Wellness Patient",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: true,
};

const Testimonial = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center bg-no-repeat w-full transition-all duration-1000 ease-in-out"
    >
      {/* white curve */}
      <div className="relative scale-x-[-1]">
        <img
          src={curve}
          alt="curve"
          className="absolute top-0 left-0 w-full object-cover animate-slideDown"
        />
      </div>

      {/* main content */}
      <div className="relative z-10  hover:cursor-pointer">
        <div className="relative bg-white bg-opacity-60 w-full h-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="scale-105 animate-fadeInUp">
            <Headline heading={"Testimonials"} text={"What Our Patients Says"} />
          </div>

          <div className="max-w-2xl w-full text-center font-poppins px-4 mt-12 animate-fadeInSlow">
            <Slider {...sliderSettings} className="custom-dots">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <p className="text-gray-700 leading-relaxed text-md sm:text-lg transition-all duration-500">
                    “{testimonial.text}”
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* logo image */}
        <div className="absolute top-0 right-4 sm:right-8 md:right-12 lg:right-[30px] animate-fadeIn delay-500">
          <img src={halflogo} alt="not found" className="h-[100px] md:h-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
