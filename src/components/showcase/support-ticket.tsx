import styles from "./support-ticket.module.css";

export function SupportTicket({
  plan,
  level,
  description,
  code,
  color = "#0fbf8f",
}: {
  plan: string;
  level: string;
  description: string;
  code: string;
  color?: string;
}) {
  return (
    <div className={styles.card} style={{ ["--ticket-color" as string]: color }}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.tint} aria-hidden="true" />

      <div className={styles.header}>{plan}</div>

      <div className={styles.body}>
        <p className="font-semibold text-[13px]" style={{ color }}>
          {level}
        </p>
        <p className="mt-1.5">{description}</p>
      </div>

      <div className={styles.footer}>
        <p className={styles.number}>
          TICKET N. <span className={styles.bold}>{code}</span>
        </p>
        <div className={styles.barcode} aria-hidden="true" />
      </div>
    </div>
  );
}
