"use client";

import { Heading, Text, Card } from "@vega-ui/react";
import { heroMetrics } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.aurora}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.blob4} />
      </div>
      <div className={styles.noise} />
      <div className={styles.content}>
        <ScrollReveal>
          <Heading as="h1" className={styles.headline}>
            I build systems that handle millions of requests per second.
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Text className={styles.subheadline}>
            Senior Software Engineer at OZON. I design high-load backend
            infrastructure — from page assembly engines serving hundreds of
            thousands of users to metrics pipelines processing tens of millions
            of writes per second. Active contributor to the ClickHouse ecosystem.
          </Text>
        </ScrollReveal>

        <div className={styles.metrics}>
          {heroMetrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={400 + i * 100}>
              <Card appearance="outline" className={styles.metricCard}>
                <div className={styles.metricTop}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
                <span className={styles.metricContext}>{metric.context}</span>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={900}>
          <div className={styles.scrollIndicator}>&#8595;</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
