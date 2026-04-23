"use client";

import { Maximize, Users, Banknote, CheckCircle2 } from 'lucide-react';

const Information = () => {
  const information = [
    {
      icon: <Maximize className="h-8 w-8 text-blue-600" />,
      title: '387 m²',
      label: 'Luas Area',
      description: 'Luas keseluruhan bangunan dan tanah yang memberikan keleluasaan bagi penghuni.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '6 Orang',
      label: 'Kapasitas',
      description: 'Kapasitas hunian ideal untuk keluarga besar dengan ruang yang tertata rapi.',
    },
    {
      icon: <Banknote className="h-8 w-8 text-blue-600" />,
      title: '± Rp 80 Juta',
      label: 'Estimasi Harga',
      description: 'Penawaran harga terbaik dengan nilai investasi yang menjanjikan di masa depan.',
    },
  ];

  return (
    <section id="information" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Detail Properti
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Informasi Spesifikasi <span className="text-blue-600">Hunian</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kenali lebih dalam mengenai aset properti berharga Anda. Kami menyajikan data transparan untuk membantu Anda mengambil keputusan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {information.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-50/0 group-hover:ring-2 group-hover:ring-blue-100 transition-all duration-500">
                <div className="group-hover:scale-110 transition-transform duration-300 text-blue-600">
                  {item.icon}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                  {item.label}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                Selengkapnya
                <Maximize className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;