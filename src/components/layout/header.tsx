
"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button'; // Using ShadCN button as base for nav links
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md border-b-2 border-foreground' : 'bg-transparent border-b-2 border-transparent'
      )}
      style={isScrolled ? { boxShadow: '0 4px 0 0 hsl(var(--foreground))' } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="text-3xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
            H1P4ZDEV
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild className="text-lg font-medium hover:bg-accent/50 hover:text-accent-foreground rounded-none">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="ml-2 rounded-none">
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t-2 border-foreground shadow-[0_4px_0_0_hsl(var(--foreground))]">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild className="w-full text-lg font-medium hover:bg-accent/50 hover:text-accent-foreground rounded-none" onClick={toggleMobileMenu}>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

    