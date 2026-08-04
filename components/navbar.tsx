"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type NavigationItem = {
  href: string;
  label: string;
};

const defaultNavigation: NavigationItem[] = [
  { href: "#o-nas", label: "O firmie" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#cennik", label: "Cennik" },
  { href: "#dlaczego-xenly", label: "Dlaczego Xenly" },
  { href: "#kontakt", label: "Kontakt" },
];

type NavbarProps = {
  items?: NavigationItem[];
};

export default function Navbar({ items = defaultNavigation }: NavbarProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = items[0]?.href ?? "";

      for (const item of items) {
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
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-cyan-300 ${isActive ? "bg-[#16356e]/45 text-[#9ac3ff]" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                >
                  {item.label}
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
  );
}
