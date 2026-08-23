"use client";

import { useState } from "react";
import styles from "./color-picker.module.css";

const BRAND_COLORS = [
  { name: "Mint onespec", value: "#0fbf8f" },
  { name: "Grafite", value: "#1d1d1f" },
  { name: "Blu cantiere", value: "#2563eb" },
  { name: "Terracotta", value: "#c2542c" },
  { name: "Ambra legno", value: "#c98a1f" },
  { name: "Grigio ardesia", value: "#5b6470" },
];

export function ColorPicker() {
  const [selected, setSelected] = useState(BRAND_COLORS[0].value);

  return (
    <div>
      <div className={styles.row}>
        {BRAND_COLORS.map((c) => (
          <button
            key={c.value}
            type="button"
            aria-label={`Colore ${c.name}`}
            aria-pressed={selected === c.value}
            data-name={c.name}
            className={styles.swatch}
            style={{ ["--swatch-color" as string]: c.value }}
            onClick={() => setSelected(c.value)}
          />
        ))}
      </div>
      <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">
        Colore attivo: <span className="font-medium text-[var(--color-text)]">{selected}</span>
      </p>
    </div>
  );
}
