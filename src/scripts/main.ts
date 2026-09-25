// Legaards – al interaktivitet på sitet (ingen eksterne biblioteker).

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

/* ---------- Mobilmenu ---------- */
const burger = $('[data-drawer-open]');
const setDrawer = (open: boolean) => {
  document.body.classList.toggle('drawer-open', open);
  burger?.setAttribute('aria-expanded', String(open));
};
burger?.addEventListener('click', () => setDrawer(true));
$$('[data-drawer-close]').forEach((el) => el.addEventListener('click', () => setDrawer(false)));

/* ---------- Dropdowns (klik/touch/tastatur – hover håndteres i CSS) ---------- */
$$('.has-sub').forEach((li) => {
  const btn = $('button', li)!;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !li.classList.contains('open');
    $$('.has-sub.open').forEach((o) => { o.classList.remove('open'); $('button', o)?.setAttribute('aria-expanded', 'false'); });
    li.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('click', () => $$('.has-sub.open').forEach((o) => o.classList.remove('open')));

/* ---------- Scroll-animationer ---------- */
const reveals = $$('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
} else reveals.forEach((el) => el.classList.add('in'));

/* ---------- Fuldskærmsgalleri ---------- */
const lb = $('[data-lightbox-root]')!;
const lbImg = $<HTMLImageElement>('[data-lb-img]')!;
const lbCap = $('[data-lb-caption]')!;
const lbCount = $('[data-lb-count]')!;
let lbItems: HTMLElement[] = [];
let lbIndex = 0;
let lastFocus: HTMLElement | null = null;

const lbShow = (i: number) => {
  lbIndex = (i + lbItems.length) % lbItems.length;
  const it = lbItems[lbIndex];
  lbImg.src = it.dataset.full!;
  lbImg.alt = it.dataset.caption ?? '';
  lbCap.textContent = it.dataset.caption ?? '';
  lbCount.textContent = `${lbIndex + 1} / ${lbItems.length}`;
  const next = lbItems[(lbIndex + 1) % lbItems.length];
  if (next) new Image().src = next.dataset.full!;
};
const lbOpen = (el: HTMLElement) => {
  const group = el.dataset.lightbox!;
  lbItems = $$(`[data-lightbox="${group}"]`).filter((x) => !x.hidden);
  lastFocus = el;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbShow(lbItems.indexOf(el));
  $('[data-lb-close]', lb)?.focus();
};
const lbClose = () => {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  lastFocus?.focus();
};
document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>('[data-lightbox]');
  if (t) { e.preventDefault(); lbOpen(t); }
});
$('[data-lb-close]')?.addEventListener('click', lbClose);
$('[data-lb-prev]')?.addEventListener('click', () => lbShow(lbIndex - 1));
$('[data-lb-next]')?.addEventListener('click', () => lbShow(lbIndex + 1));
lb.addEventListener('click', (e) => { if (e.target === lb || (e.target as HTMLElement).tagName === 'FIGURE') lbClose(); });

/* ---------- Galleri-filtre ---------- */
$$('[data-filter]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter!;
    $$('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    $$('[data-cat]').forEach((it) => { it.hidden = cat !== 'Alle' && it.dataset.cat !== cat; });
  });
});

