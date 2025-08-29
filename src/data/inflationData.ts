export interface InflationData {
  year: number;
  rate: number;
  country?: string;
}

export interface InflationCause {
  category: string;
  percentage: number;
  color: string;
  description: string;
}

export interface HistoricalEvent {
  year: number;
  country: string;
  rate: number;
  title: string;
  description: string;
  impact: string;
}

// Quelle: Statistisches Bundesamt Deutschland (Destatis)
export const inflationRatesGermany: InflationData[] = [
  { year: 2019, rate: 1.4 }, // Destatis
  { year: 2020, rate: 0.5 }, // Corona-Jahr, niedrige Inflation
  { year: 2021, rate: 3.1 }, // Post-Corona Erholung
  { year: 2022, rate: 6.9 }, // Ukraine-Krieg, Energiekrise
  { year: 2023, rate: 5.9 }, // Weiterhin erhöht
  { year: 2024, rate: 2.2 }, // Destatis: Rückgang auf 2,2%
  { year: 2025, rate: 2.0 }, // EZB-Prognose: Annäherung an 2%-Ziel
];

// Basierend auf Bundesbank und EZB-Analysen
export const inflationCauses: InflationCause[] = [
  {
    category: "Nachfrageinflation",
    percentage: 30,
    color: "#EF4444",
    description: "Steigende Nachfrage bei begrenztem Angebot (z.B. Post-Corona-Boom)"
  },
  {
    category: "Angebotsinflation",
    percentage: 25,
    color: "#F59E0B",
    description: "Lieferkettenprobleme, Rohstoffknappheit, Energiekrise"
  },
  {
    category: "Geldpolitik",
    percentage: 20,
    color: "#3B82F6",
    description: "Niedrigzinspolitik und Quantitative Lockerung der Zentralbanken"
  },
  {
    category: "Lohn-Preis-Spirale",
    percentage: 15,
    color: "#10B981",
    description: "Steigende Löhne führen zu höheren Preisen und umgekehrt"
  },
  {
    category: "Importierte Inflation",
    percentage: 10,
    color: "#8B5CF6",
    description: "Höhere Preise für importierte Güter (Energie, Rohstoffe)"
  }
];

