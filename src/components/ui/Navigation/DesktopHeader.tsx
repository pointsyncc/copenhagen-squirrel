import { useEffect, useState } from "react";

export const DesktopHeader = () => {
  /* on scroll move nav to the center of the screen and top-6 */
  const [isSticky, setIsSticky] = useState(false);

  /* on scroll make it sticky on scroll stop make it not sticky */
  const checkScrollTop = () => {
    if (window.pageYOffset > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <header className="hidden px-5 md:px-10 py-6 md:flex items-center justify-between gap-4">
        <img
          src="/alfa_film_logo.png"
          alt="Alfa Film logo"
          className="max-w-[100px] md:max-w-[120px] 2xl:max-w-[160px]"
        />
        <nav
          className={`flex items-center gap-3.5 justify-between transition-all duration-500 ease-in-out`}
        >
          <ul
            id="menu_list"
            className={`bg-[#EFFAFF]/60 border border-transparent backdrop-blur-lg rounded-psc px-3.5 py-2 flex items-center gap-2 justify-between transition-all duration-500 ease-in-out ${
              isSticky
                ? "fixed top-3 left-1/2 translate-x-[-50%] bg-black/50 text-white border border-gray-400/20"
                : ""
            }`}
          >
            <li>
              <a
                href="#"
                className={`text-black text-sm font-medium bg-[#DEDEDE] rounded-[18px] px-[15px] py-[8px] ${
                  isSticky ? "bg-white/20 text-white" : ""
                }`}
              >
                Početna
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap ${
                  isSticky ? "hover:bg-[#9c9990]/40 text-white" : ""
                }`}
              >
                Studio
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap ${
                  isSticky ? "hover:bg-[#9c9990]/40 text-white" : ""
                }`}
              >
                O nama
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap ${
                  isSticky ? "hover:bg-[#9c9990]/40 text-white" : ""
                }`}
              >
                Naš tim
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black text-sm font-medium bg-transparent transition-colors duration-300 ease-in-out hover:bg-white/30 rounded-[18px] px-[15px] py-[8px] whitespace-nowrap ${
                  isSticky ? "hover:bg-[#9c9990]/40 text-white" : ""
                }`}
              >
                Kontakt
              </a>
            </li>
            <li
              className={`h-6 bg-[#767676] w-[3px] rounded-full ${
                isSticky ? "bg-white/20" : ""
              }`}
            ></li>
            <li>
              <a
                href="#"
                className={`flex items-center gap-3 justify-center text-sm font-medium bg-black rounded-psc px-[15px] py-[8px] ${
                  isSticky ? "bg-white/20 text-white" : "text-white "
                }`}
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
                    stroke={isSticky ? "white" : "white"}
                    stroke-width="2.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <button className="flex items-center gap-4 px-[20px] py-[8px] transition-colors duration-500 ease-in-out bg-transparent rounded-psc hover:bg-[#36433F]/60 border-2 border-transparent hover:border-[#4C5A56] hover:backdrop-blur-lg">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ion:language">
                <path
                  id="Vector"
                  d="M28.0271 25.9062L22.7537 13.1328C22.6563 12.8969 22.4911 12.6952 22.279 12.5533C22.0669 12.4114 21.8174 12.3357 21.5622 12.3357C21.307 12.3357 21.0575 12.4114 20.8454 12.5533C20.6333 12.6952 20.4681 12.8969 20.3707 13.1328L15.0973 25.9062C15.0317 26.0629 14.9977 26.231 14.9973 26.4008C14.9969 26.5706 15.03 26.7388 15.0948 26.8958C15.1596 27.0528 15.2547 27.1954 15.3748 27.3155C15.4949 27.4356 15.6375 27.5307 15.7944 27.5955C15.9514 27.6603 16.1196 27.6935 16.2895 27.6931C16.4593 27.6927 16.6273 27.6587 16.784 27.5932C16.9406 27.5276 17.0828 27.4317 17.2023 27.3111C17.3218 27.1904 17.4162 27.0473 17.4803 26.89L18.5543 24.2891H24.5701L25.6441 26.89C25.7415 27.126 25.9067 27.3278 26.1189 27.4698C26.3311 27.6118 26.5806 27.6875 26.8359 27.6875C27.0478 27.6874 27.2563 27.635 27.4431 27.5352C27.6299 27.4353 27.7891 27.2909 27.9069 27.1148C28.0246 26.9387 28.0971 26.7363 28.1179 26.5255C28.1388 26.3147 28.1074 26.102 28.0266 25.9062H28.0271ZM19.6189 21.7109L21.5625 17.0029L23.5061 21.7109H19.6189ZM15.6937 20.593C15.894 20.3163 15.9763 19.9715 15.9226 19.6343C15.8689 19.297 15.6835 18.9949 15.4072 18.7941C15.3955 18.7854 14.5283 18.142 13.2691 16.7592C15.5924 13.6139 16.9084 10.0355 17.4451 8.35156H19.3359C19.6778 8.35156 20.0057 8.21575 20.2474 7.974C20.4892 7.73226 20.625 7.40438 20.625 7.0625C20.625 6.72062 20.4892 6.39274 20.2474 6.151C20.0057 5.90925 19.6778 5.77344 19.3359 5.77344H12.5391V4.60156C12.5391 4.25968 12.4033 3.9318 12.1615 3.69006C11.9198 3.44831 11.5919 3.3125 11.25 3.3125C10.9081 3.3125 10.5802 3.44831 10.3385 3.69006C10.0967 3.9318 9.96094 4.25968 9.96094 4.60156V5.77344H3.16406C2.82218 5.77344 2.4943 5.90925 2.25256 6.151C2.01081 6.39274 1.875 6.72062 1.875 7.0625C1.875 7.40438 2.01081 7.73226 2.25256 7.974C2.4943 8.21575 2.82218 8.35156 3.16406 8.35156H14.7217C14.1639 9.93066 13.1367 12.4238 11.5699 14.7008C9.72949 12.2586 9.0457 10.6783 9.04043 10.6654C8.90569 10.3541 8.65364 10.1084 8.33892 9.98161C8.02421 9.85487 7.67222 9.85731 7.35929 9.9884C7.04637 10.1195 6.79774 10.3687 6.66734 10.6819C6.53693 10.9951 6.53526 11.3471 6.6627 11.6615C6.69668 11.7424 7.51523 13.6672 9.75996 16.5793C9.81387 16.649 9.86719 16.717 9.92051 16.785C7.62129 19.3836 5.36543 20.9955 4.42148 21.5158C4.12133 21.6795 3.8985 21.9558 3.80202 22.2838C3.70554 22.6118 3.74332 22.9647 3.90703 23.2648C4.07075 23.565 4.34699 23.7878 4.675 23.8843C5.003 23.9808 5.3559 23.943 5.65605 23.7793C5.78262 23.7102 8.50371 22.2037 11.6109 18.7643C12.9305 20.1752 13.8375 20.8408 13.892 20.8795C14.0291 20.9791 14.1845 21.0507 14.3493 21.0901C14.5141 21.1296 14.6851 21.1362 14.8524 21.1095C15.0197 21.0829 15.1802 21.0235 15.3246 20.9347C15.4689 20.846 15.5944 20.7297 15.6937 20.5924V20.593Z"
                  fill="#EFFAFF"
                ></path>
              </g>
            </svg>

            <span className="text-white text-sm font-medium">Hrvatski</span>
          </button>
        </nav>
      </header>
    </>
  );
};
