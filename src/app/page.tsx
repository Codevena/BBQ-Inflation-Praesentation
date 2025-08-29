'use client';

import { useEffect } from 'react';
import { useLenis, useKeyboardNavigation } from '@/lib/hooks';
import IntroSection from '@/components/IntroSection';
import CausesSection from '@/components/CausesSection';
import EffectsSection from '@/components/EffectsSection';
import MeasurementSection from '@/components/MeasurementSection';
import ECBPolicySection from '@/components/ECBPolicySection';
import InflationEverydaySection from '@/components/InflationEverydaySection';
import GlobalPerspectiveSection from '@/components/GlobalPerspectiveSection';
import HistorySection from '@/components/HistorySection';
import GlossarySection from '@/components/GlossarySection';
import QuizSection from '@/components/QuizSection';
import Navigation from '@/components/Navigation';

const sections = ['#intro', '#causes', '#effects', '#measurement', '#ecb-policy', '#everyday', '#global', '#history', '#glossary', '#quiz'];

export default function Home() {
  const { lenis } = useLenis();
  const { currentSection, navigateToSection } = useKeyboardNavigation(sections);

  useEffect(() => {
    // Preload data
    fetch('/api/inflation?type=all')
      .then(res => res.json())
      .then(data => console.log('Data preloaded:', data))
      .catch(err => console.error('Failed to preload data:', err));
  }, []);

  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation
        currentSection={currentSection}
        onNavigate={navigateToSection}
        sections={sections}
      />

      {/* Sections */}
      <IntroSection />
      <CausesSection />
      <EffectsSection />
      <MeasurementSection />
      <ECBPolicySection />
      <InflationEverydaySection />
      <GlobalPerspectiveSection />
      <HistorySection />
      <GlossarySection />
      <QuizSection />

      {/* Keyboard Instructions */}
      <div className="fixed bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-sm z-50">
        <div className="flex items-center gap-2 text-white/80">
          <kbd className="px-2 py-1 bg-white/20 rounded text-xs">→</kbd>
          <span>Nächste Sektion</span>
        </div>
        <div className="flex items-center gap-2 text-white/80 mt-1">
          <kbd className="px-2 py-1 bg-white/20 rounded text-xs">←</kbd>
          <span>Vorherige Sektion</span>
        </div>
      </div>
    </main>
  );
}
