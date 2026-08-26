"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./color-picker.module.css";

const BRAND_COLOR_VALUES = [
  "#0fbf8f",
  "#1d1d1f",
  "#2563eb",
  "#c2542c",
  "#c98a1f",
  "#5b6470",
];

export function ColorPicker() {
  const t = useTranslations();
  const names = t.raw("brandColors") as string[];
  const colors = BRAND_COLOR_VALUES.map((value, i) => ({ value, name: names[i] }));
  const [selected, setSelected] = useState(colors[0].value);

  return (
    <div>
      <div className={styles.row}>
        {colors.map((c) => (
          <button
            key={c.value}
            type="button"
            aria-label={t("colorPicker.colorAria", { name: c.name })}
            aria-pressed={selected === c.value}
            data-name={c.name}
            className={styles.swatch}
            style={{ ["--swatch-color" as string]: c.value }}
            onClick={() => setSelected(c.value)}
          />
        ))}
      </div>
      <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">
        {t("colorPicker.activeColor")}{" "}
        <span className="font-medium text-[var(--color-text)]">{selected}</span>
      </p>
    </div>
  );
}
