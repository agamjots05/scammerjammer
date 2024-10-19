import React from 'react';
import Experience from './experience';

const teamMembers = [
    {
      name: 'Agamjot Singh',
      image: "/assets/agamjot.png", // fixed 'string' to 'image'
      profile: 'Full Stack Developer with a passion for backend engineering and system design.',
      github: 'https://github.com/agamjots05',
      skills: ['Full Stack', 'Backend', 'System Design']
    },
    {
      name: 'Jane Smith',
      image: "/assets/ishir.png",
      profile: 'Frontend Developer who loves creating intuitive user interfaces with React and Tailwind.',
      github: 'https://github.com/ishirgarg',
      skills: ['Frontend', 'React', 'Tailwind CSS']
    },
    {
      name: 'Yashi Surapaneni',
      image: "/assets/ishir.png",
      profile: 'ML Engineer with expertise in machine learning and data science.',
      github: 'https://github.com/yashiberk',
      skills: ['ML', 'Data Science', 'Python']
    },
    {
      name: 'Ohm Rajpal',
      image: "/assets/ohm.jpg",
      profile: 'ML Engineer with expertise in machine learning and data science.',
      github: 'https://github.com/yashiberk',
      skills: ['ML', 'Data Science', 'Python']
    },
  ];
  

const OurTeam: React.FC = () => {
  return (
    <div className="text-center text-wrap p-5">
      <h2 className="text-5xl mb-3 text-cyan-300">Meet the team!</h2>

      {/* Flexbox container for horizontal alignment */}
      <div className="flex flex-wrap justify-around items-center">
        {teamMembers.map((member, index) => (
          <Experience
            key={index}
            justifyDir={"justify-center"} 
            imgName={member.image}
            title={member.name}
            description={member.profile}
            skills={member.skills}
            githubLink={member.github}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
