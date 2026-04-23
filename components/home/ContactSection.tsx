"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, MessageSquare, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Lokasi Kami",
      details: "Perumahan Pantai Tanjung Gunung, RT 11, Kec. Pangkalanbaru, Kab. Bangka Tengah",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telepon & WhatsApp",
      details: "+62 821 2565 2157 / +62 897 4159 938",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Resmi",
      details: "fiklaodefarhanfadilah@gmail.com",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Jam Operasional",
      details: "Senin - Minggu: 08:00 - 20:00 WIB",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Siap Memiliki <span className="text-blue-600">Rumah Impian?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tim kami siap membantu menjawab pertanyaan Anda dan mendampingi proses kunjungan lokasi secara langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-2xl border border-blue-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <div className={cn("flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center", info.color)}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA Box */}
            <div className="p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Phone size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Konsultasi Cepat</h3>
              <p className="text-blue-100 mb-6 relative z-10">Hubungi agen kami langsung melalui WhatsApp untuk respon instan.</p>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-xl py-6 font-bold relative z-10 shadow-lg border-none">
                WhatsApp Sekarang
              </Button>
            </div>
          </div>

          {/* Contact Form with Blue Theme */}
          <div className="lg:col-span-7">
            <div className="bg-blue-600 p-8 md:p-10 rounded-3xl border border-blue-500 shadow-2xl shadow-blue-200 relative overflow-hidden">
              {/* Subtle background decoration for the form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Kirimkan Pesan Anda</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-50 font-medium">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:ring-white/30 focus:border-white/40 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-50 font-medium">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Contoh: 0812..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:ring-white/30 focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-50 font-medium">Alamat Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:ring-white/30 focus:border-white/40 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-50 font-medium">Pesan atau Pertanyaan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Jelaskan kebutuhan properti Anda secara detail..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:ring-white/30 focus:border-white/40 transition-all resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-14 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-lg shadow-xl transition-all group border-none">
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Kirim Pesan Sekarang
                </Button>
                <p className="text-center text-xs text-blue-200 mt-4 opacity-80">
                  *Kami akan menjaga kerahasiaan data pribadi Anda.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;