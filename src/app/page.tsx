
import HomeSection from '@/components/sections/home-section';
import ProjectsSection from '@/components/sections/projects-section';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <ProjectsSection />
      <Separator className="my-16 md:my-24 border-2 border-foreground shadow-[0_4px_0_0_hsl(var(--foreground))]"/>
      <AboutSection />
      <Separator className="my-16 md:my-24 border-2 border-foreground shadow-[0_4px_0_0_hsl(var(--foreground))]"/>
      <ContactSection />
    </div>
  );
}

    