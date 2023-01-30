import React from 'react';

import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

function Home() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Landing />
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Home;
