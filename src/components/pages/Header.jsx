import { IoMdMenu } from "react-icons/io";
import NavData from '../../data/data';
import whatsapp from '../../assets/whatsapp.png';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleMoreToggle = () => setMoreOpen(!moreOpen);

  const navInitial = NavData.slice(0, NavData.length - 4);
  const navMore = NavData.slice(-4);

  return (
    <div className="mb-2 text-sm z-50 relative">
      <div className='w-11/12 mx-auto text-[#097C9A] flex gap-5 pt-2 items-start relative z-50'>
        {/* Navigation Links */}
        <div className="flex border-[2px] border-[#097C9A] rounded-br-xl rounded-tl-xl bg-[#097C9A] items-center relative z-50">
          <div className="bg-white rounded-br-xl rounded-tl-xl p-1 transition-all duration-200 hover:scale-105 cursor-pointer" onClick={handleToggle}>
            <IoMdMenu fontSize={30} className="text-[#097C9A]" />
          </div>

          {/* Large devices - Full menu */}
          <ul className="hidden lg:flex text-white">
            {NavData.map((event) => (
              <li key={event.id}>
                <button
                  onClick={() => setActive(event.id)}
                  className={`mx-2 py-2 px-3 ${active === event.id ? "bg-white text-[#097C9A] border-[0px] border-[#097C9A] rounded-br-xl rounded-tl-xl" : ""} transition-all duration-200 hover:scale-105`}
                >
                  {event.value}
                </button>
              </li>
            ))}
          </ul>

          {/* Medium devices - Partial + More Services */}
          <ul className="hidden md:flex lg:hidden text-white">
            {navInitial.map((event) => (
              <li key={event.id}>
                <button
                  onClick={() => setActive(event.id)}
                  className={`mx-2 py-2 px-3 ${active === event.id ? "bg-white text-[#097C9A] border-[0px] border-[#097C9A] rounded-br-xl rounded-tl-xl" : ""} transition-all duration-200 hover:scale-105`}
                >
                  {event.value}
                </button>
              </li>
            ))}
            <li className="relative z-50">
              <button onClick={handleMoreToggle} className="mx-2 py-2 px-3 transition-all duration-200 hover:scale-105">More Services</button>
              {moreOpen && (
                <ul className="absolute left-0 bg-white text-[#097C9A] shadow-md rounded-md mt-2 z-50">
                  {navMore.map((event) => (
                    <li key={event.id}>
                      <button
                        onClick={() => setActive(event.id)}
                        className="block px-4 py-2 hover:bg-[#097C9A] hover:text-white w-full text-left"
                      >
                        {event.value}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Small devices - Menu dropdown */}
          {menuOpen && (
            <ul className="absolute top-full left-0 w-[150px] bg-white text-[#097C9A] shadow-md mt-2 z-50 md:hidden">
              {NavData.map((event) => (
                <li key={event.id}>
                  <button
                    onClick={() => setActive(event.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-[#097C9A] hover:text-white"
                  >
                    {event.value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Message for small devices */}
        {/* <div className="md:hidden text-center text-[#097C9A] font-bold pt-2 text-xs flex-grow">Sarve Bhavantu Sukhinahh</div> */}

        {/* WhatsApp and Contact - only for large devices */}
        <div className="hidden lg:flex items-center border-[2px] border-[#097C9A] rounded-br-xl rounded-tl-xl bg-[#097C9A] ml-auto z-50 hover:scale-105 transition-all duration-200">
          <img src={whatsapp} alt="WhatsApp Logo" className="p-2 h-9 bg-white rounded-br-xl rounded-tl-xl" />
          <div className="flex items-center gap-2 px-2 text-white  ">
            <TfiHeadphoneAlt fontSize={15} />
            <p>(+91) 9090 666 333</p>
          </div>
        </div>

        {/* WhatsApp icon for md and sm */}
        <div className="md:flex lg:hidden ml-auto z-50">
          <a href="https://wa.me/919090666333" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp Logo" className="p-2 h-9 bg-white rounded-br-xl rounded-tl-xl border-2 border-[#097C9A]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;




