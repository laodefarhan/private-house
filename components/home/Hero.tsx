"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Phone, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with refined overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
          alt="Luxury home"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto text-white">
          {/* Hero Content */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-4 h-4 fill-current" />
            <span>Rumah pribadi dijual di Bangka Belitung, menawarkan kenyamanan, keamanan, serta akses mudah ke berbagai fasilitas umum.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Temukan Hunian <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Mewah & Nyaman
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Wujudkan impian Anda memiliki hunian eksklusif dengan layanan konsultasi profesional dan pilihan properti terbaik di lokasi strategis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 group transition-all">
              <Home className="mr-2 h-5 w-5" />
              Jelajahi Properti
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all">
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 border-t border-white/10 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/5">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">100% Aman</div>
                <div className="text-xs text-slate-400">Transaksi Terjamin</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/5">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Respon Cepat</div>
                <div className="text-xs text-slate-400">Layanan 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;