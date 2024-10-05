import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      {/* Responsive heading with different font sizes */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
        Welcome to the Currency Converter
      </h1>

      {/* Responsive paragraph */}
      <p className="text-md sm:text-lg mb-4">
        Easily convert between currencies in real-time!
      </p>

      {/* Responsive image container and image size with animation */}
      <div className="flex justify-center mb-10">
        <img 
          src="https://cdn.pixabay.com/photo/2016/03/31/18/30/dollar-1294424_1280.jpg"
          alt="dollar"
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full animate-scaleUp" 
        />
      </div>

      {/* Responsive button size */}
      <Link 
        to="/converter" 
        className="bg-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-3xl hover:bg-blue-700 font-roboto"
      >
        Go to Converter
      </Link>
    </div>
  );
}

export default Home;
