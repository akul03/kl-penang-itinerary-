import { useEffect } from 'react'
import { ArrowLeft, ImageOff, Search, Utensils } from 'lucide-react'
import { getDish, type Dish } from '../data/dishes'
import { useDishPhotos } from '../dishPhotos'

interface Badge {
  label: string
  tone: string
}

const GOOD = 'bg-green-500/15 text-green-700 dark:text-green-300'
const WARN = 'bg-red-500/15 text-red-700 dark:text-red-300'
const NEUTRAL = 'bg-sky-500/15 text-sky-700 dark:text-sky-300'

function meatBadge(meat: string): Badge {
  const m = meat.toLowerCase()
  if (m.includes('/pork')) return { label: 'contains pork', tone: WARN }
  if (m.startsWith('veg')) return { label: m.includes('shrimp') ? 'veg — has shrimp paste' : 'veg', tone: GOOD }
  if (m.includes('fish')) return { label: 'fish — no beef/pork', tone: GOOD }
  if (m.includes('chicken')) return { label: 'chicken ✓', tone: GOOD }
  if (m.includes('seafood')) return { label: 'seafood', tone: NEUTRAL }
  return { label: meat, tone: NEUTRAL }
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</div>
      <p className="mt-0.5 text-[14px] leading-relaxed">{text}</p>
    </div>
  )
}

function PhotoStrip({ dish }: { dish: Dish }) {
  const state = useDishPhotos(dish)
  const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(dish.searchQuery)}`

  if (state.status === 'loading') {
    return (
      <div className="flex gap-2 overflow-hidden">
        {[0, 1].map(i => (
          <div key={i} className="h-40 w-56 shrink-0 animate-pulse rounded-2xl bg-line" />
        ))}
      </div>
    )
  }

  if (!state.photos.length) {
    return (
      <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-bg ring-1 ring-line">
        <ImageOff size={22} className="text-muted" />
        <a
          href={searchUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-accent px-4 text-[13px] font-semibold text-white transition active:scale-95"
        >
          <Search size={14} /> Search photos
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto">
        {state.photos.map(p => (
          <img
            key={p.url}
            src={p.url}
            alt={dish.name}
            loading="lazy"
            className="h-40 w-56 shrink-0 snap-start rounded-2xl bg-line object-cover"
          />
        ))}
      </div>
      <p className="mt-1.5 text-[10.5px] leading-snug text-muted">
        Photos: {state.photos.map(p => `${p.artist}${p.license ? ` (${p.license})` : ''}`).join(' · ')} via Wikimedia Commons
      </p>
    </div>
  )
}

function DishCard({ dish, wide }: { dish: Dish; wide: boolean }) {
  const badge = meatBadge(dish.meat)
  return (
    <article
      className={`space-y-3 rounded-2xl bg-surface p-4 ring-1 ring-line ${wide ? 'w-[86%] shrink-0 snap-center' : ''}`}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[18px] font-bold leading-tight">{dish.name}</h3>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge.tone}`}>{badge.label}</span>
        </div>
        {dish.aka && <p className="mt-0.5 text-[13px] text-muted">{dish.aka}</p>}
      </div>
      <PhotoStrip dish={dish} />
      <p className="text-[14px] leading-relaxed">{dish.description}</p>
      <Row label="Looks like" text={dish.looksLike} />
      <Row label="Taste" text={dish.taste} />
      <div className="rounded-xl bg-amber-500/15 px-3 py-2.5 ring-1 ring-amber-500/30">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">Order tip</div>
        <p className="mt-0.5 text-[14px] font-medium leading-snug text-amber-800 dark:text-amber-200">{dish.orderTip}</p>
      </div>
    </article>
  )
}

interface Props {
  title: string
  ids: string[]
  onClose: () => void
}

export default function DishSheet({ title, ids, onClose }: Props) {
  const list = ids.map(getDish).filter((d): d is Dish => !!d)
  const multi = list.length > 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" role="dialog" aria-modal="true" aria-label="Dish guide">
      <div className="absolute inset-0 bg-black/60" style={{ animation: 'fade-in .2s ease' }} onClick={onClose} />
      <div
        className="relative flex max-h-[92vh] w-full max-w-[480px] flex-col rounded-t-3xl bg-bg ring-1 ring-line"
        style={{ animation: 'sheet-up .3s cubic-bezier(.2,.8,.2,1)' }}
      >
        <div className="flex items-center gap-3 px-4 pb-3 pt-4">
          <button
            onClick={onClose}
            aria-label="Back"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface ring-1 ring-line transition active:scale-90"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              <Utensils size={12} /> Dish guide{multi ? ` · ${list.length} dishes` : ''}
            </div>
            <h2 className="truncate text-[16px] font-bold">{title}</h2>
          </div>
        </div>

        <div className="overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          {multi ? (
            <div className="no-scrollbar flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-4">
              {list.map(d => <DishCard key={d.id} dish={d} wide />)}
            </div>
          ) : (
            <div className="px-4">
              {list.map(d => <DishCard key={d.id} dish={d} wide={false} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
