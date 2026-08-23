import { useId } from "react";
import styles from "./chart-card.module.css";

export function ChartCard({
  title = "1.284",
  subtitle = "Preventivi generati",
  change = "+18,4% questa settimana",
}: {
  title?: string;
  subtitle?: string;
  change?: string;
}) {
  const name = useId();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.lines} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.tagsRow}>
          <label className={styles.radio}>
            <input type="radio" name={name} defaultChecked />
            <span className={styles.radioName}>SETT</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name={name} />
            <span className={styles.radioName}>MESE</span>
          </label>
        </div>

        <div className={styles.mainTexts}>
          <span className={styles.title}>{title}</span>
          <span className={styles.change}>{change}</span>
          <span className="mt-1 text-[11px] text-white/40">{subtitle}</span>
        </div>

        <div className={styles.chartArea}>
          <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className={`${styles.path} ${styles.pathWeek}`}
              d="M0 95 C 30 70, 50 100, 80 80 C 110 60, 130 90, 160 55 C 190 25, 210 60, 260 20"
              stroke="var(--color-mint)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="900"
            />
            <path
              className={`${styles.path} ${styles.pathMonth}`}
              d="M0 60 C 40 90, 60 40, 90 65 C 120 90, 150 30, 180 60 C 210 90, 230 40, 260 70"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="900"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
