# 📈 Inflation - Interaktive Präsentation

Eine immersive, interaktive Web-Präsentation über das Thema Inflation, entwickelt mit Next.js, GSAP, Lenis und Chart.js. Diese Anwendung bietet eine einzigartige "Reise" durch die Welt der Inflation mit flüssigen Animationen, interaktiven Diagrammen und einer benutzerfreundlichen Navigation.

## 🌟 Features

### 🎬 Immersive Präsentation
- **Kamerafahrten**: Flüssige Parallax-Scrolling-Effekte und Pans zwischen Sections
- **Animierte Diagramme**: Chart.js-Diagramme, die sich schrittweise aufbauen
- **Pfeiltasten-Navigation**: Intuitive Navigation mit Pfeiltasten (→/←)
- **Smooth Scrolling**: Butter-weiche Scroll-Erfahrung mit Lenis

### 📊 Interaktive Inhalte
1. **Einführung**: Animierte Weltkarte mit Inflations-Hotspots
2. **Ursachen**: Interaktives Pie-Chart mit Hover-Effekten
3. **Auswirkungen**: Animierte Linienkurve mit Inflationsrate-Simulator
4. **Geschichte**: Zeitstrahl mit historischen Hyperinflations-Beispielen
5. **Quiz**: Interaktives Wissensquiz mit Feedback

### 🎨 Modernes Design
- **Responsive**: Optimiert für Desktop und Mobile
- **Dark Theme**: Professionelles Blau/Weiß-Design mit roten Akzenten
- **Glassmorphism**: Moderne Backdrop-Blur-Effekte
- **Custom Animationen**: GSAP-powered Animationen

## 🚀 Quick Start

### Voraussetzungen
- Node.js 18+
- npm, yarn, oder pnpm

### Installation

```bash
# Repository klonen
git clone <repository-url>
cd inflation1

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animationen**: GSAP mit ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Charts**: Chart.js mit react-chartjs-2
- **Deployment**: Vercel-ready

## 📁 Projektstruktur

```
src/
├── app/
│   ├── api/inflation/          # API Routes für Daten
│   ├── globals.css             # Globale Styles & Animationen
│   ├── layout.tsx              # Root Layout
│   └── page.tsx                # Hauptseite
├── components/
│   ├── IntroSection.tsx        # Einführungssektion
│   ├── CausesSection.tsx       # Ursachen mit Pie Chart
│   ├── EffectsSection.tsx      # Auswirkungen mit Line Chart
│   ├── HistorySection.tsx      # Historischer Zeitstrahl
│   ├── QuizSection.tsx         # Interaktives Quiz
│   └── Navigation.tsx          # Navigation & Progress
├── data/
│   └── inflationData.ts        # Mock-Daten & Typen
└── lib/
    ├── animations.ts           # GSAP Animation Utilities
    └── hooks.ts                # Custom React Hooks
```

## 🎮 Navigation

- **Pfeiltasten**: `→` Nächste Section, `←` Vorherige Section
- **Maus**: Klick auf Navigation-Dots (rechts)
- **Mobile**: Touch-Navigation unten
- **Scroll**: Natürliches Scrollen zwischen Sections

## 📊 Datenquellen

Die Anwendung verwendet realistische Mock-Daten basierend auf:
- Statistisches Bundesamt Deutschland
- Europäische Zentralbank (EZB)
- Historische Inflationsdaten

## 🚀 Deployment

### Vercel (Empfohlen)

```bash
# Vercel CLI installieren
npm i -g vercel

# Projekt deployen
vercel

# Oder über GitHub Integration
# 1. Repository zu GitHub pushen
# 2. Mit Vercel verbinden
# 3. Automatisches Deployment
```

### Andere Plattformen
- **Netlify**: `npm run build` → Upload `out/` Ordner
- **GitHub Pages**: Static Export aktivieren
- **Docker**: Dockerfile für Container-Deployment

## 🎯 Verwendung

### Als Live-Präsentation
1. Browser im Vollbild-Modus öffnen
2. Mit Pfeiltasten durch Sections navigieren
3. Interaktive Elemente für Engagement nutzen

### Als Website-Handout
1. Link in Microsoft Teams teilen
2. Teilnehmer können selbstständig navigieren
3. Quiz für Wissensüberprüfung nutzen

## 🔧 Anpassungen

### Daten ändern
Bearbeite `src/data/inflationData.ts` für:
- Inflationsraten
- Historische Ereignisse
- Quiz-Fragen
- Preisbeispiele

### Styling anpassen
- `src/app/globals.css`: Custom Animationen
- Tailwind-Klassen in Komponenten
- Farbschema in CSS-Variablen

### Neue Sections hinzufügen
1. Komponente in `src/components/` erstellen
2. In `src/app/page.tsx` importieren
3. Section-ID zu Navigation hinzufügen

## 📱 Browser-Kompatibilität

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Browser (iOS/Android)

## 🤝 Contributing

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE` für Details.

## 🙏 Danksagungen

- **GSAP**: Für die fantastischen Animationen
- **Chart.js**: Für die interaktiven Diagramme
- **Lenis**: Für das smooth Scrolling
- **Next.js Team**: Für das großartige Framework
- **Tailwind CSS**: Für das utility-first CSS

---

**Erstellt für eine 15-minütige Schulpräsentation über Inflation** 🎓

Bei Fragen oder Problemen, bitte ein Issue erstellen oder direkt kontaktieren.
