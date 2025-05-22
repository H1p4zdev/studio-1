
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="neo-card neo-card-hover group flex flex-col overflow-hidden h-full">
      <div className="relative w-full aspect-[16/10] overflow-hidden border-b-2 border-foreground">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={project.dataAiHint || "project image"}
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-base mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-1">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="border border-foreground shadow-[1px_1px_0px_hsl(var(--foreground))] text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
           <h4 className="text-sm font-medium text-foreground mb-1">Categories:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border border-foreground shadow-[1px_1px_0px_hsl(var(--foreground))] text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex space-x-3 pt-4 border-t border-dashed border-muted-foreground">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="neo-button !py-2 !px-3 !text-sm !shadow-[2px_2px_0px_hsl(var(--foreground))]">
              <ExternalLink className="h-4 w-4 mr-1.5" /> Live Demo
            </Link>
          )}
          {project.repoUrl && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="neo-button neo-button-outline !py-2 !px-3 !text-sm !shadow-[2px_2px_0px_hsl(var(--foreground))]">
              <Github className="h-4 w-4 mr-1.5" /> View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

    