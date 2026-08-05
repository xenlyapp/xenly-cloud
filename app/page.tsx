const projects = [
  {
    category: "Restauracja",
    title: "Miejsce, do którego chce się wracać.",
    description: "Koncepcja strony restauracji, która stawia na klimat, menu i prostą rezerwację stolika.",
    type: "restauracja",
  },
  {
    category: "Barber",
    title: "Charakter, który widać z daleka.",
    description: "Koncepcja strony barbershopu z wyrazistą ofertą i szybkim zapisem na wizytę.",
    type: "barber",
  },
  {
    category: "Hydraulik",
    title: "Pomoc, gdy liczy się czas.",
    description: "Koncepcja strony lokalnego hydraulika, która jasno prowadzi do kontaktu i zgłoszenia usługi.",
    type: "hydraulik",
  },
];

const services = [
  {
    icon: "strona",
    title: "Landing Page",
    description: "Nowoczesna jednostronicowa strona dla restauracji, salonów i lokalnych firm.",
  },
  {
    icon: "firma",
    title: "Strona firmowa",
    description: "Profesjonalna strona z podstronami dopasowanymi do potrzeb Twojej firmy.",
  },
  {
    icon: "projekt",
    title: "Projekt indywidualny",
    description: "Projekt tworzony od podstaw, bez gotowych szablonów, według briefu klienta.",
  },
  {
    icon: "wsparcie",
    title: "Publikacja i wdrożenie",
    description: "Pomagam uruchomić stronę, podłączyć domenę oraz zadbać o sprawne wdrożenie projektu.",
  },
];

const plans = [
  {
    name: "Start",
    subtitle: "Landing Page",
    oldPrice: "699 zł",
    price: "599 zł",
    badge: "Oferta na start",
    note: "Pierwsze 10 realizacji",
    features: [
      "Indywidualny projekt",
      "Responsywność",
      "Formularz kontaktowy",
      "Mapa Google",
      "Podstawowe SEO",
      "Pomoc z domeną i publikacją",
      "Realizacja: 3–7 dni",
    ],
  },
  {
    name: "Firma",
    subtitle: "Strona firmowa",
    oldPrice: undefined,
    price: "od 1499 zł",
    badge: undefined,
    note: undefined,
    features: [
      "Indywidualny projekt",
      "Kilka podstron",
      "Formularz kontaktowy",
      "Mapa Google",
      "Podstawowe SEO",
      "Pomoc z domeną i publikacją",
      "Możliwość opieki technicznej",
    ],
  },
  {
    name: "Premium",
    subtitle: "Projekt indywidualny",
    oldPrice: undefined,
    price: "od 2499 zł",
    badge: undefined,
    note: undefined,
    features: [
      "Projekt od podstaw",
      "Rozbudowana struktura",
      "Indywidualne funkcje",
      "Zaawansowane animacje",
      "Optymalizacja SEO",
      "Priorytetowe wsparcie",
      "Opcjonalna miesięczna opieka",
    ],
  },
];

const siteUrl = "https://xenly.cloud";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Xenly Cloud",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      description: "Nowoczesne strony internetowe dla lokalnych firm.",
      email: "kontakt@xenly.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "obsługa klienta",
        email: "kontakt@xenly.app",
        availableLanguage: "pl",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Xenly Cloud",
      url: siteUrl,
      inLanguage: "pl-PL",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local-business`,
      name: "Xenly Cloud",
      url: siteUrl,
      email: "kontakt@xenly.app",
      description: "Nowoczesne strony internetowe dla lokalnych firm.",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pl-PL",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: "Xenly Cloud",
      url: siteUrl,
      email: "kontakt@xenly.app",
      description: "Nowoczesne strony internetowe dla lokalnych firm.",
      serviceType: "Projektowanie stron internetowych",
      provider: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pl-PL",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "O firmie", item: `${siteUrl}/#o-nas` },
        { "@type": "ListItem", position: 2, name: "Realizacje", item: `${siteUrl}/#realizacje` },
        { "@type": "ListItem", position: 3, name: "Usługi", item: `${siteUrl}/#uslugi` },
        { "@type": "ListItem", position: 4, name: "Cennik", item: `${siteUrl}/#cennik` },
        { "@type": "ListItem", position: 5, name: "Dlaczego Xenly", item: `${siteUrl}/#dlaczego-xenly` },
        { "@type": "ListItem", position: 6, name: "Kontakt", item: `${siteUrl}/#kontakt` },
      ],
    },
  ],
};

