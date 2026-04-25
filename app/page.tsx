import React from 'react';
import { Monitor, Video, BarChart3, ArrowRight, CheckCircle2, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-black">
            soykko<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wider text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 bg-slate-100 text-slate-700 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Content Creator & Digital Marketer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tight text-slate-900">
              Grow Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Brand Vision.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl">
              크리에이터의 감각으로 만드는 숏폼 콘텐츠부터, 
              실제 매출로 이어지는 광고 대행과 고성능 웹사이트 제작까지 비즈니스의 모든 과정을 함께합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center group">
                상담 신청하기 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-black mb-4">Service Details</h2>
            <p className="text-slate-500 font-medium text-lg">비즈니스의 가치를 극대화하는 soykko의 전문 서비스</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                <Video size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">영상 제작</h3>
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed font-medium">
                <p>• <strong>UGC 형식 제작</strong>: 2차 활용권 포함 고퀄리티 영상</p>
                <p>• <strong>채널 콜라보</strong>: 크리에이터 채널을 활용한 바이럴 극대화</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-100">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">광고 대행</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                사업체의 핵심 타겟과 관심층을 정밀하게 타겟팅하여 광고를 운영하고 효율을 최적화합니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-emerald-200 transition-all">
              <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200">
                <Monitor size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">웹사이트 제작</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                브랜드 아이덴티티를 담은 고성능 랜딩 페이지를 구축합니다. 빠른 속도와 SEO 최적화를 기본으로 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Let&apos;s <br />Collaborate.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shrink-0 text-blue-400 font-bold">W</div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">WhatsApp / Phone</p>
                    <p className="text-lg font-bold">🇲🇽 +52 56 12 77 33 65</p>
                    <p className="text-lg font-bold">🇰🇷 +82 10 4095 5525</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shrink-0 text-blue-400 font-bold">@</div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg font-bold">kangsyoutube@naver.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center underline underline-offset-8 decoration-blue-500">Global Connect</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.tiktok.com/@kkangs2002?_r=1&_t=ZS-95qDvJYHwLB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-black text-center rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all"
                >
                  TikTok Channel
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3" />
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        © 2026 soykko. All rights reserved.
      </footer>
    </div>
  );
}