import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Footer from './components/Footer';
import WelcomeMusic from './components/WelcomeMusic';
import './App.css';

function App() {
  return (
    <AnimatePresence>
      <div className="font-sans text-gray-800 overflow-x-hidden">
        {/* <Header /> */}
        <main>
          <WelcomeMusic/>
          <Hero />
          <Details />
          <Gallery />
          {/* <RSVP />
          <Registry /> */}
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;