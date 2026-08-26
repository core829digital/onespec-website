/**
 * Layer visuali dell'hero parallax.
 *
 * Sono SVG disegnati su misura invece di foto stock: raccontano il prodotto
 * (disegni tecnici di infissi + UI del configuratore), non hanno vincoli di
 * licenza, restano nitidi a qualsiasi risoluzione e pesano pochi KB.
 */

/** Fondo: griglia da tavolo tecnico con alone mint. */
export function LayerBlueprint() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="os-grid-sm" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="rgba(22,209,157,0.10)"
            strokeWidth="1"
          />
        </pattern>
        <pattern id="os-grid-lg" width="200" height="200" patternUnits="userSpaceOnUse">
          <path
            d="M200 0H0V200"
            fill="none"
            stroke="rgba(22,209,157,0.18)"
            strokeWidth="1.5"
          />
        </pattern>
        <radialGradient id="os-glow" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="rgba(22,209,157,0.20)" />
          <stop offset="55%" stopColor="rgba(22,209,157,0.05)" />
          <stop offset="100%" stopColor="rgba(22,209,157,0)" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#os-grid-sm)" />
      <rect width="1600" height="900" fill="url(#os-grid-lg)" />
      <rect width="1600" height="900" fill="url(#os-glow)" />
    </svg>
  );
}

/** Quote tecniche: linee di misura come su un disegno di serramento. */
function DimensionLine({
  x1,
  y1,
  x2,
  y2,
  label,
  vertical = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  vertical?: boolean;
}) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  return (
    <g stroke="rgba(22,209,157,0.55)" strokeWidth="1.5">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {vertical ? (
        <>
          <line x1={x1 - 6} y1={y1} x2={x1 + 6} y2={y1} />
          <line x1={x2 - 6} y1={y2} x2={x2 + 6} y2={y2} />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - 6} x2={x1} y2={y1 + 6} />
          <line x1={x2} y1={y2 - 6} x2={x2} y2={y2 + 6} />
        </>
      )}
      <text
        x={vertical ? midX - 12 : midX}
        y={vertical ? midY : midY - 10}
        fill="rgba(22,209,157,0.85)"
        fontSize="15"
        fontFamily="ui-monospace, monospace"
        textAnchor={vertical ? "end" : "middle"}
        dominantBaseline={vertical ? "middle" : "auto"}
        stroke="none"
      >
        {label}
      </text>
    </g>
  );
}

/** Mid-ground: prospetti di finestre in stile disegno tecnico. */
export function LayerWindows() {
  const frame = "rgba(255,255,255,0.30)";
  const glass = "rgba(22,209,157,0.05)";

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Finestra a due ante, sinistra */}
      <g transform="translate(150 210)">
        <rect
          width="330"
          height="430"
          rx="6"
          fill={glass}
          stroke={frame}
          strokeWidth="3"
        />
        <line x1="165" y1="10" x2="165" y2="420" stroke={frame} strokeWidth="3" />
        <rect x="22" y="22" width="121" height="386" rx="3" fill="none" stroke={frame} strokeWidth="1.5" />
        <rect x="187" y="22" width="121" height="386" rx="3" fill="none" stroke={frame} strokeWidth="1.5" />
        {/* Simbolo apertura anta-ribalta */}
        <path d="M143 215 L26 26 M143 215 L26 404" stroke="rgba(22,209,157,0.35)" strokeWidth="1.5" fill="none" />
        <circle cx="158" cy="215" r="5" fill="rgba(22,209,157,0.6)" />
        <DimensionLine x1={0} y1={-30} x2={330} y2={-30} label="1400 mm" />
        <DimensionLine x1={-34} y1={0} x2={-34} y2={430} label="1800 mm" vertical />
      </g>

      {/* Portafinestra centrale, piu alta */}
      <g transform="translate(660 130)">
        <rect
          width="290"
          height="590"
          rx="6"
          fill={glass}
          stroke={frame}
          strokeWidth="3"
        />
        <rect x="22" y="22" width="246" height="420" rx="3" fill="none" stroke={frame} strokeWidth="1.5" />
        <line x1="10" y1="470" x2="280" y2="470" stroke={frame} strokeWidth="3" />
        <rect x="22" y="492" width="246" height="76" rx="3" fill="none" stroke={frame} strokeWidth="1.5" />
        <circle cx="255" cy="240" r="5" fill="rgba(22,209,157,0.6)" />
        <DimensionLine x1={0} y1={-30} x2={290} y2={-30} label="1200 mm" />
      </g>

      {/* Finestra singola, destra */}
      <g transform="translate(1130 250)">
        <rect
          width="300"
          height="360"
          rx="6"
          fill={glass}
          stroke={frame}
          strokeWidth="3"
        />
        <rect x="22" y="22" width="256" height="316" rx="3" fill="none" stroke={frame} strokeWidth="1.5" />
        <path d="M278 180 L26 26 M278 180 L26 334" stroke="rgba(22,209,157,0.3)" strokeWidth="1.5" fill="none" />
        <DimensionLine x1={-34} y1={0} x2={-34} y2={360} label="1500 mm" vertical />
      </g>
    </svg>
  );
}