// Quelle: Historische Wirtschaftsdaten, Zentralbanken
export const historicalEvents: HistoricalEvent[] = [
  {
    year: 1923,
    country: "Deutschland",
    rate: 325000000, // 325 Millionen % - Höhepunkt November 1923
    title: "Hyperinflation Weimarer Republik",
    description: "Reparationszahlungen und Ruhrbesetzung führten zum Kollaps der Reichsmark",
    impact: "1 US-Dollar = 4,2 Billionen Mark. Löhne wurden täglich ausgezahlt"
  },
  {
    year: 1946,
    country: "Ungarn",
    rate: 13600000000000000, // 13,6 Billiarden % - höchste je gemessene Inflation
    title: "Pengő-Hyperinflation - Weltrekord",
    description: "Kriegsschäden und politische Instabilität nach dem 2. Weltkrieg",
    impact: "Preise verdoppelten sich alle 15 Stunden. 100 Quintillionen Pengő-Scheine"
  },
  {
    year: 2008,
    country: "Zimbabwe",
    rate: 89700000000, // 89,7 Milliarden % - offiziell gemessen
    title: "Zimbabwe-Dollar Hyperinflation",
    description: "Landreformen, politische Krise und Wirtschaftsmismanagement",
    impact: "100-Billionen-Dollar-Scheine. US-Dollar wurde de facto Währung"
  },
  {
    year: 1979,
    country: "USA",
    rate: 13.3, // Korrigiert: 1979, nicht 1980
    title: "Stagflation der 1970er",
    description: "Ölkrisen 1973 und 1979 plus expansive Geldpolitik",
    impact: "Fed-Chef Volcker hob Zinsen auf über 20% an"
  },
  {
    year: 1989,
    country: "Argentinien",
    rate: 3079,
    title: "Argentinische Hyperinflation",
    description: "Staatsverschuldung und politische Instabilität",
    impact: "Mehrere Währungsreformen, Peso wurde mehrfach abgewertet"
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Was passiert mit deinem Geld bei 5% Inflation pro Jahr?",
    options: [
      "Es wird mehr wert",
      "Es verliert 5% seiner Kaufkraft",
      "Es bleibt gleich wertvoll",
      "Es verdoppelt sich"
    ],
    correct: 1,
    explanation: "Bei 5% Inflation verliert dein Geld jährlich 5% seiner Kaufkraft. Was heute 100€ kostet, kostet nächstes Jahr 105€."
  },
  {
    id: 2,
    question: "Welche Institution kontrolliert die Inflation in der Eurozone?",
    options: [
      "Deutsche Bundesbank",
      "Europäische Zentralbank (EZB)",
      "Europäisches Parlament",
      "Bundesregierung"
    ],
    correct: 1,
    explanation: "Die EZB ist verantwortlich für die Geldpolitik im Euroraum und hat das Ziel, die Inflation bei etwa 2% zu halten."
  },
  {
    id: 3,
    question: "Was ist das Inflationsziel der EZB?",
    options: [
      "0% (keine Inflation)",
      "Etwa 2%",
      "5-10%",
      "So niedrig wie möglich"
    ],
    correct: 1,
    explanation: "Die EZB strebt eine Inflation von etwa 2% an, da dies als optimal für eine gesunde Wirtschaft gilt."
  },
  {
    id: 4,
    question: "Was ist der Hauptunterschied zwischen Inflation und Deflation?",
    options: [
      "Inflation = steigende Preise, Deflation = fallende Preise",
      "Inflation = fallende Preise, Deflation = steigende Preise",
      "Beide bedeuten das Gleiche",
      "Deflation gibt es nicht"
    ],
    correct: 0,
    explanation: "Inflation bedeutet allgemein steigende Preise, während Deflation fallende Preise bedeutet. Beide können wirtschaftliche Probleme verursachen."
  },
  {
    id: 5,
    question: "Welcher Faktor war hauptverantwortlich für die hohe Inflation 2022 in Deutschland?",
    options: [
      "Zu hohe Löhne",
      "Ukraine-Krieg und Energiekrise",
      "Zu viel Geld im Umlauf",
      "Steigende Mieten"
    ],
    correct: 1,
    explanation: "Der Ukraine-Krieg führte zu drastisch steigenden Energie- und Rohstoffpreisen, was die Inflation 2022 auf 6,9% ansteigen ließ."
  },
  {
    id: 6,
    question: "Was ist eine 'Lohn-Preis-Spirale'?",
    options: [
      "Löhne und Preise fallen gleichzeitig",
      "Steigende Löhne führen zu höheren Preisen, die wiederum höhere Löhne fordern",
      "Preise steigen, aber Löhne bleiben gleich",
      "Ein Wirtschaftsmodell der EZB"
    ],
    correct: 1,
    explanation: "Bei einer Lohn-Preis-Spirale führen höhere Löhne zu steigenden Produktionskosten und Preisen, was wiederum Forderungen nach höheren Löhnen auslöst."
  },
  {
    id: 7,
    question: "Wie wirkt sich Inflation auf Sparer aus?",
    options: [
      "Sparer profitieren immer von Inflation",
      "Inflation hat keinen Effekt auf Ersparnisse",
      "Ersparnisse verlieren real an Wert, wenn die Zinsen niedriger als die Inflation sind",
      "Ersparnisse werden automatisch inflationsgeschützt"
    ],
    correct: 2,
    explanation: "Wenn die Zinsen auf Sparkonten niedriger sind als die Inflationsrate, verlieren Ersparnisse real an Kaufkraft. Bei 3% Inflation und 1% Zinsen verliert man real 2% pro Jahr."
  }
];

// Quelle: Statistisches Bundesamt, Verbraucherpreisindex
export const priceExamples = [
  {
    item: "Brot (1kg)",
    price2020: 1.37,
    price2024: 1.89,
    increase: 38
  },
  {
    item: "Benzin (1L)",
    price2020: 1.27,
    price2024: 1.73,
    increase: 36
  },
  {
    item: "Miete (m²/Monat)",
    price2020: 8.74,
    price2024: 11.40,
    increase: 30
  },
  {
    item: "Strom (kWh)",
    price2020: 0.31,
    price2024: 0.48,
    increase: 55
  },
  {
    item: "Restaurant-Besuch",
    price2020: 12.50,
    price2024: 16.80,
    increase: 34
  },
  {
    item: "Öffentliche Verkehrsmittel",
    price2020: 2.90,
    price2024: 3.50,
    increase: 21
  }
];

// Zusätzliche Inflationsdaten für tiefere Einblicke
export const inflationByCategory = [
  { category: "Energie", rate2024: 1.1, rate2022: 35.7, description: "Strom, Gas, Kraftstoffe" },
  { category: "Nahrungsmittel", rate2024: 1.4, rate2022: 13.4, description: "Lebensmittel und Getränke" },
  { category: "Wohnung", rate2024: 2.8, rate2022: 2.9, description: "Miete, Nebenkosten" },
  { category: "Verkehr", rate2024: 2.2, rate2022: 7.6, description: "ÖPNV, Kraftfahrzeuge" },
  { category: "Dienstleistungen", rate2024: 3.9, rate2022: 3.1, description: "Restaurants, Friseur, etc." }
];

export const realWageData = [
  { year: 2019, nominalGrowth: 3.2, realGrowth: 1.8 },
  { year: 2020, nominalGrowth: 1.4, realGrowth: 0.9 },
  { year: 2021, nominalGrowth: 2.8, realGrowth: -0.3 },
  { year: 2022, nominalGrowth: 2.6, realGrowth: -4.3 },
  { year: 2023, nominalGrowth: 4.1, realGrowth: -1.8 },
  { year: 2024, nominalGrowth: 3.8, realGrowth: 1.6 }
];
