import Image from "next/image";
import styles from "./alpha-badge.module.css";

/**
 * Badge "Alpha Member": logo onespec + dicitura, con riflesso animato.
 * Viene consegnato a chi entra tra i primi posti del programma Alpha.
 */
export function AlphaBadge({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span
      className={size === "lg" ? `${styles.badge} ${styles.lg}` : styles.badge}
    >
      <Image
        src="/onespec-logo.png"
        alt="onespec"
        width={2000}
        height={700}
        className={`${styles.logo} logo-dark`}
      />
      <Image
        src="/onespec-logo-light.png"
        alt="onespec"
        width={2000}
        height={700}
        className={`${styles.logo} logo-light`}
      />
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.label}>Alpha Member</span>
      <span className={styles.dot} aria-hidden="true" />
    </span>
  );
}
