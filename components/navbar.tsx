"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type NavigationItem = {
  href: string;
  label: string;
  badge?: string;
  external?: boolean;
};

const defaultNavigation: NavigationItem[] = [
  { href: "#o-nas", label: "O firmie" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#cennik", label: "Cennik" },
  { href: "https://xenly.app", label: "Xenly App", badge: "WKRÓTCE", external: true },
  { href: "#dlaczego-xenly", label: "Dlaczego Xenly" },
  { href: "#kontakt", label: "Kontakt" },
];

type NavbarProps = {
  items?: NavigationItem[];
};

export default function Navbar({ items = defaultNavigation }: NavbarProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = items[0]?.href ?? "";

      for (const item of items) {
        if (!item.href.startsWith("#")) continue;
        const section = document.getElementById(item.href.slice(1));
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.href;
        }
      }

      setActiveHref(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [items]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl lg:hidden">
        <nav aria-label="Nawigacja mobilna" className="mx-auto flex h-16 items-center justify-between px-6">
          <a className="inline-flex items-center" href="#o-nas" onClick={() => setIsMobileMenuOpen(false)}>
            <Image alt="Xenly" className="h-7 w-auto" height={35} priority src="/xenly-wordmark.png" width={78} />
          </a>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-300"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">{isMobileMenuOpen ? "×" : "☰"}</span>
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4">
            <ul className="mx-auto max-w-7xl space-y-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-300"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    {item.label}
                    {item.badge && <span className="rounded-full border border-[#3a81ff]/30 bg-[#133169]/45 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#75b0ff]">{item.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <header className="sticky top-0 z-50 hidden border-b border-white/10 bg-slate-950/70 backdrop-blur-xl lg:block">
        <nav
        aria-label="Nawigacja główna"
        className="mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8"
      >
        <a
          className="inline-flex w-fit items-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          href="#o-nas"
        >
          <Image
            alt="Xenly"
            className="h-7 w-auto"
            height={35}
            priority
            src="/xenly-wordmark.png"
            width={78}
          />
        </a>

        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const isActive = !item.external && activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-cyan-300 ${isActive ? "bg-[#16356e]/45 text-[#9ac3ff]" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.label}
                  {item.badge && <span className="rounded-full border border-[#3a81ff]/30 bg-[#133169]/45 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#75b0ff]">{item.badge}</span>}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          className="justify-self-end rounded-lg bg-[#087cf0] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1a92ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61a8ff]"
          href="mailto:kontakt@xenly.app"
        >
          Zacznij projekt
        </a>
      </nav>
      </header>
    </>
  );
}
