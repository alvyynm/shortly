import React from 'react';

import heroimg from '../assets/illustration-working.svg';
import brandrecog from '../assets/icon-brand-recognition.svg';
import detailrec from '../assets/icon-detailed-records.svg';
import fullycus from '../assets/icon-fully-customizable.svg';

function Landing() {
  return (
    <section className="w-full px-4 lg:px-16 py-4 mt-5 text-grayish-violet relative">
      {/* // HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44">
        <div className="order-last lg:order-first flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h1 className="text-dark-violet-deep text-4xl md:text-6xl  font-bold">
            More than just <span className="block">shorter links</span>{' '}
          </h1>
          <p className="mt-3">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="text-white bg-cyan w-32 px-3 py-2 rounded-3xl hover:opacity-70 mt-6">
            Get Started
          </button>
        </div>
        <div className="-mr-32 md:-mr-80">
          <img
            src={heroimg}
            alt="illustration of person working on a computer"
          />
        </div>
      </div>

      {/* INPUT SECTION */}

      <div className="rounded-xl bg-shorten-mobilebg bg-dark-blue bg-blend-screen bg-right-top bg-no-repeat lg:bg-cover  lg:bg-shorten-desktopbg w-full h-40 lg:h-28 mt-10 flex justify-center items-center">
        <form
          action="/"
          className="w-full px-5 lg:px-10 flex flex-col items-center gap-4 lg:flex-row"
        >
          <label htmlFor="link" className="hidden">
            Link
          </label>
          <input
            type="text"
            name="link"
            id="link"
            required
            placeholder="Shorten a link here..."
            className="w-full lg:w-[80%] rounded-xl px-4 py-3"
          />
          <button
            type="submit"
            className="text-white font-bold bg-cyan w-full lg:w-[15%] px-4 py-3 rounded-xl hover:bg-[#9ee0e1]"
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* STATS SECTION */}

      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div>
          <div>
            <div>
              <img src={brandrecog} alt="" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click.Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <img src={detailrec} alt="" />
            <div>
              <h3>Detailed Records</h3>
            </div>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div>
            <div>
              <img src={fullycus} alt="" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      {/* CALLOUT SECTION */}

      <div>
        <div>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
