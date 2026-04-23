"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Building, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Instagram, WhastApp } from '@/components/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto pt-20 pb-10 px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Private<span className="text-blue-400">House</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Mewujudkan impian hunian eksklusif Anda di Bangka Belitung dengan layanan yang transparan, aman, dan profesional.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="https://instagram.com" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </Link>
              <Link 
                href="https://wa.me/6282125652157" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <WhastApp className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Navigasi
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', href: '#beranda' },
                { name: 'Properti', href: '#properties' },
                { name: 'Informasi', href: '#information' },
                { name: 'Tentang Kami', href: '#about-us' },
                { name: 'Kontak', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Layanan
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                'Penjualan Rumah',
                'Konsultasi Properti',
                'Penilaian Properti',
                'Pengurusan Dokumen',
                'Survei Lokasi',
              ].map((service) => (
                <li key={service} className="text-slate-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Hubungi Kami
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Perumahan Pantai Tanjung Gunung, RT 11, Kec. Pangkalanbaru, Kab. Bangka Tengah, Prov. Bangka Belitung
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm">+62 821 2565 2157</span>
                  <span className="text-slate-400 text-sm">+62 897 4159 938</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-slate-400 text-sm">fiklaodefarhanfadilah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            &copy; {currentYear} <span className="text-slate-300 font-medium">PrivateHouse</span>. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <ShieldCheck className="w-4 h-4 text-green-500/50" />
              Transaksi Aman
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Star className="w-4 h-4 text-yellow-500/50" />
              Layanan Terpercaya
            </div>
          </div>
          <div className="text-slate-500 text-xs">
            Crafted with passion by <span className="text-blue-500/80">Laode F. Fadilah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;