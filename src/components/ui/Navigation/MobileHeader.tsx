import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  /* on scroll make it sticky on scroll stop make it not sticky */
  const checkScrollTop = () => {
    if (!isMenuOpen) {
      if (window.pageYOffset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <header
      id="header_mobile"
      className={`px-2 ${isSticky ? 'sticky top-0' : 'fixed top-12'} z-100 py-1.5 flex flex-col md:hidden items-start border border-transparent rounded-[30px] transition-all duration-700 ease-in-out ${
        isMenuOpen ? "bg-black" : "bg-transparent border-[#2D2D2D]"
      }`}
    >
      <div className={` py-3 px-4 backdrop-blur-[24px] border border-[#2D2D2D] rounded-[30px] flex items-center justify-between w-[22.5rem] max-w-[100%] transition-all duration-500 ease-in-out ${isSticky ? 'bg-black' : 'bg-black/40'}`}>
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
                strokeWidth="2.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <button
            className="flex  items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className={`transition-all duration-700 ease-in-out ${
                isMenuOpen ? "hidden opacity-0" : "block opacity-100"
              }`}
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
            {/* Close icon */}
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className={`transition-all duration-700 ease-in-out ${
                isMenuOpen ? "block opacity-100" : "hidden opacity-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ic:round-close">
                <path
                  id="Vector"
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
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
