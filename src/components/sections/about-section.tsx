
import SkillBadge from '@/components/skill-badge';
import { skillsData, experienceData } from '@/lib/constants';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 neo-card !p-0 overflow-hidden !shadow-[8px_8px_0px_hsl(var(--accent))]">
               <Image 
                src="https://placehold.co/400x400.png" 
                alt="H1p4zdev" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="developer portrait"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Who is H1p4zdev?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a self-driven Frontend Developer with a keen eye for detail and a love for crafting performant, accessible, and visually striking web applications. My journey into code started with a fascination for how websites work, and it has since evolved into a full-blown passion for building digital experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I embrace the principles of neo-brutalism for its honesty, boldness, and emphasis on raw functionality. I believe in continuous learning and am always exploring new technologies and design patterns to enhance my skillset.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Skillset</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {skillsData.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-12 md:mt-16 mb-8 text-center text-foreground">
            Professional <span className="text-primary">Journey</span>
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary -translate-x-1/2 hidden md:block shadow-[2px_0_0_0_hsl(var(--foreground))]"></div>
            
            {experienceData.map((item, index) => (
              <div key={item.id} className="mb-12 md:mb-16 flex md:items-start group">
                <div className="hidden md:flex flex-col items-center mr-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-2 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <div className="neo-card flex-1 md:group-odd:mr-auto md:group-even:ml-auto md:w-[calc(50%-2rem-6px)]"> {/* Adjust width for timeline placement */}
                   <div className="flex md:hidden items-center mb-4">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] mr-3">
                       <Briefcase className="w-5 h-5" />
                     </div>
                     <div>
                       <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                       <p className="text-sm text-accent font-medium">{item.company}</p>
                     </div>
                   </div>
                   <div className="hidden md:block">
                    <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-accent font-medium">{item.company}</p>
                   </div>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">{item.duration}</p>
                  <p className="text-base text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add group-odd and group-even for alternating timeline sides if desired:
// For the div with neo-card:
// In a more complex setup, you might add classes like:
// md:group-even:ml-[calc(50%+2rem)] md:group-odd:mr-[calc(50%+2rem)]
// For now, this simple centered list is fine.

    