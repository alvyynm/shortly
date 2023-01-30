import React from 'react';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

function name(params) {}

function Navbar() {
  return (
    <nav className="w-full px-4 py-4 text-grayish-violet">
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
        <div className="md:hidden">
          <img
            src={hamburger}
            alt="hamburger menu"
            className="w-8 text-grayish-violet"
          />
        </div>
      </div>
      <div className="text-white font-bold text-center p-6 mt-4 rounded-md block md:hidden w-full bg-dark-violet">
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li className="border-b border-grayish-violet pb-4">
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
    </nav>
  );
}

export default Navbar;
