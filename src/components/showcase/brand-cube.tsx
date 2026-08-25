import Image from "next/image";
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
            <Image
              src="/onespec-logo.png"
              alt=""
              width={2000}
              height={700}
              className={styles.wordmark}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
