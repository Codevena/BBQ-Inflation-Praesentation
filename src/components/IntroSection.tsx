'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTypewriter } from '@/lib/hooks';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const worldMapRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { displayText: titleText, isComplete: titleComplete } = useTypewriter(
    'Inflation verstehen',
    80,
    500
  );

  const { displayText: subtitleText } = useTypewriter(
    'Eine interaktive Reise durch Ursachen, Auswirkungen und Geschichte der Geldentwertung',
    50,
    titleComplete ? 1000 : 0
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, worldMapRef.current, statsRef.current], {
        opacity: 0,
        y: 50
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5')
      .to(worldMapRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.3')
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5');

      // Parallax effect for background elements
      gsap.to(worldMapRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="intro" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      {/* World Map Background */}
      <div 
        ref={worldMapRef}
        className="absolute inset-0 flex items-center justify-center opacity-20"
      >
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full max-w-4xl"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Simplified world map paths */}
          <path d="M150 200 L200 180 L250 190 L300 170 L350 180 L400 160 L450 170 L500 150" className="text-blue-400" />
          <path d="M100 250 L150 240 L200 250 L250 230 L300 240 L350 220 L400 230 L450 210" className="text-blue-400" />
          <path d="M200 300 L250 290 L300 300 L350 280 L400 290 L450 270 L500 280" className="text-blue-400" />
          
          {/* Inflation hotspots */}
          <circle cx="200" cy="200" r="8" className="fill-red-500 animate-pulse" />
          <circle cx="350" cy="180" r="6" className="fill-yellow-500 animate-pulse" />
          <circle cx="450" cy="230" r="7" className="fill-orange-500 animate-pulse" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {titleText}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {subtitleText}
          {!titleComplete && <span className="animate-pulse">|</span>}
        </p>

        {/* Key Statistics */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-red-400 mb-2">6.9%</div>
            <div className="text-blue-200">Deutschland 2022</div>
            <div className="text-sm text-white/60 mt-1">Höchste Inflation seit 1973</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2.0%</div>
            <div className="text-blue-200">EZB Ziel</div>
            <div className="text-sm text-white/60 mt-1">Preisstabilitätsziel</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">2.2%</div>
            <div className="text-blue-200">Deutschland 2024</div>
            <div className="text-sm text-white/60 mt-1">Rückgang zur Normalität</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">-4.3%</div>
            <div className="text-blue-200">Reallöhne 2022</div>
            <div className="text-sm text-white/60 mt-1">Kaufkraftverlust</div>
          </div>
        </div>

        {/* Definition Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            💡 Was ist Inflation?
          </h3>
          <p className="text-blue-100 leading-relaxed text-center max-w-4xl mx-auto">
            Inflation ist der <strong>allgemeine Anstieg des Preisniveaus</strong> für Güter und Dienstleistungen
            in einer Volkswirtschaft über einen bestimmten Zeitraum. Sie wird meist als <strong>jährliche
            Veränderungsrate</strong> des Verbraucherpreisindex (VPI) gemessen. Eine moderate Inflation von
            etwa 2% gilt als <strong>Zeichen einer gesunden Wirtschaft</strong>, während zu hohe oder zu
            niedrige Inflation wirtschaftliche Probleme verursachen kann.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
          <p className="text-white/60 text-sm mt-2">Scrollen oder → drücken</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-red-500/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-yellow-500/20 rounded-full animate-float" />
    </section>
  );
}