const benefits = [
  {
    icon: "projekt",
    title: "Projekt od podstaw",
    description: "Nie korzystam z gotowych szablonów. Każda strona jest projektowana indywidualnie.",
  },
  {
    icon: "design",
    title: "Nowoczesny design",
    description: "Minimalistyczny, szybki i dopracowany wygląd dopasowany do Twojej marki.",
  },
  {
    icon: "urzadzenia",
    title: "Responsywność",
    description: "Strona działa perfekcyjnie na telefonach, tabletach i komputerach.",
  },
  {
    icon: "seo",
    title: "SEO w standardzie",
    description: "Każda realizacja jest przygotowana pod dobre pozycjonowanie w Google.",
  },
  {
    icon: "publikacja",
    title: "Pomoc z publikacją",
    description: "Pomogę z domeną, hostingiem i uruchomieniem strony.",
  },
  {
    icon: "kontakt",
    title: "Bezpośredni kontakt",
    description: "Od pierwszej wiadomości rozmawiasz bezpośrednio z osobą tworzącą projekt.",
  },
];

const appFeatures = [
  { name: "CRM", icon: "crm" },
  { name: "AI Assistant", icon: "ai" },
  { name: "Invoices", icon: "invoices" },
  { name: "Projects", icon: "projects" },
  { name: "Clients", icon: "clients" },
  { name: "Automations", icon: "automations" },
];

function AppFeatureIcon({ icon }: { icon: string }) {
  if (icon === "crm") {
    return <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
  }

  if (icon === "ai") {
    return <path d="m12 3-1.4 4.1a5.5 5.5 0 0 1-3.5 3.5L3 12l4.1 1.4a5.5 5.5 0 0 1 3.5 3.5L12 21l1.4-4.1a5.5 5.5 0 0 1 3.5-3.5L21 12l-4.1-1.4a5.5 5.5 0 0 1-3.5-3.5L12 3Z" />;
  }

  if (icon === "invoices") {
    return <path d="M6 3h9l3 3v15l-3-2-3 2-3-2-3 2V3Zm8 0v4h4M9 10h6M9 14h6" />;
  }

  if (icon === "projects") {
    return <path d="M3 7h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 0V5a2 2 0 0 1 2-2h5l2 2h4" />;
  }

  if (icon === "clients") {
    return <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />;
  }

  return <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />;
}

function BenefitIcon({ icon }: { icon: string }) {
  if (icon === "projekt") {
    return <path d="m14 4 6 6M5 19l1.5-4.5L15 6l3 3-8.5 8.5L5 19Z" />;
  }

  if (icon === "design") {
    return <path d="M12 3a9 9 0 1 0 9 9M12 3v9h9M7 17l4-4M16 6h.01" />;
  }

  if (icon === "urzadzenia") {
    return <path d="M4 5h16v11H4zM9 20h6M12 16v4M7 8h.01" />;
  }

  if (icon === "seo") {
    return <path d="M20 20l-4.2-4.2M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Zm-2-6.5 1.4 1.4 3-3" />;
  }

  if (icon === "publikacja") {
    return <path d="M12 16V3m0 0L7 8m5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />;
  }

  return <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-2-3.5V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />;
}

