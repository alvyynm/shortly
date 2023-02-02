import React from 'react';

import logo from '../assets/logo-white.svg';
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer className="w-full py-20 text-grayish-violet bg-dark-violet-deep">
      <div className="px-4 py-4 lg:px-16">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center grid grid-cols-1 justify-items-center lg:justify-items-start md:grid-cols-4 lg:grid-cols-6">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <img src={logo} alt="shortly white logo" />
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-white mb-3">Features</h3>
              <ul className="flex flex-col gap-3">
                <li className=" hover:text-cyan">
                  <a href="#">Link Shortening</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Branded Links</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-white mb-3">Resources</h3>
              <ul className="flex flex-col gap-3">
                <li className=" hover:text-cyan">
                  <a href="#">Blog</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Developers</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-white mb-3">Company</h3>
              <ul className="flex flex-col gap-3">
                <li className=" hover:text-cyan">
                  <a href="#">About</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Our Team</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Careers</a>
                </li>
                <li className=" hover:text-cyan">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:m-0">
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <a href="#">
                    <img src={facebookIcon} alt="facebook logo in white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitterIcon} alt="twitter icon white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={pinterestIcon} alt="pinterest logo icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagramIcon} alt="instagram logo icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
