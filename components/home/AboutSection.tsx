"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Home } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-300" />,
      title: "Lokasi Strategis",
      description: "Berada di kawasan Pantai Tanjung Gunung yang asri dan berkembang."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-300" />,
      title: "Keamanan Terjamin",
      description: "Lingkungan perumahan dengan sistem keamanan yang baik untuk keluarga."
    },
    {
      icon: <Home className="w-5 h-5 text-blue-300" />,
      title: "Desain Eksklusif",
      description: "Hunian dirancang dengan mengutamakan kenyamanan dan estetika modern."
    }
  ];

  return (
    <section id="about-us" className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      {/* Decorative background elements from previous version */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-yellow-500 opacity-10"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-blue-400 opacity-10"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-white opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image/Illustration */}
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/5 rounded-full filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
                alt="Tentang Hunian Kami"
                width={800}
                height={600}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-morphism rounded-2xl border border-white/20 backdrop-blur-md bg-white/10 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Terverifikasi</div>
                    <div className="text-lg font-bold">Properti Siap Huni</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-wider">
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Hunian Berkualitas di <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                  Bangka Belitung
                </span>
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Kami hadir untuk memberikan solusi hunian impian Anda di Perumahan Pantai Tanjung Gunung. 
                Tempat di mana kenyamanan bertemu dengan keindahan pesisir pantai.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-blue-100/70 text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-600/20 group border-none">
                Selengkapnya
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10">
                Konsultasi Gratis
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;