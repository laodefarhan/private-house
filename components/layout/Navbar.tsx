"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Phone, Building, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: 'Beranda', href: '#beranda', icon: <Home className="h-4 w-4" /> },
    { name: 'Properti', href: '#properties', icon: <Building className="h-4 w-4" /> },
    { name: 'Informasi', href: '#information', icon: <Info className="h-4 w-4" /> },
    { name: 'Tentang Kami', href: '#about-us', icon: <Landmark className="h-4 w-4" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
            scrolled ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-white/20 backdrop-blur-sm"
          )}>
            <Building className={cn(
              "h-6 w-6 transition-colors",
              scrolled ? "text-white" : "text-white"
            )} />
          </div>
          <span className={cn(
            "text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-white"
          )}>
            Private<span className="text-blue-500">House</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-50/50",
                scrolled 
                  ? "text-slate-600 hover:text-blue-600" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-slate-200/20">
            <Button 
              asChild
              variant={scrolled ? "default" : "outline"}
              className={cn(
                "rounded-full px-6 transition-all duration-300",
                !scrolled && "bg-white/10 text-white border-white/20 hover:bg-white hover:text-blue-600"
              )}
            >
              <Link href="#contact">
                Kontak Kami
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors",
            scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100 border-t border-slate-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-slate-600 font-medium p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="p-2 bg-slate-100 rounded-lg text-slate-500">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="w-full rounded-xl py-6 mt-2 shadow-lg shadow-blue-100"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="#contact" className="flex items-center justify-center gap-2">
              <Phone size={18} />
              Hubungi Kami
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;