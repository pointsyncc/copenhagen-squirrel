import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header_mobile"
      className={`px-2 absolute z-100 top-0 left-0 right-0 py-3 flex flex-col md:hidden items-start border border-transparent rounded-[30px] transition-all duration-700 ease-in-out ${isMenuOpen ? "bg-black" : "bg-transparent border-[#2D2D2D]"}`}
    >
      <div className="bg-black/40 py-3 px-4 backdrop-blur-[24px] border border-[#2D2D2D] rounded-[30px] flex items-center justify-between w-full">
        <img
          src="/alfa_film_logo.png"
          alt="Alfa Film logo"
          className="max-w-[80px] md:max-w-[120px] 2xl:max-w-[160px]"
        />
        <nav className="flex items-center gap-3.5 justify-between">
          <a
            href="#"
            className="text-black flex items-center gap-3 justify-center text-xs font-medium bg-white rounded-psc px-[12px] py-[7px]"
          >
            Rezerviraj{" "}
            <svg
              width="11"
              height="10"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.5L12 1.5M12 1.5V11.1M12 1.5H2.4"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ic:round-menu">
                <path
                  id="Vector"
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
        <div
          className={`overflow-hidden mx-4 transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="mt-2 flex flex-col gap-4 py-4 w-full">
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium border-2 border-white rounded-[18px] px-[15px] py-[8px]"
              >
                Početna
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap"
              >
                Studio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap"
              >
                O nama
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap"
              >
                Naš tim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap"
              >
                Kontakt
              </a>
            </li>
          {/* Social Media */}
          <div className="flex items-center gap-2 px-[15px] py-[8px] mt-2">
            <FaInstagram className="text-white text-2xl" />
            <FaFacebook className="text-white text-2xl ml-4" />
          </div>
          </ul>
        </div>
    </header>
  );
};
