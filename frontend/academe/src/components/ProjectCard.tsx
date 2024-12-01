import React from 'react';
import './ProjectCard.css'; // Certifique-se de importar o arquivo CSS

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  imageUrl: string; // Nova propriedade para a URL da imagem
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, date, imageUrl }) => {
  return (
    <div className="border-gray-300 rounded p-4 mb-4 bg-gray-50 flex items-start relative project-card">
      {/* Quadrado em branco com imagem */}
      <div className="w-24 h-24 mr-4 border-l-8 border border-[#006ACB] bg-white z-10 flex items-center justify-center"> 
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> {/* Imagem dentro do quadrado */}
      </div>
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-[#006ACB]">{title}</h3>
        <p className="mt-2 text-[#565656]">{description}</p>
        <p className="text-[#94A2B7] text-sm mt-2">{date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;