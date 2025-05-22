
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github, dataAiHint: "social code" },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, dataAiHint: "social professional" },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, dataAiHint: "social media" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t-2 border-foreground shadow-[0_-4px_0_0_hsl(var(--foreground))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} H1p4zdev. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                className="neo-button p-2 !shadow-[2px_2px_0px_hsl(var(--foreground))] hover:!shadow-[1px_1px_0px_hsl(var(--foreground))] active:!shadow-[0px_0px_0px_hsl(var(--foreground))] hover:!-translate-x-[1px] hover:!-translate-y-[1px] active:!translate-x-[2px] active:!translate-y-[2px]"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
             <a href="mailto:h1p4zdev@example.com" aria-label="Email H1p4zdev"
                className="neo-button p-2 !shadow-[2px_2px_0px_hsl(var(--foreground))] hover:!shadow-[1px_1px_0px_hsl(var(--foreground))] active:!shadow-[0px_0px_0px_hsl(var(--foreground))] hover:!-translate-x-[1px] hover:!-translate-y-[1px] active:!translate-x-[2px] active:!translate-y-[2px]"
              >
                <Mail className="h-6 w-6" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

    