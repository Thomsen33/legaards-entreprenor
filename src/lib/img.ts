import manifest from '../data/images.json';

type Entry = { w: number; h: number; sizes: number[] };
const m = manifest as Record<string, Entry>;

export function imgData(name: string) {
  const e = m[name];
  if (!e) throw new Error(`Billede findes ikke i manifest: ${name}`);
  const w800 = Math.min(e.w, 800);
  const w1600 = Math.min(e.w, 1600);
  const h800 = Math.round((e.h * w800) / e.w);
  const src = `/img/${name}-800.webp`;
  const full = e.sizes.includes(1600) ? `/img/${name}-1600.webp` : src;
  const srcset = e.sizes.includes(1600) ? `${src} ${w800}w, ${full} ${w1600}w` : `${src} ${w800}w`;
  return { src, full, srcset, width: w800, height: h800 };
}
