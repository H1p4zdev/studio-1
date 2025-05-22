
"use client";

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github, dataAiHint: "social code" },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, dataAiHint: "social professional" },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, dataAiHint: "social media" },
];

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a static form, so we just show a toast.
    toast({
      title: "Message Sent (Simulated)",
      description: "Thank you for your message! This is a demo form.",
      variant: "default", // 'default' variant styling, not 'destructive'
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto neo-card">
          <form onSubmit={handleSubmit} className="space-y-6 p-2 sm:p-0">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <Input type="text" name="name" id="name" required className="neo-input" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
              <Input type="email" name="email" id="email" required className="neo-input" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea name="message" id="message" rows={5} required className="neo-textarea" placeholder="Your message..."></Textarea>
            </div>
            <div>
              <Button type="submit" className="neo-button w-full text-lg py-3">
                <Send className="h-5 w-5 mr-2" /> Send Message
              </Button>
            </div>
          </form>
          
          <div className="mt-10 pt-6 border-t-2 border-dashed border-border text-center">
            <p className="text-lg text-foreground mb-3">Or connect with me directly:</p>
            <a href="mailto:h1p4zdev@example.com" className="neo-button neo-button-outline !py-2 !px-4 mb-6 inline-flex items-center text-base">
              <Mail className="h-5 w-5 mr-2"/> h1p4zdev@example.com
            </a>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="neo-button p-3 !shadow-[3px_3px_0px_hsl(var(--foreground))] hover:!shadow-[2px_2px_0px_hsl(var(--foreground))] active:!shadow-[1px_1px_0px_hsl(var(--foreground))] hover:!-translate-x-[1px] hover:!-translate-y-[1px] active:!translate-x-[2px] active:!translate-y-[2px]"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    