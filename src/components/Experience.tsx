"use client";

import { Heading, Text, Badge } from "@vega-ui/react";
import { timeline } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={styles.root}>
      <div className={styles.container}>
        <SectionHeader
          label="Career path"
          title="From gaming platforms to one of Russia's largest e-commerce companies."
          description="Each role taught me something different — from building real-time systems to assembling pages from a hundred microservices."
        />

        <div className={styles.timeline}>
          {timeline.map((entry, i) => (
            <ScrollReveal key={entry.company} delay={i * 100}>
              <div className={styles.entry}>
                <div className={styles.track}>
                  <div
                    className={
                      entry.active ? styles.dotActive : styles.dotInactive
                    }
                  />
                  {i < timeline.length - 1 && <div className={styles.line} />}
                </div>

                <div className={styles.entryContent}>
                  <Heading as="h3" className={styles.company}>
                    {entry.company}
                  </Heading>
                  <Text className={styles.role}>{entry.role}</Text>
                  <span className={styles.dates}>{entry.dates}</span>
                  <Text className={styles.desc}>{entry.description}</Text>
                  <div className={styles.tags}>
                    {entry.tags.map((tag) => (
                      <Badge
                        key={tag}
                        size="sm"
                        appearance="surface"
                        className={styles.tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
