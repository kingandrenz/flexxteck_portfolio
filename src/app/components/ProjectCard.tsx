import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
}

export default function ProjectCard({ 
  title, description, image, demoLink, githubLink 
}: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <Image 
        src={image} 
        alt={title} 
        width={600} 
        height={300} 
        className="w-full h-48 object-cover" 
        priority 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-indigo-300 mb-3">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{description}</p>
        <div className="mt-auto flex gap-3">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
          >
            Live Demo
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
