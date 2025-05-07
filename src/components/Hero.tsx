
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "1.png",
      alt: "Prato principal do Garra Azul"
    },
    {
      image: "2.png",
      alt: "Ambiente do restaurante Garra Azul"
    },
    {
      image: "3.png",
      alt: "Frutos do mar especiais"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section id="home" className="relative h-screen">
      {/* Slideshow background */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl md:text-7xl hero-title mb-6 animate-fade-in">Garra Azul</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-xl animate-fade-in">
          Uma experiência única em gastronomia de frutos do mar
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/554891251018?text=Olá,%20Garra%20Azul!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20[data]%20às%20[horário]%20para%20[X]%20pessoas.%20Nome:%20[seu%20nome]." 
             className="btn-secondary" 
             target="_blank" 
             rel="noopener noreferrer">
            Reserve pelo WhatsApp
          </a>
          <a href="#menu" className="btn-outline border-white text-white hover:bg-white hover:text-garra-navy">
            Ver Cardápio
          </a>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-garra-gold w-8' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
