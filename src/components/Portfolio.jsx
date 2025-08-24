import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "Real Estate",
      title: "Beyt - Modern Real Estate Platform",
      description:
        "A comprehensive real-estate application that helps users find, buy, and sell properties with modern features, advanced search filters, and intuitive interface built with Next.js.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "SEO Optimized"],
      liveUrl: "https://beyt.co",
      image: "/projects/beyt-project.jpg",
      alt: "Beyt real estate platform showing property listings and modern interface",
    },
    {
      id: 2,
      category: "Crypto Analytics",
      title: "Crypadda - Cryptocurrency Analytics",
      description:
        "A comprehensive crypto analytics platform where users can track market trends, analyze price movements, and stay updated with the latest cryptocurrency market data and insights.",
      technologies: ["React", "Node.js", "Chart.js", "API Integration"],
      liveUrl: "https://crypadda.netlify.app",
      image: "/projects/crypadda-project.jpg",
      alt: "Crypadda cryptocurrency analytics dashboard with charts and market data",
    },
    {
      id: 3,
      category: "Marketing Platform",
      title: "Wobb - Influencer Marketing Hub",
      description:
        "An advanced influencer marketing platform that connects brands with content creators, streamlines campaign management, and provides detailed analytics for marketing ROI.",
      technologies: ["React", "Express", "MongoDB", "Analytics"],
      liveUrl: "https://wobb.ai",
      image: "/projects/wobb-project.jpg",
      alt: "Wobb influencer marketing platform showing campaign dashboard and creator profiles",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 to-black text-white py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-5xl font-bold mb-6 animate-fadeInUp font-poppins"
          >
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fadeInUp animate-stagger-1 font-inter">
            Showcasing our latest web development projects and successful client
            solutions built with modern technologies
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper
              key={project.id}
              animation="scale"
              delay={index * 150}
            >
              <div className="glass-effect rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-500/20 to-gray-800">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center animate-scaleIn">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-3 mx-auto animate-float">
                        <span className="text-lg font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Title - Using H3 for project titles */}
                  <h3 className="text-lg font-bold mb-3 text-white font-poppins">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-xs font-inter">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700 font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2 text-xs font-inter"
                    >
                      <span>View Live Project</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-2xl p-12 border border-red-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto font-inter">
              Let's work together to bring your digital vision to life. Contact
              us today to discuss your next web development project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-medium transition-colors flex items-center gap-2 justify-center font-inter"
                prefetch={true}
              >
                <span>Start Your Project</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
