"use client";

import { Button } from "@vega-ui/react";
import { contactLinks } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className={styles.root}>
      <div className={styles.container}>
        <SectionHeader
          center
          label="Get in touch"
          title="Let's talk."
          description="Interested in working together, collaborating on open source, or just want to say hi — reach out."
        />

        <ScrollReveal delay={300}>
          <div className={styles.buttons}>
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                size="lg"
                variant={link.primary ? "primary" : "secondary"}
                appearance={link.primary ? "fill" : "outline"}
                asChild
                className={
                  link.primary ? styles.primaryBtn : styles.secondaryBtn
                }
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
