import { useTranslations } from "next-intl";
import styles from "./phone-preview.module.css";

export function PhonePreview() {
  const t = useTranslations("phonePreview");
  return (
    <div className={styles.phone} role="img" aria-label={t("ariaLabel")}>
      <div className={styles.screen}>
        <div className={styles.notch} />
        <div className={styles.content}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.tiles}>
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
          </div>
          <div className={styles.cta} />
        </div>
      </div>
    </div>
  );
}
