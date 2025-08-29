'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimeTravelSimulator from './TimeTravelSimulator';
import SalaryInflationTracker from './SalaryInflationTracker';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const inflationProtectionAssets = [
  {
    name: 'Aktien',
    protection: 85,
    risk: 'Hoch',
    timeHorizon: '5+ Jahre',
    description: 'Unternehmen können Preise anpassen',
    color: '#EF4444'
  },
  {
    name: 'Immobilien',
    protection: 90,
    risk: 'Mittel',
    timeHorizon: '10+ Jahre',
    description: 'Sachwerte steigen mit Inflation',
    color: '#F59E0B'
  },
  {
    name: 'Rohstoffe',
    protection: 75,
    risk: 'Hoch',
    timeHorizon: '3+ Jahre',
    description: 'Direkte Inflationstreiber',
    color: '#10B981'
  },
  {
    name: 'Inflationsanleihen',
    protection: 95,
    risk: 'Niedrig',
    timeHorizon: '1+ Jahre',
    description: 'Zinsen passen sich an Inflation an',
    color: '#3B82F6'
  },
  {
    name: 'Sparbuch',
    protection: 20,
    risk: 'Niedrig',
    timeHorizon: 'Jederzeit',
    description: 'Zinsen meist unter Inflation',
    color: '#8B5CF6'
  }
];

const personalFinanceTips = [
  {
    icon: '💰',
    title: 'Schulden bei Inflation',
    tip: 'Feste Zinsen werden durch Inflation "weginflationiert"',
    example: '100.000€ Kredit bei 3% Zinsen + 5% Inflation = real nur 2% Kosten'
  },
  {
    icon: '🏠',
    title: 'Immobilienkauf',
    tip: 'Sachwerte schützen vor Inflation, aber Zinsen beachten',
    example: 'Haus für 500.000€ heute kann in 10 Jahren 650.000€ wert sein'
  },
  {
    icon: '📈',
    title: 'Aktien-Sparplan',
    tip: 'Regelmäßig investieren glättet Schwankungen',
    example: '200€/Monat in ETF über 20 Jahre trotz Inflation'
  },
  {
    icon: '💳',
    title: 'Konsumverhalten',
    tip: 'Große Anschaffungen vor Preiserhöhungen',
    example: 'Auto oder Möbel kaufen, bevor Preise weiter steigen'
  }
];

export default function InflationEverydaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const protectionRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const [initialAmount, setInitialAmount] = useState(10000);
  const [inflationRate, setInflationRate] = useState(3.0);
  const [years, setYears] = useState(10);
  const [selectedAsset, setSelectedAsset] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, calculatorRef.current, protectionRef.current, tipsRef.current], {
        opacity: 0,
        y: 50
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .to(calculatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5')
      .to(protectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.3')
      .to(tipsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const calculateInflationImpact = () => {
    const futureValue = initialAmount * Math.pow(1 + inflationRate / 100, years);
    const realValue = initialAmount / Math.pow(1 + inflationRate / 100, years);
    const purchasingPowerLoss = ((initialAmount - realValue) / initialAmount) * 100;
    
    return {
      futureValue: futureValue.toFixed(0),
      realValue: realValue.toFixed(0),
      purchasingPowerLoss: purchasingPowerLoss.toFixed(1)
    };
  };

  const impact = calculateInflationImpact();

  return (
    <section 
      id="everyday" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 py-20"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            💡 Inflation im
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 block">
              Alltag meistern
            </span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto">
            Praktische Strategien für deine persönlichen Finanzen in inflationären Zeiten
          </p>
        </div>

        {/* Personal Inflation Calculator */}
        <div ref={calculatorRef} className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              🧮 Persönlicher Kaufkraft-Rechner
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-emerald-200 mb-2">Startbetrag (€)</label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-emerald-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-emerald-300 mt-1">
                    <span>1.000€</span>
                    <span className="font-bold">{initialAmount.toLocaleString()}€</span>
                    <span>100.000€</span>
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-200 mb-2">Inflationsrate (%)</label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-green-500 to-red-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-emerald-300 mt-1">
                    <span>0%</span>
                    <span className="font-bold">{inflationRate}%</span>
                    <span>10%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-200 mb-2">Zeitraum (Jahre)</label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(parseInt(e.target.value))}
                    className="w-full h-2 bg-teal-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-emerald-300 mt-1">
                    <span>1 Jahr</span>
                    <span className="font-bold">{years} Jahre</span>
                    <span>30 Jahre</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-emerald-500/20 rounded-xl p-6 border border-emerald-400/30">
                  <h4 className="text-lg font-bold text-white mb-4">Deine Kaufkraft in {years} Jahren:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Nominaler Wert:</span>
                      <span className="text-2xl font-bold text-white">{initialAmount.toLocaleString()}€</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Realer Wert:</span>
                      <span className="text-2xl font-bold text-red-400">{parseInt(impact.realValue).toLocaleString()}€</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Kaufkraftverlust:</span>
                      <span className="text-2xl font-bold text-red-400">-{impact.purchasingPowerLoss}%</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
                    <p className="text-yellow-100 text-sm">
                      💡 <strong>Das bedeutet:</strong> Was heute {initialAmount.toLocaleString()}€ kostet, 
                      kostet in {years} Jahren etwa {impact.futureValue}€. 
                      Deine {initialAmount.toLocaleString()}€ haben dann nur noch die Kaufkraft von {parseInt(impact.realValue).toLocaleString()}€.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Travel Simulator */}
        <div className="mb-16">
          <TimeTravelSimulator />
        </div>

        {/* Salary Inflation Tracker */}
        <div className="mb-16">
          <SalaryInflationTracker />
        </div>

        {/* Inflation Protection Assets */}
        <div ref={protectionRef} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🛡️ Inflationsschutz-Strategien
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inflationProtectionAssets.map((asset, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                  selectedAsset === index 
                    ? 'border-emerald-400 bg-white/10 scale-105' 
                    : 'border-white/10 hover:border-white/30'
                }`}
                onClick={() => setSelectedAsset(index)}
              >
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{asset.name}</h4>
                  <div className="text-3xl font-bold mb-2" style={{ color: asset.color }}>
                    {asset.protection}%
                  </div>
                  <div className="text-sm text-emerald-200">Inflationsschutz</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-emerald-200 text-sm">Risiko:</span>
                    <span className={`text-sm font-bold ${
                      asset.risk === 'Niedrig' ? 'text-green-400' : 
                      asset.risk === 'Mittel' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {asset.risk}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-emerald-200 text-sm">Zeithorizont:</span>
                    <span className="text-white text-sm font-bold">{asset.timeHorizon}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-emerald-100 text-sm">{asset.description}</p>
                </div>

                {/* Protection Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${asset.protection}%`,
                        backgroundColor: asset.color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Finance Tips */}
        <div ref={tipsRef}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            💰 Praktische Finanz-Tipps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalFinanceTips.map((tip, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">{tip.title}</h4>
                    <p className="text-emerald-200 mb-4">{tip.tip}</p>
                    <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-3">
                      <p className="text-emerald-100 text-sm">
                        <strong>Beispiel:</strong> {tip.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Dein Inflations-Aktionsplan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-bold text-white mb-2">1. Analysieren</h4>
                <p className="text-emerald-200 text-sm">Berechne deine persönliche Inflationsbetroffenheit</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-bold text-white mb-2">2. Schützen</h4>
                <p className="text-emerald-200 text-sm">Diversifiziere in inflationsgeschützte Anlagen</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-white mb-2">3. Optimieren</h4>
                <p className="text-emerald-200 text-sm">Passe deine Strategie regelmäßig an</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
