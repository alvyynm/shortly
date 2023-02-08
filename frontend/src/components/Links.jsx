import React from 'react';

function Links() {
  return (
    <div className="py-4">
      <div className="rounded-xl flex flex-col items-center lg:justify-between lg:flex-row py-3 px-3 bg-white">
        <div>
          <p className="text-dark-violet-deep">frontendmentor.io</p>
        </div>
        <div>
          <p className="flex flex-row items-center gap-4">
            <a
              className="text-cyan hover:text-[#9ee0e1]"
              href="https://shiny.link/XhzYaX"
              target="_blank"
            >
              https://shiny.link/XhzYaX
            </a>
            <button className="text-white bg-cyan hover:bg-[#9ee0e1] px-5 py-1 rounded-md">
              Copy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Links;
