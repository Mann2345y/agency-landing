import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mahesh",
      role: "Full-Stack Developer & Co-Founder",
      title: "Lead Developer",
      description:
        "Expert in MERN stack and Next.js with 8+ years of experience building scalable web applications.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`glass-effect rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-fadeInUp animate-stagger-${member.id}`}
            >
              {/* Member Image */}
              <div className="relative h-80 bg-gradient-to-br from-red-500/20 to-gray-800 flex items-center justify-center">
                <div className="text-center animate-scaleIn">
                  <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                    <span className="text-4xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-red-400 text-lg">{member.title}</p>
                </div>
              </div>

              {/* Member Content */}
              <div className="p-8">
                {/* Role */}
                <div className="inline-block bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm mb-4 border border-red-500/30">
                  {member.role.split("&")[0].trim()}
                </div>

                {/* Name and Title */}
                <h3 className="text-3xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-red-400 text-lg font-medium mb-4">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Bio */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed italic">
                  "{member.bio}"
                </p>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Specializes in:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specializes.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2">
                  <span>Connect with {member.name}</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-2xl p-12 border border-red-500/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Choose Our Team?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  8+
                </div>
                <div className="text-gray-300">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  50+
                </div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Dedicated Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
