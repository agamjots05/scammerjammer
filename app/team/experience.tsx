import React from "react";
import Image from 'next/image';

interface ExperienceProps {
  justifyDir: string; 
  imgName: string;    
  title: string;      
  description: string; 
  githubLink: string;  
  skills: string[];    
}

const Experience: React.FC<ExperienceProps> = ({ justifyDir, imgName, title, description, githubLink, skills }) => {
  return (
    <div id="big" className={`flex ${justifyDir} p-4`}>
      <a className="transition ease-in delay-60 duration-150 hover:scale-110" href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg text-white border-white hover:border-pink-300 border-4 h-full">
          <div className="flex justify-center h-32 pt-3">
            <Image className='rounded-lg'
              src={imgName} 
              width={200}
              height={200} 
              alt={`Image of ${title}`} // updated alt text for accessibility
              layout="intrinsic" // Ensures the image size is responsive
            />
          </div>
          
          <div className="px-3 py-1">
            <div className="font-bold text-lg mb-2 text-white">{title}</div>
            <p className="text-cyan-300 text-sm text-pretty">{description}</p>
          </div>

          <div className="px-3 pt-1 pb-1">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:animate-pulse">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Experience;
