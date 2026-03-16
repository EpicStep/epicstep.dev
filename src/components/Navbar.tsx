"use client";

import { useState, useEffect } from "react";
import { Link } from "@vega-ui/react";
import { csx } from "@vega-ui/utils";
import { navLinks } from "@/lib/data";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      </div>
    </>
  );
}
