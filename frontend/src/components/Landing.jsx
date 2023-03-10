import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Links from './Links';

import heroimg from '../assets/illustration-working.svg';
import brandrecog from '../assets/icon-brand-recognition.svg';
import detailrec from '../assets/icon-detailed-records.svg';
import fullycus from '../assets/icon-fully-customizable.svg';

function Landing() {
  const [userUrl, setUserUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [successCopy, setSuccessCopy] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState(true);

  // toast message on valid url
  const notifySuccess = () =>
    toast.success('Great loading...', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  // toast message on invalid url
  const notifyError = () =>
    toast.error('Invalid URL', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmittedUrl(userUrl);

    //check if entered URL is valid
    function isValidURL(string) {
      var res = string.match(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
      );
      return res !== null;
    }

    // check if user has entered a url in form and send it to backend
    if (isValidURL(userUrl)) {
      notifySuccess();
      console.log(userUrl);
      try {
        const response = await fetch('http://localhost:8080/api.shortly/v1/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: userUrl }),
        });

        const data = await response.json();
        const shortUrlObj = {
          shortlink: data.result.full_short_link3,
          originalUrl: data.result.original_link,
        };
        setShortUrls([...shortUrls, shortUrlObj]);

        // store links in localStorage
        localStorage.setItem('shortUrls', JSON.stringify(shortUrls));

        if (data) {
          for (const url of shortUrls) {
            console.log(shortUrls);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      notifyError();
    }
  };

  //copy to clipboard
  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      console.log('Content copied to clipboard');
      setSuccessCopy(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  //copy button
  const handleClick = (event, key) => {
    let target = shortUrls.filter((item) => shortUrls.indexOf(item) === key);
    copyToClipboard(target[0].shortlink);
  };

  // revert Copy button to initial state after 1 second
  if (successCopy) {
    setTimeout(() => {
      setSuccessCopy(false);
    }, 1000);
  }

  // retrieve links stored in localStorage
  const localItems = JSON.parse(localStorage.getItem('shortUrls'));

  return (
    <section className="w-full mt-5 text-grayish-violet relative">
      {/* // HERO SECTION */}
      <div className="px-4 py-4 lg:px-16 mb-28 lg:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44">
            <div className="order-last lg:order-first flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <h1 className="text-dark-violet-deep text-4xl md:text-6xl  font-bold">
                More than just <span className="block">shorter links</span>{' '}
              </h1>
              <p className="mt-3">
                Build your brand???s recognition and get detailed insights on how
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
        </div>
      </div>
      <ToastContainer />

      {/* STATS SECTION */}

      <div className="w-full py-20 bg-[#eff0f7]">
        <div className="px-4 py-4 lg:px-16">
          <div className="max-w-7xl mx-auto relative">
            {/* INPUT SECTION */}

            <div className="rounded-xl bg-shorten-mobilebg bg-dark-blue bg-blend-screen bg-right-top bg-no-repeat lg:bg-cover  lg:bg-shorten-desktopbg w-full h-40 lg:h-28 -mt-44 lg:-mt-36 flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                method="post"
                className="w-full px-5 lg:px-10 flex flex-col items-center gap-6 lg:gap-4 lg:flex-row"
              >
                <div className="w-full items-center relative">
                  <label htmlFor="link" className="hidden">
                    Link
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="Shorten a link here..."
                    className={`w-full rounded-xl px-4 py-3 ring-1 focus:placeholder:text-gray focus:ring-2 focus:ring-cyan outline-none ${
                      submittedUrl
                        ? `ring-cyan`
                        : `ring-red placeholder:text-red`
                    }`}
                    value={userUrl}
                    onChange={(e) => setUserUrl(e.target.value)}
                  />
                  <p
                    className={` text-red text-sm italic absolute lg:mt-1 ${
                      submittedUrl ? `hidden` : `block`
                    }`}
                    id="errorMsg"
                  >
                    Please add a link
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-white font-bold bg-cyan w-full lg:w-[15%] px-4 py-3 rounded-xl hover:bg-[#9ee0e1]"
                >
                  Shorten It!
                </button>
              </form>
            </div>

            {/* LINKS SECTION */}
            {(localItems ? localItems : shortUrls).map((item, index) => {
              return (
                <div className="py-4" key={index}>
                  <div className="rounded-xl flex flex-col items-center lg:justify-between lg:flex-row py-3 px-3 bg-white">
                    <div className="hidden md:inline-flex">
                      <p className="text-dark-violet-deep">
                        {item.originalUrl}
                      </p>
                    </div>
                    <div>
                      <p className="flex flex-row items-center gap-4">
                        <a
                          className="text-cyan hover:text-[#9ee0e1]"
                          href={item.shortlink}
                          target="_blank"
                        >
                          {item.shortlink}
                        </a>
                        <button
                          onClick={(event) => handleClick(event, index)}
                          className={`w-[90px] flex justify-center items-center text-white px-5 py-1 rounded-md ${
                            successCopy
                              ? `bg-dark-violet`
                              : `bg-cyan hover:bg-[#9ee0e1]`
                          }`}
                        >
                          {successCopy ? `Copied!` : `Copy`}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-center md:w-2/4 lg:w-2/5 mx-auto mb-10 mt-16">
              <h2 className="text-dark-violet-deep font-bold text-2xl mb-4">
                Advanced Statistics
              </h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16 pt-10 md:pt-0 relative">
              <div className="md:w-96 text-center lg:text-left px-7 bg-white py-5 rounded-lg z-30">
                <div className="mb-7 -mt-14 bg-dark-violet w-14 h-14 rounded-full mx-auto lg:ml-4 flex items-center justify-center">
                  <img src={brandrecog} alt="" className="w-8" />
                </div>
                <h3 className="text-dark-violet-deep font-bold text-lg">
                  Brand Recognition
                </h3>
                <p className="py-4">
                  Boost your brand recognition with each click. Generic links
                  don???t mean a thing. Branded links help instil confidence in
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
              {/* Timeline */}
              <div className="bg-red border-4 border-cyan absolute rotate-90 -left-12 -right-12 top-[50%] lg:top-[48%] md:left-5 md:right-5 lg:transform-none lg:right-60 lg:left-60 z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CALLOUT SECTION */}

      <div className="w-full py-20 bg-boost-desktop bg-dark-blue bg-blend-screen bg-no-repeat bg-cover lg:bg-boost-desktop">
        <div className="px-4 lg:px-16">
          <div className="text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Boost your links today
            </h2>
            <button className="text-white bg-cyan w-36 px-3 py-2 rounded-3xl hover:bg-[#9ee0e1] mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
