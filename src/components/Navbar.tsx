"use client";

import { useState, useEffect } from "react";
import { Link } from "@vega-ui/react";
import { csx } from "@vega-ui/utils";
import { navLinks } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import styles from "./Navbar.module.css";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const sectionIds: Record<string, string> = {
    Impact: "impact",
    Experience: "experience",
    "Open Source": "open-source",
    Contact: "contact",
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className={csx(styles.header, scrolled ? styles.headerScrolled : undefined)}>
        <nav className={csx(styles.pill, scrolled ? styles.pillScrolled : undefined)}>
          <Link href="#" className={styles.logo}>
            SR
          </Link>

          <button
            className={csx(styles.hamburger, menuOpen ? styles.hamburgerOpen : undefined)}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          />

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${sectionIds[link]}`}
                className={styles.link}
              >
                {link}
              </Link>
            ))}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — outside header to avoid backdrop-filter stacking context */}
      <div className={csx(styles.mobileOverlay, menuOpen ? styles.mobileOverlayOpen : undefined)} onClick={() => setMenuOpen(false)} />
      <div className={csx(styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : undefined)}>
        <button
          className={styles.mobileClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`#${sectionIds[link]}`}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </Link>
        ))}
        <button className={styles.mobileThemeToggle} onClick={toggleTheme}>
          {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          {resolvedTheme === "dark" ? "Light theme" : "Dark theme"}
        </button>
      </div>
    </>
  );
}