/* ---------- Case-popup ---------- */
type CaseData = { slug: string; title: string; category: string; body: string[]; facts: { label: string; value?: string }[]; images: { src: string; alt: string; full: string }[] };
const casesEl = $('#cases-data');
const cases: CaseData[] = casesEl ? JSON.parse(casesEl.textContent || '[]') : [];
const cm = $('[data-case-root]')!;
const slides = $('[data-case-slides]', cm)!;
const dots = $('[data-case-dots]', cm)!;
let cIndex = 0;
let cCount = 0;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const caseShow = (i: number) => {
  cIndex = (i + cCount) % cCount;
  $$('img', slides).forEach((im, n) => im.classList.toggle('active', n === cIndex));
  $$('button', dots).forEach((d, n) => d.classList.toggle('active', n === cIndex));
};
const caseOpen = (slug: string, trigger?: HTMLElement) => {
  const c = cases.find((x) => x.slug === slug);
  if (!c) return;
  lastFocus = trigger ?? null;
  $('[data-case-tag]', cm)!.textContent = c.category;
  $('[data-case-title]', cm)!.textContent = c.title;
  $('[data-case-body]', cm)!.innerHTML = c.body.map((p) => `<p>${esc(p)}</p>`).join('');
  $('[data-case-facts]', cm)!.innerHTML = c.facts.filter((f) => f.value).map((f) => `<dt>${esc(f.label)}</dt><dd>${esc(f.value!)}</dd>`).join('');
  slides.innerHTML = c.images.map((im, n) => `<img src="${im.full}" alt="${esc(im.alt)}" ${n > 1 ? 'loading="lazy"' : ''}>`).join('');
  dots.innerHTML = c.images.map((_, n) => `<button type="button" aria-label="Billede ${n + 1}"></button>`).join('');
  $$('button', dots).forEach((d, n) => d.addEventListener('click', () => caseShow(n)));
  cCount = c.images.length;
  const multi = cCount > 1;
  $$('[data-case-prev],[data-case-next]', cm).forEach((b) => (b.hidden = !multi));
  dots.hidden = !multi;
  caseShow(0);
  cm.classList.add('open');
  cm.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  $('[data-case-close]', cm)?.focus();
  history.replaceState(null, '', `#${slug}`);
};
const caseClose = () => {
  cm.classList.remove('open');
  document.body.style.overflow = '';
  history.replaceState(null, '', location.pathname + location.search);
  lastFocus?.focus();
};
$$('[data-case]').forEach((el) => el.addEventListener('click', () => caseOpen(el.dataset.case!, el)));
$('[data-case-close]', cm)?.addEventListener('click', caseClose);
$('[data-case-prev]', cm)?.addEventListener('click', () => caseShow(cIndex - 1));
$('[data-case-next]', cm)?.addEventListener('click', () => caseShow(cIndex + 1));
cm.addEventListener('click', (e) => { if (e.target === cm) caseClose(); });
// Swipe på mobil
let touchX = 0;
slides.parentElement?.addEventListener('touchstart', (e) => (touchX = e.touches[0].clientX), { passive: true });
slides.parentElement?.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) caseShow(cIndex + (dx < 0 ? 1 : -1));
});
// Direkte link til en case: /cases/#nedrivning-industrihaller
if (location.hash && cases.some((c) => c.slug === location.hash.slice(1))) caseOpen(location.hash.slice(1));

/* ---------- Tastatur ---------- */
document.addEventListener('keydown', (e) => {
  if (lb.classList.contains('open')) {
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
    if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
  } else if (cm.classList.contains('open')) {
    if (e.key === 'Escape') caseClose();
    if (e.key === 'ArrowLeft') caseShow(cIndex - 1);
    if (e.key === 'ArrowRight') caseShow(cIndex + 1);
  } else if (e.key === 'Escape') setDrawer(false);
});

/* ---------- Formularer ----------
   Sendes som JSON til data-endpoint (Cloudflare Pages Function /api/kontakt). */
$$<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.side = location.pathname;
    const btn = $<HTMLButtonElement>('button[type="submit"]', form);
    form.classList.remove('sent', 'failed');
    if (btn) { btn.disabled = true; btn.dataset.label = btn.innerHTML; btn.textContent = 'Sender…'; }
    try {
      const res = await fetch(form.dataset.endpoint || '/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !out.ok) throw new Error(out.error || String(res.status));
      form.classList.add('sent');
      form.reset();
    } catch {
      form.classList.add('failed');
    } finally {
      if (btn) { btn.disabled = false; btn.innerHTML = btn.dataset.label || btn.innerHTML; }
      (window as any).turnstile?.reset?.($('.cf-turnstile', form));
    }
  });
});
