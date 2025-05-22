
import AnimatedHeadline from '@/components/animated-headline';
import { Button } from '@/components/ui/button'; // Using ShadCN button and applying neo-button class
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-background relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
        {/* Subtle background pattern */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedHeadline 
          baseText="Hi, I'm H1p4zdev. I build"
          animatedWords={["innovative", "robust", "performant", "brutalist"]}
          className="mb-6"
        />
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          A passionate frontend developer specializing in creating unique and engaging web experiences with a neo-brutalist touch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="#projects">
            <Button className="neo-button w-full sm:w-auto text-lg py-4 px-8">View My Work</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" className="neo-button neo-button-outline w-full sm:w-auto text-lg py-4 px-8">Get In Touch</Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-10 w-10 text-primary" />
      </div>
    </section>
  );
}

    