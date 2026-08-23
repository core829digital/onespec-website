import styles from "./brand-cube.module.css";

const FACE_CLASSES = [
  styles.front,
  styles.back,
  styles.right,
  styles.left,
  styles.top,
  styles.bottom,
];

export function BrandCube() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.cube}>
        {FACE_CLASSES.map((c) => (
          <div key={c} className={`${styles.face} ${c}`}>
            <span className={styles.wordmark}>
              one<span className={styles.wordmarkAccent}>spec</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
