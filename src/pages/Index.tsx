
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
