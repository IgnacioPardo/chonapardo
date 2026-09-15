'use client';
import { useEffect, useRef } from 'react';
import type { Ref } from 'react';

const SWEEP = 126;
const angle = (f: number) => -SWEEP + f * SWEEP * 2;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const pt = (cx: number, cy: number, r: number, f: number) => {
  const a = (angle(f) * Math.PI) / 180;
  return [cx + r * Math.sin(a), cy - r * Math.cos(a)] as const;
};

interface DialProps {
  cx: number;
  cy: number;
  r: number;
  max: number;
  labelEvery: number;
  unit: string;
  needleRef: Ref<SVGGElement>;
  redlineFrom?: number;
}

function Dial({ cx, cy, r, max, labelEvery, unit, needleRef, redlineFrom }: DialProps) {
  const els = [];
  for (let i = 0; i <= max; i++) {
    const f = i / max;
    const red = redlineFrom !== undefined && f >= redlineFrom - 1e-6;
    const [x1, y1] = pt(cx, cy, r - 4, f);
    const [x2, y2] = pt(cx, cy, r - 24, f);
    els.push(<line key={`M${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={red ? '#ff2a1a' : '#ff8a2a'} strokeWidth={5} strokeLinecap="round" />);
    if (i % labelEvery === 0) {
      const [lx, ly] = pt(cx, cy, r - 50, f);
      els.push(
        <text key={`L${i}`} x={lx} y={ly} fill={red ? '#ff6a5a' : '#f0e0d0'} fontSize={35} textAnchor="middle" dominantBaseline="central" fontFamily="Arial, Helvetica, sans-serif">
          {i}
        </text>
      );
    }
    if (i < max) {
      const [a1, b1] = pt(cx, cy, r - 4, f + 0.5 / max);
      const [a2, b2] = pt(cx, cy, r - 14, f + 0.5 / max);
      els.push(<line key={`m${i}`} x1={a1} y1={b1} x2={a2} y2={b2} stroke="#8a5a34" strokeWidth={2.5} strokeLinecap="round" />);
    }
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 20} fill="none" stroke="#3c3c3c" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r + 10} fill="#080808" stroke="#181818" strokeWidth="2" />
      {els}
      <text x={cx} y={cy + 62} fill="#9a9a9a" fontSize="21" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="1">
        {unit}
      </text>
      <g ref={needleRef} transform={`rotate(${angle(0)} ${cx} ${cy})`}>
        <polygon points={`${cx - 7},${cy + 28} ${cx + 7},${cy + 28} ${cx + 2.6},${cy - r + 32} ${cx - 2.6},${cy - r + 32}`} fill="#ff4d16" />
        <circle cx={cx} cy={cy} r="18" fill="#141414" stroke="#ff8a2a" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="6" fill="#ff6a2a" />
      </g>
    </g>
  );
}

export const ObdCluster = () => {
  const tachRef = useRef<SVGGElement>(null);
  const loadRef = useRef<SVGGElement>(null);
  const LOAD = { cx: 520, cy: 300, r: 210, max: 16 };
  const TACH = { cx: 1080, cy: 300, r: 210, max: 7 };

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rpm = 880;
    let target = 880;
    let nextRev = performance.now() + 2600;
    const set = (v: number) => {
      const rf = clamp01(v / 7000);
      const lf = clamp01((2.4 + rf * 9.5) / LOAD.max);
      tachRef.current?.setAttribute('transform', `rotate(${angle(rf)} ${TACH.cx} ${TACH.cy})`);
      loadRef.current?.setAttribute('transform', `rotate(${angle(lf)} ${LOAD.cx} ${LOAD.cy})`);
    };
    if (reduce) {
      set(880);
      return;
    }
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (now > nextRev) {
        target = 2600 + Math.random() * 3600;
        nextRev = now + 1800 + Math.random() * 3400;
        window.setTimeout(() => (target = 820 + Math.random() * 150), 320 + Math.random() * 500);
      }
      rpm += (target - rpm) * Math.min(1, dt * 4) + (Math.random() - 0.5) * 16;
      set(rpm);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [LOAD.cx, LOAD.cy, LOAD.max, TACH.cx, TACH.cy]);

  return (
    <svg className="obd_svg" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid meet" role="img" aria-label="E36 OBD live gauges">
      <rect x="0" y="0" width="1600" height="600" fill="#050505" />
      <Dial {...LOAD} labelEvery={2} unit="CARGA  ms" needleRef={loadRef} />
      <Dial {...TACH} labelEvery={1} unit="1/min  x1000" needleRef={tachRef} redlineFrom={6 / 7} />
    </svg>
  );
};
