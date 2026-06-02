'use client';

const G  = '#3D5A1A'; // tree green
const Au = '#C9A84C'; // gold birds

type RootDef = [d: string, strokeWidth: number, length: number, delay: number];

const ROOTS: RootDef[] = [
  // ── Left main root ──
  ['M 208,292 C 186,302 156,315 126,325 C 98,334 70,337 48,334',   8, 176, 0.00],
  ['M 126,325 C 110,338 96,354 88,366',                             5,  58, 0.30],
  ['M 48,334 C 36,341 26,350 22,360',                               4,  40, 0.50],
  ['M 88,366 C 80,374 74,382 72,390',                               3,  32, 0.70],
  ['M 22,360 C 16,367 12,376 14,384',                               3,  30, 0.70],

  // ── Centre-left root ──
  ['M 212,296 C 198,312 184,334 174,356 C 167,369 163,381 161,391', 6, 110, 0.08],
  ['M 174,356 C 160,364 146,368 136,367',                           4,  46, 0.50],
  ['M 136,367 C 126,373 118,380 114,388',                           3,  28, 0.70],

  // ── Centre root ──
  ['M 220,298 C 215,318 210,342 208,366 C 206,378 204,388 202,395', 5, 106, 0.12],
  ['M 208,366 C 201,374 194,382 190,388',                           3,  28, 0.64],

  // ── Centre-right root ──
  ['M 230,296 C 245,313 262,334 274,352 C 282,365 285,378 283,389', 6, 112, 0.08],
  ['M 274,352 C 284,361 296,366 306,364',                           4,  42, 0.50],
  ['M 306,364 C 314,370 320,378 318,386',                           3,  28, 0.70],

  // ── Right main root ──
  ['M 238,290 C 263,303 292,316 320,326 C 346,335 370,338 388,335', 8, 164, 0.00],
  ['M 320,326 C 328,340 332,357 328,370',                           5,  52, 0.30],
  ['M 388,335 C 396,342 402,352 400,362',                           4,  38, 0.50],
  ['M 328,370 C 322,378 318,386 318,394',                           3,  30, 0.70],
  ['M 400,362 C 397,370 391,378 387,384',                           3,  28, 0.70],
];

// Leaf positions [cx, cy, rx, ry]
const LEAVES: [number,number,number,number][] = [
  [22,87,13,11],[48,82,12,10],[78,88,13,11],[108,102,14,12],[140,118,12,10],
  [10,118,11,9],[28,104,10,8],[62,95,11,9],[85,96,11,9],
  [88,22,10,8],[98,68,12,10],[110,88,11,9],[128,106,11,9],
  [148,78,10,8],[160,36,10,8],[165,135,9,8],
  [212,44,9,8],[215,10,8,7],
  [55,88,9,8],[32,95,9,8],[15,85,8,7],[72,82,10,8],[95,78,9,8],
  [118,98,10,9],[135,108,9,8],[155,126,9,8],[172,140,8,7],
];

export default function KhatlengLogoSVG({ size = 88 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 420 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Khatleng Farms logo"
    >
      <defs>
        <style>{`
          @keyframes roots-grow {
            0%,5%    { stroke-dashoffset:var(--L); opacity:0; }
            8%       { opacity:1; }
            40%      { stroke-dashoffset:0; opacity:1; }
            76%      { stroke-dashoffset:0; opacity:1; }
            88%      { opacity:0; }
            92%,100% { stroke-dashoffset:var(--L); opacity:0; }
          }
          .kf-root {
            fill:none;
            stroke:${G};
            stroke-linecap:round;
            animation:roots-grow 10s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Faint backdrop so logo stays legible on dark navbar */}
      <ellipse cx="210" cy="195" rx="196" ry="188" fill="rgba(255,255,255,0.07)" />

      {/* ── TRUNK ── */}
      <path
        fill={G}
        d="M 198,292 C 189,248 181,192 179,130
           C 182,118 194,111 207,112
           C 220,113 230,123 233,136
           C 235,194 240,250 245,292 Z"
      />

      {/* ── MAIN BRANCHES ── */}
      {/* Primary sweep — goes left from trunk */}
      <path d="M 192,152 C 170,137 140,117 106,101 C 76,87 46,81 20,86"
            stroke={G} strokeWidth="18" strokeLinecap="round" />
      {/* Secondary sweep — lower, more horizontal */}
      <path d="M 106,101 C 82,95 58,94 36,99 C 22,103 12,110 8,118"
            stroke={G} strokeWidth="12" strokeLinecap="round" />
      {/* Upper branch — curves up-left */}
      <path d="M 143,121 C 125,104 108,85 96,65 C 86,49 82,33 86,19"
            stroke={G} strokeWidth="11" strokeLinecap="round" />
      {/* Second upper branch */}
      <path d="M 165,134 C 153,116 146,95 146,75 C 146,59 151,45 159,33"
            stroke={G} strokeWidth="9" strokeLinecap="round" />
      {/* Small right branch from trunk top */}
      <path d="M 216,121 C 226,108 232,93 230,77 C 228,63 220,51 211,42"
            stroke={G} strokeWidth="8" strokeLinecap="round" />

      {/* Twig tips */}
      <path d="M 20,86  C 12,81 6,80 2,82"    stroke={G} strokeWidth="8"  strokeLinecap="round" />
      <path d="M 8,118  C 4,126 2,134 5,142"  stroke={G} strokeWidth="7"  strokeLinecap="round" />
      <path d="M 36,99  C 27,94 20,95 15,99"  stroke={G} strokeWidth="7"  strokeLinecap="round" />
      <path d="M 86,19  C 90,9 98,3 108,2"    stroke={G} strokeWidth="6"  strokeLinecap="round" />
      <path d="M 159,33 C 164,21 171,12 179,8" stroke={G} strokeWidth="6" strokeLinecap="round" />
      <path d="M 211,42 C 215,30 217,18 214,8" stroke={G} strokeWidth="5" strokeLinecap="round" />

      {/* ── LEAVES ── */}
      {LEAVES.map(([cx, cy, rx, ry], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={G} />
      ))}

      {/* ── ROOTS (animated) ── */}
      {ROOTS.map(([d, sw, L, delay], i) => (
        <path
          key={i}
          className="kf-root"
          d={d}
          strokeWidth={sw}
          style={{
            '--L': L,
            strokeDasharray: L,
            strokeDashoffset: L,
            animationDelay: `${delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── BIRDS (gold, upper-left) ── */}
      <path d="M 50,42  C 57,33 68,29 79,32  C 84,25 95,20 107,23"
            stroke={Au} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 66,26  C 72,18 82,14 92,17  C 96,11 106,7  116,10"
            stroke={Au} strokeWidth="3.0" strokeLinecap="round" />
      <path d="M 80,13  C 85,6  93,3  102,5  C 105,0  112,-2 121,1"
            stroke={Au} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
