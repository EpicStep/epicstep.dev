"use client";

import { Heading, Text, Separator, Card, Link } from "@vega-ui/react";
import { osProjects, mentions } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./OpenSourceSection.module.css";

function ProjectCard({
  name,
  org,
  description,
  url,
  href,
  large,
  delay,
}: {
  name: string;
  org: string;
  description: string;
  url: string;
  href: string;
  large?: boolean;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <Card
          appearance="outline"
          className={large ? styles.featuredCard : styles.regularCard}
        >
          <Heading
            as="h3"
            className={large ? styles.cardName : styles.cardNameSm}
          >
            {name}
          </Heading>
          <span className={styles.cardOrg}>{org}</span>
          <Text className={styles.cardDesc}>{description}</Text>
          <span className={styles.cardUrl}>
            <span className={styles.arrow}>&rarr;</span> {url}
          </span>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

export function OpenSourceSection() {
  const featured = osProjects.filter((p) => p.featured);
  const regular = osProjects.filter((p) => !p.featured);

  return (
    <section id="open-source" className={styles.root}>
      <div className={styles.container}>
        <SectionHeader
          label="Open Source"
          title="I build tools and give them away."
          description="From ClickHouse libraries to Kubernetes operators — projects I've created, co-created, or contributed to significantly."
        />

        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.name} {...project} large delay={i * 100} />
          ))}
        </div>

        <div className={styles.regularGrid}>
          {regular.map((project, i) => (
            <ProjectCard
              key={project.name}
              {...project}
              delay={200 + i * 100}
            />
          ))}
        </div>

        <ScrollReveal delay={600}>
          <Separator className={styles.separator} />
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <Heading as="h3" className={styles.mentionsTitle}>
            Also worth mentioning
          </Heading>
        </ScrollReveal>

        <div className={styles.mentionsGrid}>
          {mentions.map((mention, i) => (
            <ProjectCard
              key={mention.name}
              name={mention.name}
              org=""
              description={mention.description}
              url={mention.url}
              href={mention.href}
              delay={750 + i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
