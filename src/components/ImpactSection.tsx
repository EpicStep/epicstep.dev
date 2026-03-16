"use client";

import { Heading, Text, Card } from "@vega-ui/react";
import { impactCards } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./ImpactSection.module.css";

export function ImpactSection() {
  return (
    <section id="impact" className={styles.root}>
      <div className={styles.container}>
        <SectionHeader
          label="What I've built"
          title="Hours to minutes. Millions of inserts per second. Pages from a hundred microservices."
          description="At OZON, I've led and contributed to projects that changed how teams debug, how pages get assembled, how we collect metrics, and how we work with ClickHouse at scale."
        />

        <div className={styles.grid}>
          {impactCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <Card appearance="outline" className={styles.card}>
                <span className={styles.metric}>{card.metric}</span>
                <Heading as="h3" className={styles.cardTitle}>
                  {card.title}
                </Heading>
                <Text className={styles.cardDesc}>{card.description}</Text>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
