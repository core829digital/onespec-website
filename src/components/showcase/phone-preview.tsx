import styles from "./phone-preview.module.css";

export function PhonePreview() {
  return (
    <div className={styles.phone} role="img" aria-label="Anteprima del configuratore su smartphone">
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
