import React from 'react';

import heroimg from '../assets/illustration-working.svg';

function Landing() {
  return (
    <section>
      {/* // HERO SECTION */}
      <div>
        <div>
          <h1>
            More than just <span>shorter links</span>{' '}
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img
            src={heroimg}
            alt="illustration of person working on a computer"
          />
        </div>
      </div>

      {/* INPUT SECTION */}
      {/* STATS SECTION */}
      {/* CALLOUT SECTION */}
    </section>
  );
}

export default Landing;
