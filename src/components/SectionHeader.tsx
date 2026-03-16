"use client";

import { Heading, Text } from "@vega-ui/react";
import { csx } from "@vega-ui/utils";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  center?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={csx(styles.root, center ? styles.center : undefined)}>
      <ScrollReveal>
        <span className={styles.label}>{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Text className={styles.description}>{description}</Text>
      </ScrollReveal>
    </div>
  );
}
