import React from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mahesh",
      role: "Full-Stack Developer & Co-Founder",
      title: "Lead Developer",
      description:
        "Expert in MERN stack and Next.js with 3+ years of experience building scalable web applications.",
      image: "/api/placeholder/400/400",
      specializes: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
      bio: "Passionate developer focused on creating high-performance, user-centric digital experiences with modern web technologies.",
    },
    {
      id: 2,
      name: "Meshal",
      role: "Marketing Lead & Business Development",
      title: "Client Relations Specialist",
      description:
        "Strategic marketing expert specializing in client acquisition and business growth with proven track record.",
      image: "/api/placeholder/400/400",
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Meet Our Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-fadeInUp animate-stagger-1">
            The passionate individuals behind DevCraft who bring your digital
            vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollAnimationWrapper
              key={member.id}
              animation="scale"
              delay={index * 200}
            >
              <div className="glass-effect rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 h-[360px] flex flex-col">
                {/* Member Image */}
                <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-gray-800 flex items-center justify-center flex-shrink-0">
                  <div className="text-center animate-scaleIn">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-2 mx-auto animate-float">
                      <span className="text-2xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-red-400 text-sm">{member.title}</p>
                  </div>
                </div>

                {/* Member Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Role */}
                    <div className="inline-block bg-red-600/20 text-red-300 px-2 py-1 rounded-full text-xs mb-2 border border-red-500/30">
                      {member.role.split("&")[0].trim()}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-3 leading-relaxed text-xs h-12 overflow-hidden">
                      {member.description.length > 120
                        ? member.description.substring(0, 120) + "..."
                        : member.description}
                    </p>
                  </div>

                  <div>
                    {/* Specializations */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {member.specializes.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="bg-red-600/20 text-red-300 px-2 py-0.5 rounded-full text-xs border border-red-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.specializes.length > 3 && (
                          <span className="bg-gray-600/20 text-gray-300 px-2 py-0.5 rounded-full text-xs border border-gray-500/30">
                            +{member.specializes.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Team Stats */}
      </div>
    </section>
  );
};

export default Team;
