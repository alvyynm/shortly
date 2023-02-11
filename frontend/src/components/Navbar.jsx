import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  // hide or reveal menu on mobile
  function handleHamburger(e) {
    setIsActive(!isActive);
  }

  // close mobile menu by clicking anywhere
  const ref = useOnclickOutside(() => {
    setIsActive(false);
  });

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="w-full px-4 py-4 lg:px-16 text-grayish-violet relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-5">
            <div>
              <a href="/">
                <img src={logo} alt="company logo" />
              </a>
            </div>
            <div className="items-center hidden md:inline-block">
              <ul className="flex items-center gap-4">
                <li className="hover:text-dark-violet">
                  <a href="#">Features</a>
                </li>
                <li className="hover:text-dark-violet">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover:text-dark-violet">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:inline-block">
            <div className="flex gap-5">
              <button className="hover:text-dark-violet">Login</button>
              <button className="text-white bg-cyan px-3 py-1 rounded-2xl hover:opacity-70">
                Sign Up
              </button>
            </div>
          </div>
          <div ref={ref} className="md:hidden">
            <img
              src={hamburger}
              alt="hamburger menu"
              className="w-8 text-grayish-violet"
              onClick={handleHamburger}
            />
          </div>
        </div>
        <div
          className={` ${
            isActive ? 'block' : 'hidden'
          } text-white font-bold text-center px-6 py-8 rounded-xl block md:hidden bg-dark-violet fixed top-16 left-4 right-4 z-20`}
        >
          <ul onClick={closeMenu} className="flex flex-col gap-8">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li className="border-b border-grayish-violet pb-8">
              <a href="#">Resources</a>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button className="text-white w-full bg-cyan px-3 py-2 rounded-3xl hover:opacity-70">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
