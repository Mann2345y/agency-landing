import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mahesh",
      role: "Full-Stack Developer & Co-Founder",
      title: "Lead Developer",
      description:
        "Expert in MERN stack and Next.js with 3+ years of experience building scalable web applications and high-performance websites.",
      image: "/team/mahesh-developer.jpg",
      alt: "Mahesh - Lead Full-Stack Developer specializing in React and Next.js",
      specializes: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
      bio: "Passionate developer focused on creating high-performance, user-centric digital experiences with modern web technologies.",
    },
    {
      id: 2,
      name: "Meshal",
      role: "Marketing Lead & Business Development",
      title: "Client Relations Specialist",
      description:
        "Strategic marketing expert specializing in client acquisition and business growth with proven track record in digital marketing.",
      image: "/team/meshal-marketing.jpg",
      alt: "Meshal - Marketing Lead and Business Development specialist",
      specializes: [
        "Client Relations",
        "Digital Marketing",
        "Business Strategy",
        "Lead Generation",
        "Project Planning",
      ],
      bio: "Results-driven marketing professional who bridges the gap between technical solutions and business objectives.",
    },
  ];

  return (
    <section
      id="team"
      className="relative min-h-screen bg-gradient-to-br from-black to-gray-950 text-white py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            id="team-heading"
            className="text-3xl md:text-5xl font-bold mb-6 animate-fadeInUp font-poppins"
          >
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fadeInUp animate-stagger-1 font-inter">
            Our experienced team of web developers and marketing professionals
            dedicated to delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollAnimationWrapper
              key={member.id}
              animation="fadeUp"
              delay={index * 200}
            >
              <div className="glass-effect rounded-3xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                {/* Member Image */}
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-full flex items-center justify-center border-4 border-red-500/30">
                      <span className="text-3xl font-bold text-red-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Member Name - Using H3 for team member names */}
                  <h3 className="text-xl font-bold mb-2 font-poppins">
                    {member.name}
                  </h3>
                  <p className="text-red-400 font-semibold mb-1 font-inter">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs font-inter">
                    {member.title}
                  </p>
                </div>

                {/* Member Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-center font-inter">
                  {member.description}
                </p>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center font-poppins">
                    Specializes In:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specializes.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30 font-inter"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Member Bio */}
                <p className="text-gray-400 text-xs leading-relaxed text-center font-inter italic">
                  "{member.bio}"
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <ScrollAnimationWrapper animation="fadeUp" delay={400}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
                Why Choose DevCraft?
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
                We combine technical expertise with business acumen to deliver
                exceptional web development solutions
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🎯",
                title: "Client-Focused Approach",
                description:
                  "We prioritize understanding your business goals to deliver tailored solutions that drive results.",
              },
              {
                icon: "⚡",
                title: "Modern Technology Stack",
                description:
                  "Using cutting-edge technologies like React, Next.js, and modern development practices.",
              },
              {
                icon: "🔧",
                title: "End-to-End Service",
                description:
                  "From initial consultation to ongoing maintenance, we provide comprehensive web development services.",
              },
            ].map((feature, index) => (
              <ScrollAnimationWrapper
                key={index}
                animation="fadeUp"
                delay={500 + index * 100}
              >
                <div className="text-center p-6 glass-effect rounded-2xl border border-gray-800">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-bold mb-3 font-poppins">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 font-inter">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
