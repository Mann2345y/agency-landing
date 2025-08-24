import React from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      title: "Next.js Web Applications",
      description:
        "Build fast, SEO-friendly web applications with server-side rendering, static generation, and optimal performance using Next.js.",
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "API Routes",
        "Performance Optimization",
      ],
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
      title: "MERN Stack Development",
      description:
        "Full-stack development using MongoDB, Express.js, React, and Node.js for scalable and maintainable applications.",
      features: [
        "MongoDB Database",
        "Express.js Backend",
        "React Frontend",
        "Node.js Runtime",
      ],
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Responsive Design",
      description:
        "Create pixel-perfect, mobile-first designs that work flawlessly across all devices and screen sizes.",
      features: [
        "Mobile-First Design",
        "Cross-Browser Compatible",
        "Touch-Friendly Interface",
        "Progressive Web Apps",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen bg-black text-white py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fadeInUp animate-stagger-1">
            We offer comprehensive web development services to bring your
            digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="fadeUp"
              delay={index * 200}
            >
              <div className="glass-effect p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                {/* Icon */}
                <div className="mb-6 animate-float">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
