import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Globe2,
  ShieldCheck,
  Zap,
  Bot,
  MapPin,
  Palette,
  BarChart3,
  CreditCard,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

// ─── Icons bound to benefit slots ───────────────────────────────────────────
const BENEFIT_ICONS = [Bot, Palette, MapPin, BarChart3];

// ─── Full translation map ────────────────────────────────────────────────────
const translations = {
  en: {
    // Navbar
    navBrand: "Digital Offer",
    navSub: "Website Development",
    navViewPackages: "View Packages",

    // Hero
    heroBadge: "Professional business website proposal",
    heroTitle: "A complete digital presence built for trust, speed, and growth.",
    heroSubtitle:
      "A modern responsive website with professional branding, SEO, Google Maps integration, Telegram automation, multilingual options, and reliable hosting included.",
    heroExplore: "Explore Packages",
    heroPayment: "Payment Terms",

    // Featured hero card
    featuredLabel: "Featured Package",
    featuredBadge: "Most Popular",
    featuredName: "Business Package",
    featuredDesc: "Best value for a professional company website.",
    featuredPriceLabel: "Total Price",
    featuredHosting: "Hosting included for 2 years",
    featuredStats: [
      ["10 Pages", "Custom design"],
      ["2 Languages", "Client choice"],
      ["SEO", "Advanced setup"],
      ["Telegram Bot", "Smart leads"],
    ],

    // Benefits
    benefits: [
      {
        title: "Telegram Automation",
        text: "Receive contact and offer requests directly through Telegram with a smart bot integration.",
      },
      {
        title: "Visual Freedom",
        text: "Choose colors, visual direction, and branding preferences before development begins.",
      },
      {
        title: "Google Maps Ready",
        text: "Professional location integration to help visitors find your business easily.",
      },
      {
        title: "SEO & Analytics",
        text: "Search engine optimization, analytics setup, and structure built for business visibility.",
      },
    ],

    // Pricing section header
    pricingLabel: "Pricing Packages",
    pricingTitle: "Choose the right package for your business.",
    pricingSubtitle: "Transparent pricing, clear scope, and professional delivery.",
    fixedPrice: "fixed price",
    chooseCta: "Choose",

    // Package cards
    packages: [
      {
        name: "Basic Package",
        price: "€799",
        tagline: "Perfect for small businesses that need a professional online presence.",
        hosting: "Hosting included – 1 year",
        badge: null,
        highlight: false,
        icon: Globe2,
        featuresTitle: "Included Features",
        features: [
          "Modern Responsive Website",
          "Up to 5 Pages",
          "Mobile & Tablet Optimization",
          "Contact Form",
          "WhatsApp Integration",
          "Google Maps Integration",
          "Basic SEO Setup",
          "Social Media Links",
          "1 Language",
          "Custom Colors & Branding",
          "Domain Included",
          "SSL Security Certificate",
          "Speed Optimization",
          "Delivery in 7–14 Business Days",
        ],
      },
      {
        name: "Business Package",
        price: "€999",
        tagline: "Ideal for growing businesses looking for a complete professional solution.",
        hosting: "Hosting included – 2 years",
        badge: "Most Popular",
        highlight: true,
        icon: Star,
        featuresTitle: "Everything in Basic, plus",
        features: [
          "Up to 10 Pages",
          "Fully Custom Website Design",
          "Telegram Bot Integration",
          "Offer / Services Pages",
          "Advanced SEO Optimization",
          "Multi-language Support – 2 Languages Included",
          "Professional Logo Design",
          "Enhanced Branding & Visual Identity",
          "Performance Optimization",
          "Security Protection",
          "Basic Analytics Setup",
          "Admin Dashboard",
          "Priority Support",
          "Delivery in 14–20 Business Days",
          "Free SEO Audit",
          "Free Website Training Session",
          "Scalable Business Infrastructure",
        ],
      },
      {
        name: "Premium Package",
        price: "€1299",
        tagline:
          "Advanced premium solution for businesses that want maximum performance and scalability.",
        hosting: "Hosting included – 3 years",
        badge: "Premium",
        highlight: false,
        icon: Crown,
        featuresTitle: "Everything in Business, plus",
        features: [
          "Unlimited Pages",
          "Premium UI/UX Design",
          "Advanced Telegram Automation",
          "AI Chat Integration",
          "Full Multi-language System",
          "Advanced SEO Strategy",
          "Booking / Reservation System",
          "Dynamic Offers Management",
          "Google Analytics & Search Console",
          "Premium Security Protection",
          "High-Speed Optimization",
          "Custom Admin Panel",
          "Professional Branding Kit",
          "Premium Logo Design",
          "3 Months Maintenance Included",
          "Technical Support & Training",
          "Priority Delivery in 20–35 Business Days",
          "Advanced Performance Optimization",
          "Enhanced Security Monitoring",
          "Scalable Business Infrastructure",
        ],
      },
    ],

    // Languages section
    langSectionLabel: "Languages",
    langTitle: "Multi-language support available.",
    langDesc:
      "The Business Package includes 2 languages. Choose any two from the available list. The Premium Package includes full multi-language support.",
    langList: ["English", "Dutch", "German", "French"],

    // Payment terms
    paymentLabel: "Payment Terms",
    paymentTitle: "Clear and milestone-based payment",
    paymentSteps: [
      { pct: "30%", title: "Advance Payment", desc: "Required before starting the project." },
      {
        pct: "40%",
        title: "Mid-Project Payment",
        desc: "Due when design and development reach 50% completion.",
      },
      {
        pct: "30%",
        title: "Final Payment",
        desc: "Due after final delivery and before website launch.",
      },
    ],
    paymentNotes: [
      "Project starts after the first payment is received.",
      "All payments are non-refundable once work has started.",
      "Additional features or revisions outside the agreed scope may require extra charges.",
      "Delivery timelines may vary depending on client feedback and content availability.",
    ],

    // Contact CTA
    ctaTitle: "Ready to start your website project?",
    ctaDesc:
      "Choose the package that fits your business and we will prepare the next steps, project scope, and delivery timeline.",
    ctaButton: "Contact Now",
  },

  pl: {
    // Navbar
    navBrand: "Digital Offer",
    navSub: "Tworzenie Stron",
    navViewPackages: "Zobacz Pakiety",

    // Hero
    heroBadge: "Profesjonalna propozycja strony dla firm",
    heroTitle:
      "Kompletna obecność cyfrowa stworzona z myślą o zaufaniu, szybkości i rozwoju.",
    heroSubtitle:
      "Nowoczesna responsywna strona internetowa z profesjonalnym brandingiem, SEO, integracją Google Maps, automatyzacją Telegram oraz niezawodnym hostingiem w cenie.",
    heroExplore: "Przeglądaj Pakiety",
    heroPayment: "Warunki Płatności",

    // Featured hero card
    featuredLabel: "Polecany Pakiet",
    featuredBadge: "Najpopularniejszy",
    featuredName: "Pakiet Business",
    featuredDesc: "Najlepsza wartość dla profesjonalnej strony firmowej.",
    featuredPriceLabel: "Cena całkowita",
    featuredHosting: "Hosting w cenie na 2 lata",
    featuredStats: [
      ["10 podstron", "Indywidualny projekt"],
      ["2 języki", "Wybór klienta"],
      ["SEO", "Zaawansowana konfiguracja"],
      ["Bot Telegram", "Inteligentne leady"],
    ],

    // Benefits
    benefits: [
      {
        title: "Automatyzacja Telegram",
        text: "Otrzymuj wiadomości kontaktowe oraz zapytania ofertowe bezpośrednio przez Telegram dzięki inteligentnej integracji bota.",
      },
      {
        title: "Swoboda Wizualna",
        text: "Klient może wybrać kolory, styl wizualny oraz preferencje brandingowe przed rozpoczęciem projektu.",
      },
      {
        title: "Gotowe Google Maps",
        text: "Profesjonalna integracja Google Maps pomagająca klientom łatwo odnaleźć firmę.",
      },
      {
        title: "SEO i Analityka",
        text: "Optymalizacja SEO, konfiguracja analityki oraz struktura przygotowana pod widoczność firmy w wyszukiwarkach.",
      },
    ],

    // Pricing section header
    pricingLabel: "Pakiety Cenowe",
    pricingTitle: "Wybierz odpowiedni pakiet dla swojej firmy.",
    pricingSubtitle:
      "Przejrzyste ceny, jasno określony zakres usług oraz profesjonalna realizacja.",
    fixedPrice: "cena stała",
    chooseCta: "Wybierz",

    // Package cards
    packages: [
      {
        name: "Pakiet Basic",
        price: "€799",
        tagline: "Idealny dla małych firm potrzebujących profesjonalnej obecności online.",
        hosting: "Hosting w cenie – 1 rok",
        badge: null,
        highlight: false,
        icon: Globe2,
        featuresTitle: "Funkcje w cenie",
        features: [
          "Nowoczesna responsywna strona internetowa",
          "Do 5 podstron",
          "Optymalizacja na telefon i tablet",
          "Formularz kontaktowy",
          "Integracja WhatsApp",
          "Integracja Google Maps",
          "Podstawowa konfiguracja SEO",
          "Linki do mediów społecznościowych",
          "1 język",
          "Indywidualne kolory i branding",
          "Domena w cenie",
          "Certyfikat SSL",
          "Optymalizacja szybkości",
          "Realizacja w 7–14 dni roboczych",
        ],
      },
      {
        name: "Pakiet Business",
        price: "€999",
        tagline:
          "Idealny dla rozwijających się firm poszukujących kompletnego profesjonalnego rozwiązania.",
        hosting: "Hosting w cenie – 2 lata",
        badge: "Najpopularniejszy",
        highlight: true,
        icon: Star,
        featuresTitle: "Wszystko z Pakietu Basic oraz:",
        features: [
          "Do 10 podstron",
          "W pełni indywidualny projekt strony",
          "Integracja z botem Telegram",
          "Strony ofertowe / usługowe",
          "Zaawansowana optymalizacja SEO",
          "Obsługa wielu języków – 2 języki w cenie",
          "Profesjonalny projekt logo",
          "Rozszerzony branding i identyfikacja wizualna",
          "Optymalizacja wydajności",
          "Zabezpieczenia strony",
          "Podstawowa konfiguracja analityki",
          "Panel administracyjny",
          "Priorytetowe wsparcie",
          "Realizacja w 14–20 dni roboczych",
          "Darmowy audyt SEO",
          "Darmowe szkolenie z obsługi strony",
          "Skalowalna infrastruktura biznesowa",
        ],
      },
      {
        name: "Pakiet Premium",
        price: "€1299",
        tagline:
          "Zaawansowane rozwiązanie premium dla firm oczekujących maksymalnej wydajności i skalowalności.",
        hosting: "Hosting w cenie – 3 lata",
        badge: "Premium",
        highlight: false,
        icon: Crown,
        featuresTitle: "Wszystko z Pakietu Business oraz:",
        features: [
          "Nielimitowana liczba podstron",
          "Premium UI/UX Design",
          "Zaawansowana automatyzacja Telegram",
          "Integracja AI Chat",
          "Pełny system wielojęzyczny",
          "Zaawansowana strategia SEO",
          "System rezerwacji / booking",
          "Dynamiczne zarządzanie ofertami",
          "Google Analytics oraz Search Console",
          "Zaawansowane zabezpieczenia premium",
          "Wysoka optymalizacja szybkości",
          "Indywidualny panel administracyjny",
          "Profesjonalny branding firmy",
          "Profesjonalne logo premium",
          "3 miesiące wsparcia technicznego",
          "Szkolenie i wsparcie techniczne",
          "Priorytetowa realizacja w 20–35 dni roboczych",
          "Zaawansowana optymalizacja wydajności",
          "Rozszerzony monitoring bezpieczeństwa",
          "Skalowalna infrastruktura biznesowa",
        ],
      },
    ],

    // Languages section
    langSectionLabel: "Języki",
    langTitle: "Obsługa wielu języków dostępna.",
    langDesc:
      "Pakiet Business zawiera 2 języki. Klient może wybrać dowolne dwa języki z dostępnej listy. Pakiet Premium zawiera pełną obsługę wielu języków.",
    langList: ["Angielski", "Holenderski", "Niemiecki", "Francuski"],

    // Payment terms
    paymentLabel: "Warunki Płatności",
    paymentTitle: "Jasna płatność etapami",
    paymentSteps: [
      { pct: "30%", title: "Zaliczka", desc: "Wymagane przed rozpoczęciem projektu." },
      {
        pct: "40%",
        title: "Płatność w trakcie projektu",
        desc: "Płatność po ukończeniu około 50% projektu.",
      },
      {
        pct: "30%",
        title: "Płatność końcowa",
        desc: "Płatność po zakończeniu projektu i przed publikacją strony.",
      },
    ],
    paymentNotes: [
      "Projekt rozpoczyna się po otrzymaniu pierwszej płatności.",
      "Wszystkie płatności są bezzwrotne po rozpoczęciu prac.",
      "Dodatkowe funkcje lub poprawki poza ustalonym zakresem mogą wymagać dodatkowej opłaty.",
      "Termin realizacji może zależeć od szybkości dostarczenia materiałów przez klienta.",
    ],

    // Contact CTA
    ctaTitle: "Gotowy, aby rozpocząć projekt swojej strony internetowej?",
    ctaDesc:
      "Wybierz pakiet dopasowany do potrzeb Twojej firmy, a przygotujemy kolejne etapy projektu, zakres prac oraz harmonogram realizacji.",
    ctaButton: "Skontaktuj się Teraz",
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function Feature({ text }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-700">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check size={13} strokeWidth={3} />
      </span>
      <span>{text}</span>
    </li>
  );
}

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-1">
      {["en", "pl"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            language === lang
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

function PackageCard({ item, index, t }) {
  const Icon = item.icon;
  // Derive a short name for the CTA: strip "Package" / "Pakiet"
  const shortName = item.name
    .replace(/\bPackage\b/g, "")
    .replace(/\bPakiet\b/g, "")
    .trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-[2rem] border bg-white p-6 shadow-premium ${
        item.highlight
          ? "border-blue-500 ring-4 ring-blue-100 scale-[1.02]"
          : "border-slate-200"
      }`}
    >
      {item.badge && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg ${
            item.highlight ? "bg-blue-600" : "bg-slate-900"
          }`}
        >
          {item.badge}
        </div>
      )}

      <div className="mb-5">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-extrabold text-slate-950">{item.name}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.tagline}</p>
      </div>

      <div className="mb-5 rounded-3xl bg-slate-50 p-5">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black tracking-tight text-slate-950">
            {item.price}
          </span>
          <span className="pb-1 text-sm font-medium text-slate-500">{t.fixedPrice}</span>
        </div>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
          {item.hosting}
        </p>
      </div>

      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
        {item.featuresTitle}
      </h4>

      <ul className="flex-1 space-y-2.5">
        {item.features.map((feature) => (
          <Feature key={feature} text={feature} />
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-7 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition-colors ${
          item.highlight
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {t.chooseCta} {shortName}
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(180deg,#ffffff,#f8fafc)]">

      {/* ── NAV + HERO ── */}
      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Navbar */}
          <nav className="mb-10 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-sm font-black leading-none text-slate-950">{t.navBrand}</p>
                <p className="text-xs text-slate-500">{t.navSub}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <a
                href="#packages"
                className="hidden rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800 sm:inline-block"
              >
                {t.navViewPackages}
              </a>
            </div>
          </nav>

          {/* Hero grid */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <Zap size={15} />
                {t.heroBadge}
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {t.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
                >
                  {t.heroExplore}
                  <ArrowRight size={17} />
                </a>
                <a
                  href="#payment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-extrabold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  {t.heroPayment}
                  <CreditCard size={17} />
                </a>
              </div>
            </motion.div>

            {/* Featured hero card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="rounded-[2.2rem] border border-white bg-white/80 p-5 shadow-premium backdrop-blur"
            >
              <div className="rounded-[1.7rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-blue-200">{t.featuredLabel}</p>
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-black uppercase tracking-wide">
                    {t.featuredBadge}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-black">{t.featuredName}</h2>
                <p className="mt-2 text-sm text-slate-300">{t.featuredDesc}</p>
                <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-bold text-slate-500">{t.featuredPriceLabel}</p>
                  <p className="mt-1.5 text-5xl font-black">€999</p>
                  <p className="mt-3 text-sm font-semibold text-emerald-700">
                    {t.featuredHosting}
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {t.featuredStats.map(([title, sub]) => (
                    <div key={title} className="rounded-2xl bg-white/10 p-4">
                      <p className="font-black">{title}</p>
                      <p className="mt-0.5 text-xs text-slate-300">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={21} />
                </div>
                <h3 className="font-black text-slate-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="packages" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
              {t.pricingLabel}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {t.pricingTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{t.pricingSubtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {t.packages.map((item, index) => (
              <PackageCard key={item.name} item={item} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
                {t.langSectionLabel}
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">{t.langTitle}</h2>
              <p className="mt-4 leading-7 text-slate-600">{t.langDesc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.langList.map((lang) => (
                <div
                  key={lang}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center font-bold text-slate-800"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT TERMS ── */}
      <section id="payment" className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-6 text-white shadow-premium sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500">
              <CreditCard size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-200">{t.paymentLabel}</p>
              <h2 className="text-2xl font-black">{t.paymentTitle}</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.paymentSteps.map((step) => (
              <div key={step.title} className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-black">{step.pct}</p>
                <h3 className="mt-3 font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-5 text-slate-950">
            <ul className="space-y-3">
              {t.paymentNotes.map((note) => (
                <Feature key={note} text={note} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="px-5 pb-16 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-600 p-8 text-center text-white shadow-premium sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">{t.ctaDesc}</p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-blue-700 transition-colors hover:bg-blue-50"
          >
            {t.ctaButton}
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
