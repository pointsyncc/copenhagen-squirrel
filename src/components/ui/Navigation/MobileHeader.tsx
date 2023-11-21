import { useState } from "react";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header_mobile"
      className="px-5 absolute top-2 left-0 right-0 py-3 mx-2 flex flex-col md:hidden items-start bg-black/50 backdrop-blur-xl border border-[#2D2D2D] rounded-[30px]"
    >
      <div className="flex items-center justify-between w-full">
        <img
          src="/alfa_film_logo.png"
          alt="Alfa Film logo"
          className="max-w-[100px] md:max-w-[120px] 2xl:max-w-[160px]"
        />
        <nav className="flex items-center gap-3.5 justify-between">
          <a
            href="#"
            className="text-black flex items-center gap-4 justify-center text-sm font-medium bg-white rounded-psc px-[15px] py-[8px]"
          >
            Rezerviraj{" "}
            <svg
              width="12"
              height="11"
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
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="mt-2 flex flex-col gap-4 py-4 border-[#2D2D2D] border-t-[1px]  w-full">
            <li>
              <a
                href="#"
                className="text-black text-sm font-medium bg-[#DEDEDE] rounded-[18px] px-[15px] py-[8px]"
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
          </ul>
        </div>
    </header>
  );
};