/** Primo piano: schede UI del configuratore che fluttuano sopra la scena. */
export function LayerConfigCards() {
  return (
    <div className="pointer-events-none relative h-full w-full">
      {/* Selettore materiale — sinistra */}
      <div className="absolute left-[4%] top-[16%] hidden w-[210px] rounded-2xl border border-white/12 bg-[#0f1113]/85 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md lg:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
          Materiale
        </p>
        <div className="mt-3 space-y-2">
          {[
            { label: "PVC", price: "da 180 €/m²", active: true },
            { label: "Legno", price: "da 320 €/m²", active: false },
            { label: "Alluminio", price: "da 260 €/m²", active: false },
          ].map((m) => (
            <div
              key={m.label}
              className={
                m.active
                  ? "flex items-center gap-2.5 rounded-lg border border-[var(--color-mint)]/50 bg-[var(--color-mint)]/12 px-2.5 py-2"
                  : "flex items-center gap-2.5 rounded-lg border border-white/8 px-2.5 py-2"
              }
            >
              <span
                className={
                  m.active
                    ? "h-2.5 w-2.5 rounded-full bg-[var(--color-mint)]"
                    : "h-2.5 w-2.5 rounded-full bg-white/20"
                }
              />
              <span className="flex-1 text-[12px] font-medium text-white/90">
                {m.label}
              </span>
              <span className="font-mono text-[10px] text-white/40">{m.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preventivo live — destra */}
      <div className="absolute right-[5%] top-[22%] hidden w-[230px] rounded-2xl border border-white/12 bg-[#0f1113]/85 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md lg:block">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Preventivo
          </p>
          <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-mint)]/12 px-2 py-0.5 text-[9px] font-semibold text-[var(--color-mint)]">
            <span className="h-1 w-1 rounded-full bg-[var(--color-mint)]" />
            LIVE
          </span>
        </div>
        <p className="mt-3 font-mono text-[28px] font-semibold leading-none tracking-tight text-white">
          € 2.480
        </p>
        <p className="mt-1.5 text-[11px] text-white/40">IVA esclusa · 3 serramenti</p>
        <div className="mt-3.5 h-px w-full bg-white/8" />
        <div className="mt-3 space-y-1.5">
          {[
            ["Serramenti", "€ 2.140"],
            ["Posa in opera", "€ 340"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[11px]">
              <span className="text-white/45">{k}</span>
              <span className="font-mono text-white/75">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chip iFrame — basso sinistra */}
      <div className="absolute bottom-[16%] left-[9%] hidden items-center gap-2 rounded-full border border-white/12 bg-[#0f1113]/85 px-3.5 py-2 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.8)] backdrop-blur-md xl:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
        <span className="font-mono text-[11px] text-white/70">&lt;iframe src=&quot;onespec.it/w/…&quot;&gt;</span>
      </div>
    </div>
  );
}
