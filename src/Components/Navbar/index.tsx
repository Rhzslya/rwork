import React, { useEffect, useState } from "react";
import RandomRunningDot from "../RunningDot";
import { navSections } from "../../utils/navSections";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import HamburgerMenu from "../HamburgerMenu";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isBurgerOpen]);

  const handleBurgerClick = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <header
      className={`header fixed top-0 w-full flex justify-center px-6 bg-transparent backdrop-blur-sm z-50`}
    >
      <RandomRunningDot />
      <nav className="w-[1600px] flex items-center justify-between text-base text-gray-400 font-semi-bold h-14">
        <div className="image-box my-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <img
              src="/images/test-logo.png"
              alt="Logo"
              className="w-[47px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              SocialVit
            </span>
          </a>
        </div>

        <div className="sections_link m-auto">
          <div className="hidden lg:flex gap-10">
            {navSections?.map((item, index) => {
              const linkPath = `/${item}`;
              return (
                <a
                  href={linkPath}
                  key={index}
                  className="relative group hover:text-white duration-300 text-base font-medium"
                >
                  {capitalizeFirst(item)}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              );
            })}
          </div>
        </div>
        <div
          className={`navbar-mobile lg:hidden fixed top-0 mt-[63px] background-main left-0 w-full h-screen transform transition-transform duration-300 ${
            isBurgerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-auto flex flex-col gap-4 p-6">
            {navSections?.map((item, index) => {
              const linkPath = `/${item}`;
              return (
                <a
                  href={linkPath}
                  key={index}
                  className="relative group hover:text-white duration-300 text-base font-medium"
                >
                  {capitalizeFirst(item)}
                </a>
              );
            })}
          </div>
        </div>

        {
          <HamburgerMenu
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />
        }

        <div className="auth-button flex gap-4">
          <button className="px-3 py-1 rounded-sm bg-white text-black text-sm font-semibold">
            <a href="">Login</a>
          </button>
          <button className="px-3 py-1 rounded sm text-white text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <a href="">Register</a>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
