import Image from "next/image";
import React from "react";
import Logoimage from "../../public/logo.png";

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 px-16 backdrop-blur-sm bg-black/50">
        <div className="flex flex-col gap-1">
          <Image
            src={Logoimage}
            alt="dunetech logo image"
            className="h-12 w-auto object-contain"
          />
          <h2 className="!font-smooch-sans text-2xl tracking-tight font-semibold">
            Dunetech
          </h2>
        </div>

        <div className="hidden md:flex items-center space-x-8 animate-fadeInDown">
          <a
            href="#home"
            className="text-white hover:text-red-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#team"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 animate-fadeInRight">
          Get Started
        </button>
      </nav>

      {/* Hero Banner */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        {/* Badge */}
        <div className="mb-8 px-4 py-2 glass-effect-red rounded-full text-red-400 text-xs flex items-center gap-2 animate-fadeInUp animate-stagger-1">
          <span className="text-red-500 animate-float">⚙️</span>
          Next.js & MERN Stack Specialists
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fadeInUp animate-stagger-2">
          Building Digital
          <br />
          <span className="gradient-text underline decoration-red-500">
            Excellence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mb-12 animate-fadeInUp animate-stagger-3">
          We craft cutting-edge web applications using{" "}
          <span className="text-red-500 font-semibold">Next.js</span> and{" "}
          <span className="text-red-500 font-semibold">MERN stack</span>,
          delivering scalable solutions that drive your business forward.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeInUp animate-stagger-4">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-2">
            Start Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fadeInUp animate-stagger-1">
            <div className="text-2xl md:text-3xl font-bold gradient-text animate-pulse">
              3
            </div>
            <div className="text-gray-400 text-xs">Projects Delivered</div>
          </div>
          <div className="animate-fadeInUp animate-stagger-2">
            <div className="text-2xl md:text-3xl font-bold gradient-text animate-pulse">
              98%
            </div>
            <div className="text-gray-400 text-xs">Client Satisfaction</div>
          </div>
          <div className="animate-fadeInUp animate-stagger-3">
            <div className="text-2xl md:text-3xl font-bold gradient-text animate-pulse">
              3+
            </div>
            <div className="text-gray-400 text-xs">Years Experience</div>
          </div>
          <div className="animate-fadeInUp animate-stagger-4">
            <div className="text-2xl md:text-3xl font-bold gradient-text animate-pulse">
              24/7
            </div>
            <div className="text-gray-400 text-xs">Support</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
