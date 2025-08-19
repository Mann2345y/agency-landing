import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "E-Commerce",
      title: "Beyt E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js and MongoDB, featuring secure payments, inventory management, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      features: [
        "Secure Payment Gateway",
        "Real-time Inventory",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      category: "SaaS",
      title: "Crypadda Dashboard",
      description:
        "A comprehensive SaaS application dashboard with real-time analytics, user management, and subscription handling built with MERN stack.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Real-time Analytics",
        "User Management",
        "Subscription System",
        "Data Visualization",
      ],
      liveUrl: "#",
      codeUrl: "#",
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Our Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-fadeInUp animate-stagger-1">
            Explore some of our recent projects and see how we've helped
            businesses achieve their digital goals
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-effect rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-fadeInUp animate-stagger-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-red-500/20 to-gray-800 flex items-center justify-center">
                <div className="text-center animate-scaleIn">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                    <span className="text-2xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Category Badge */}
                <div className="inline-block bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm mb-4 border border-red-500/30">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2">
                    <span>View Live</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                  <button className="flex-1 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <span>View Code</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-2xl p-12 border border-red-500/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your digital vision to life. Contact
              us today to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-medium transition-colors flex items-center gap-2">
                <span>Start Your Project</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
