import { Text, Separator } from "@vega-ui/react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <Separator className={styles.separator} />
      <Text className={styles.text}>Stepan Rabotkin &copy; 2026</Text>
    </footer>
  );
}