export default function Home() {
  return (
    <>
      <main>
      <section
        aria-labelledby="hero-heading"
        className="px-6 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24"
        id="o-nas"
      >
        <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#3a81ff]/30 bg-[#133169]/45 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#75b0ff]">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-[#3a81ff]" />
              PREMIUMOWE STRONY DLA FIRM LOKALNYCH
            </p>
            <h1
              className="mt-7 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl lg:leading-[1.02]"
              id="hero-heading"
            >
              Projektujemy nowoczesne strony internetowe dla lokalnych firm.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Pomagamy zamieniać wyszukiwania w wizyty, telefony i rezerwacje.
              Tak, aby Twoja firma była łatwa do znalezienia i wybrania.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#087cf0] px-5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(8,124,240,0.24)] transition-colors duration-200 hover:bg-[#1a92ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
                href="#realizacje"
              >
                Zobacz realizacje
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
                href="mailto:kontakt@xenly.app"
              >
                Darmowa wycena
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Bez zobowiązań. Odpowiadamy zwykle w ciągu jednego dnia roboczego.</p>
          </div>

          <div
            aria-label="Podgląd nowoczesnej strony lokalnej firmy"
            className="rounded-[28px] border border-[#293143] bg-[#0e1424] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.32)]"
            role="img"
          >
            <div className="overflow-hidden rounded-[20px] border border-[#293143] bg-[#090d17]">
              <div className="flex h-11 items-center gap-2 border-b border-[#293143] bg-[#121827] px-4">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-[#f16f7b]" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-[#f0bf63]" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-[#61d1a5]" />
                <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.06]" />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                  <span className="font-semibold tracking-[0.16em] text-[#8dbbff]">GABINET NOVA</span>
                  <span>O nas&nbsp;&nbsp;&nbsp; Usługi&nbsp;&nbsp;&nbsp; Kontakt</span>
                </div>
                <div className="mt-11 grid gap-7 sm:grid-cols-[1fr_0.72fr] sm:items-end">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.17em] text-[#8e7dff]">DENTYSTA BLISKO CIEBIE</p>
                    <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                      Zdrowy uśmiech zaczyna się od rozmowy.
                    </p>
                    <div className="mt-7 inline-flex rounded-lg bg-[#087cf0] px-4 py-2.5 text-sm font-semibold text-white">
                      Umów wizytę
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#3a4a70] bg-[#182545]">
                    <div className="absolute inset-x-5 top-5 h-px bg-[#7199ec]/45" />
                    <div className="absolute inset-x-5 top-10 h-px bg-[#7199ec]/20" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#101a35]/90 p-3">
                      <p className="text-xs text-slate-400">Godziny przyjęć</p>
                      <p className="mt-1 text-sm font-semibold text-white">12:00 — 22:00</p>
                    </div>
                    <div aria-hidden="true" className="absolute left-1/2 top-[42%] size-20 -translate-x-1/2 rounded-full border-[10px] border-[#86aaff]/55 shadow-[0_0_0_8px_rgba(134,170,255,0.08)]" />
                  </div>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  <div className="h-2 rounded-full bg-[#628eff]/70" />
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="xenly-app-heading"
        className="relative overflow-hidden border-y border-[#1c2433] bg-[#090e19] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
        data-reveal
      >
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#155cc7]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#5596ff]">XENLY ECOSYSTEM</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl" id="xenly-app-heading">
              Xenly App
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
              The intelligent platform for managing your business.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {appFeatures.map((feature) => (
              <article
                className="group flex items-center gap-5 rounded-[24px] border border-[#252d3c] bg-[#0d1322]/90 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.14)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#3e5f9e] hover:bg-[#10182d] hover:shadow-[0_24px_58px_rgba(0,0,0,0.22)]"
                key={feature.name}
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#344364] bg-[#141f3d] text-[#82b4ff] transition-colors duration-300 group-hover:border-[#4d69a0] group-hover:bg-[#18284b]">
                  <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                    <AppFeatureIcon icon={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{feature.name}</h3>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#087cf0] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(8,124,240,0.24)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#1a92ff] hover:shadow-[0_14px_36px_rgba(8,124,240,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
              href="https://xenly.app"
            >
              Explore Xenly App
              <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </section>


      <section className="border-y border-[#1c2433] bg-[#090e19] px-6 py-24 sm:px-8 lg:px-10 lg:py-32" data-reveal id="realizacje">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#8e7dff]">WYBRANE REALIZACJE</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Każdy projekt zaczynamy od właściwego pytania.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Każdy projekt powstaje od podstaw. Poniższe wizualizacje pokazują różne kierunki projektowe, a nie gotowe szablony.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-[28px] border border-[#252d3c] bg-[#0e1424] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-300 hover:scale-[1.01] hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)]"
                key={project.type}
              >
                <div
                  aria-label={`Podgląd koncepcji strony: ${project.category}`}
                  className="overflow-hidden rounded-[20px] border border-[#2b3550] bg-[#090d17]"
                  role="img"
                >
                  <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#121827] px-3">
                    <span aria-hidden="true" className="size-2 rounded-full bg-[#f16f7b]" />
                    <span aria-hidden="true" className="size-2 rounded-full bg-[#f0bf63]" />
                    <span aria-hidden="true" className="size-2 rounded-full bg-[#61d1a5]" />
                    <div className="ml-2 h-4 flex-1 rounded bg-white/[0.06]" />
                  </div>

                  {project.type === "restauracja" && (
                    <div className="min-h-56 bg-[#241d1a] p-3">
                      <div className="relative h-36 overflow-hidden rounded-[14px] bg-[#a45d42] p-4">
                        <div aria-hidden="true" className="absolute -right-4 -top-7 size-32 rounded-full border-[18px] border-[#e7c88f]/75 shadow-[0_0_0_16px_rgba(84,44,30,0.2)]" />
                        <div aria-hidden="true" className="absolute bottom-[-3.25rem] left-6 size-32 rounded-full border-[14px] border-[#5a3225]" />
                        <div className="relative flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.16em] text-[#fff1d8]">
                          <span>Oliwa</span>
                          <span>Menu&nbsp;&nbsp; Kontakt</span>
                        </div>
                        <p className="relative mt-9 max-w-32 font-serif text-2xl leading-[0.95] text-[#fff4e2]">
                          Smak, który zostaje na dłużej.
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-2 pt-3">
                        <span className="text-[9px] uppercase tracking-[0.16em] text-[#cfae7a]">Kuchnia włoska</span>
                        <div className="rounded-md border border-[#d9c7a0]/50 px-3 py-2 text-[10px] font-semibold text-[#f7f0e4]">Zarezerwuj stolik</div>
                      </div>
                    </div>
                  )}

                  {project.type === "barber" && (
                    <div className="min-h-56 bg-[#080808] px-5 pb-5 pt-4">
                      <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5f5f5]">
                        <span>Barber Północ</span>
                        <span>01 / 2026</span>
                      </div>
                      <div className="mt-7 border-y border-white/15 py-3">
                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#9b9b9b]">Barbershop</p>
                        <p className="mt-2 text-[2.7rem] font-black leading-[0.78] tracking-[-0.1em] text-white">
                          CIĘCIE<br />STYL<br />PEWNOŚĆ
                        </p>
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[10px] text-[#b1b1b1]">Męskie cięcie. Dobry rytuał.</span>
                        <div className="rounded-sm bg-white px-3 py-2 text-[10px] font-bold text-black">Umów wizytę</div>
                      </div>
                    </div>
                  )}

                  {project.type === "hydraulik" && (
                    <div className="min-h-56 bg-[#eef6ff] p-4 text-[#11254c]">
                      <div className="flex items-center justify-between border-b border-[#b9d4f5] pb-3 text-[9px] font-semibold uppercase tracking-[0.12em]">
                        <span>Hydro Serwis</span>
                        <span>501 240 800</span>
                      </div>
                      <div className="mt-5 grid grid-cols-[1fr_auto] gap-3">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3e77ca]">Hydraulik 24h</p>
                          <p className="mt-2 max-w-36 text-2xl font-semibold leading-[1.02] tracking-[-0.05em]">
                            Szybka pomoc w Twoim domu.
                          </p>
                        </div>
                        <div aria-hidden="true" className="mt-1 grid size-12 place-items-center rounded-xl bg-[#d8eaff] text-[#2376d9]">⌁</div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        <div className="grid h-10 place-items-center rounded-lg border border-[#c2d9f4] bg-white text-[#3e77ca]">
                          <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16"><path d="M14.7 6.3a5 5 0 0 0-6.98 6.98L3 18l3 3 4.72-4.72A5 5 0 0 0 17.7 9.3l-3 3-2-2 3-3Z" /></svg>
                        </div>
                        <div className="grid h-10 place-items-center rounded-lg border border-[#c2d9f4] bg-white text-[#3e77ca]">
                          <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16"><path d="M6 2v6m12-6v6M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /></svg>
                        </div>
                        <div className="grid h-10 place-items-center rounded-lg border border-[#c2d9f4] bg-white text-[#3e77ca]">
                          <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16"><path d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-lg bg-[#1976d2] px-3 py-2.5 text-[10px] text-white">
                        <span>Awaria? Zadzwoń</span>
                        <span className="font-semibold">Pomoc całodobowa</span>
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-7 text-xs font-semibold tracking-[0.14em] text-[#7f6dff]">PROJEKT KONCEPCYJNY</p>
                <p className="mt-2 text-sm font-medium text-[#7dacff]">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                <a
                  className="mt-7 inline-flex text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
                  href="mailto:kontakt@xenly.app"
                >
                  Podgląd projektu <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32" data-reveal id="uslugi">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#5596ff]">USŁUGI</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Strona dopasowana do rytmu Twojej firmy.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                className="group rounded-[28px] border border-[#252d3c] bg-[#0d1322] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#3e5f9e] hover:bg-[#10182d]"
                key={service.title}
              >
                <div className="grid size-12 place-items-center rounded-2xl border border-[#344364] bg-[#141f3d] text-[#82b4ff]">
                  {service.icon === "strona" && (
                    <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                      <rect height="15" rx="2" width="18" x="3" y="4" />
                      <path d="M3 8h18M7 6h.01M10 6h.01" />
                    </svg>
                  )}
                  {service.icon === "firma" && (
                    <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                      <path d="M4 21V5a2 2 0 0 1 2-2h7v18M4 21h16M15 9h3a2 2 0 0 1 2 2v10M8 7h3M8 11h3M8 15h3" />
                    </svg>
                  )}
                  {service.icon === "projekt" && (
                    <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                      <path d="m14 4 6 6M5 19l1.5-4.5L15 6l3 3-8.5 8.5L5 19Z" />
                      <path d="m12 7 3 3" />
                    </svg>
                  )}
                  {service.icon === "wsparcie" && (
                    <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                      <path d="M12 22a9 9 0 1 0-9-9v4a3 3 0 0 0 3 3h2v-7H5.15M12 22h2a3 3 0 0 0 3-3v-6h1.85M16 13v7" />
                    </svg>
                  )}
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white">{service.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1c2433] bg-[#090e19] px-6 py-24 sm:px-8 lg:px-10 lg:py-32" data-reveal id="cennik">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#5596ff]">CENNIK</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Jasny zakres. Przemyślany proces. Bez niespodzianek.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                className={`relative rounded-[28px] border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(0,0,0,0.24)] ${index === 0 ? "border-[#3c68c5] bg-[#111b38] shadow-[0_20px_60px_rgba(15,45,110,0.2)]" : "border-[#252d3c] bg-[#0d1322]"}`}
                key={plan.name}
              >
                {plan.badge && (
                  <span className="inline-flex rounded-full border border-[#5794ff]/45 bg-[#16356e]/50 px-3 py-1 text-xs font-semibold text-[#92bdff]">
                    {plan.badge}
                  </span>
                )}
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{plan.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#8dbbff]">{plan.subtitle}</p>
                <div className="mt-8">
                  {plan.oldPrice && <p className="text-sm text-slate-500 line-through">{plan.oldPrice}</p>}
                  <p className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-white">{plan.price}</p>
                  {plan.note && <p className="mt-2 text-sm text-[#9ab6e8]">{plan.note}</p>}
                </div>
                <ul className="mt-8 space-y-4 border-t border-white/10 pt-7 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3" key={feature}>
                      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#6d69ff]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-10 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
                  href="mailto:kontakt@xenly.app"
                >
                  Zapytaj o wycenę
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32" data-reveal id="dlaczego-xenly">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#8e7dff]">DLACZEGO XENLY?</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Dlaczego Xenly?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Każdy projekt tworzony jest indywidualnie z myślą o rozwoju Twojej firmy.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                className="group rounded-[28px] border border-[#252d3c] bg-[#0d1322] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#3e5f9e] hover:shadow-[0_28px_60px_rgba(0,0,0,0.22)]"
                key={benefit.title}
              >
                <div className="grid size-12 place-items-center rounded-2xl border border-[#344364] bg-[#141f3d] text-[#82b4ff]">
                  <svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="22">
                    <BenefitIcon icon={benefit.icon} />
                  </svg>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{benefit.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[32px] border border-[#2b3550] bg-[#101a35] px-7 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Masz pomysł na stronę?</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Opowiedz o swoim projekcie, a przygotuję indywidualną wycenę dopasowaną do Twoich potrzeb.
              </p>
            </div>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#087cf0] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(8,124,240,0.24)] transition-colors duration-200 hover:bg-[#1a92ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff] lg:mt-0"
              href="mailto:kontakt@xenly.app"
            >
              Darmowa wycena
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32" data-reveal id="kontakt">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[32px] border border-[#2b3550] bg-[#101a35] px-7 py-12 sm:px-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-16 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#84b8ff]">KONTAKT</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Porozmawiajmy o Twoim projekcie
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Napisz, czym zajmuje się Twoja firma i czego potrzebujesz. Wrócę z pytaniami oraz konkretną propozycją dalszych kroków.
            </p>
            <a
              className="mt-8 inline-flex text-lg font-semibold text-[#9ac3ff] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
              href="mailto:kontakt@xenly.app"
            >
              kontakt@xenly.app
            </a>
          </div>
          <div className="rounded-[24px] border border-[#344364] bg-[#0d1428] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-7">
            <dl className="divide-y divide-white/10">
              <div className="flex items-center justify-between gap-5 py-4 first:pt-0">
                <dt className="text-sm text-slate-400">Czas odpowiedzi</dt>
                <dd className="text-sm font-semibold text-white">do 24 godzin</dd>
              </div>
              <div className="flex items-center justify-between gap-5 py-4">
                <dt className="text-sm text-slate-400">Darmowa wycena</dt>
                <dd className="text-sm font-semibold text-[#8ed4be]">Tak</dd>
              </div>
              <div className="flex items-center justify-between gap-5 py-4">
                <dt className="text-sm text-slate-400">Projekt</dt>
                <dd className="text-right text-sm font-semibold text-white">100% indywidualny</dd>
              </div>
              <div className="flex items-center justify-between gap-5 py-4 last:pb-0">
                <dt className="text-sm text-slate-400">Realizacja</dt>
                <dd className="text-sm font-semibold text-white">od 3 do 14 dni</dd>
              </div>
            </dl>
            <a
              className="mt-7 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#087cf0] px-6 text-base font-semibold text-white shadow-[0_10px_30px_rgba(8,124,240,0.24)] transition-colors duration-200 hover:bg-[#1a92ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
              href="mailto:kontakt@xenly.app"
            >
              Bezpłatna wycena
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1c2433] px-6 py-16 sm:px-8 lg:px-10" data-reveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr]">
            <div className="max-w-sm">
              <p className="text-xl font-semibold tracking-[-0.04em] text-white">Xenly Cloud</p>
              <p className="mt-4 leading-7 text-slate-400">
                Projektujemy nowoczesne strony internetowe dla lokalnych firm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#84b8ff]">NAWIGACJA</p>
              <nav aria-label="Nawigacja w stopce" className="mt-5">
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#o-nas">O firmie</a></li>
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#realizacje">Realizacje</a></li>
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#uslugi">Usługi</a></li>
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#cennik">Cennik</a></li>
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#dlaczego-xenly">Dlaczego Xenly</a></li>
                  <li><a className="transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]" href="#kontakt">Kontakt</a></li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#84b8ff]">KONTAKT</p>
              <a
                className="mt-5 inline-flex text-sm text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
                href="mailto:kontakt@xenly.app"
              >
                kontakt@xenly.app
              </a>
            </div>
          </div>
          <div className="mt-14 border-t border-[#1c2433] pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <p>© 2026 Xenly Cloud.</p>
            <p className="mt-2 sm:mt-0">Projektowanie nowoczesnych stron internetowych dla lokalnych firm.</p>
          </div>
        </div>
      </footer>
      </main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </>
  );
}
