import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../Assets/nike.jpg';
import img2 from '../Assets/rebook.jpg';
import img3 from '../Assets/newbalnce.jpg';
import img4 from '../Assets/adidas.jpg';
import img5 from '../Assets/puma.jpg';

const Hero = () => {
  const images = [img1, img2, img3, img4, img5];
  const shoeLabels = ['Nike', 'Reebok', 'New Balance', 'Adidas', 'Puma'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex overflow-hidden p-9">
      
      <div className="w-1/2 flex flex-col justify-center pl-10 text-black">
        <h1 className="text-4xl font-bold">We Picked Every Item With Care</h1>
        <p className="text-2xl font-bold mt-2">You Must Try</p>
        <p className="mt-4 text-lg">Use this code to receive 50% discount off all products</p>
        <button className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded shadow-md hover: transition">
          Go To Collection →
        </button>
      </div>
      
     
      <div className="w-1/2 h-full ml-40">
        <img
          src={images[currentIndex]}
          alt={shoeLabels[currentIndex]}
          className="w-full h-full object-contain transition-opacity duration-500"
        />
      </div>
      
    
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
        <FaChevronRight className="text-gray-800" />
      </button>
    </div>
  );
};

export default Hero;
