import React from 'react';

import heroimg from '../assets/illustration-working.svg';
import brandrecog from '../assets/icon-brand-recognition.svg';
import detailrec from '../assets/icon-detailed-records.svg';
import fullycus from '../assets/icon-fully-customizable.svg';

function Landing() {
  return (
    <section className="w-full mt-5 text-grayish-violet relative">
      {/* // HERO SECTION */}
      <div className="px-4 py-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44">
            <div className="order-last lg:order-first flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <h1 className="text-dark-violet-deep text-4xl md:text-6xl  font-bold">
                More than just <span className="block">shorter links</span>{' '}
              </h1>
              <p className="mt-3">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
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
        </div>
      </div>

      {/* STATS SECTION */}

      <div className="w-full py-20 bg-[#eff0f7]">
        <div className="px-4 py-4 lg:px-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center md:w-2/4 lg:w-2/5 mx-auto mb-10">
              <h2 className="text-dark-violet-deep font-bold text-2xl mb-4">
                Advanced Statistics
              </h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16 pt-10 md:pt-0">
              <div className="md:w-96 text-center lg:text-left px-7 bg-white py-5 rounded-lg z-30">
                <div className="mb-7 -mt-14 bg-dark-violet w-14 h-14 rounded-full mx-auto lg:ml-4 flex items-center justify-center">
                  <img src={brandrecog} alt="" className="w-8" />
                </div>
                <h3 className="text-dark-violet-deep font-bold text-lg">
                  Brand Recognition
                </h3>
                <p className="py-4">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="md:w-96 text-center lg:text-left px-7 bg-white py-5 rounded-lg z-30 lg:mt-14">
                <div className="mb-7 -mt-14 bg-dark-violet w-14 h-14 rounded-full mx-auto lg:ml-4 flex items-center justify-center">
                  <img src={detailrec} alt="" className="w-8" />
                </div>

                <div>
                  <h3 className="text-dark-violet-deep font-bold text-lg">
                    Detailed Records
                  </h3>
                </div>
                <p className="py-4">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="md:w-96 text-center lg:text-left px-7 bg-white py-5 rounded-lg z-30 lg:mt-28">
                <div className="mb-7 -mt-14 bg-dark-violet w-14 h-14 rounded-full mx-auto lg:ml-4 flex items-center justify-center">
                  <img src={fullycus} alt="" className="w-8" />
                </div>
                <h3 className="text-dark-violet-deep font-bold text-lg">
                  Fully Customizable
                </h3>
                <p className="py-4">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
            {/* Timeline */}
            <div className="bg-red border-4 border-cyan absolute rotate-90 -left-12 -right-12 top-[55%] lg:top-[60%] md:left-5 md:right-5 lg:transform-none lg:right-60 lg:left-60 z-10"></div>
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
