import { useState } from 'react'
import { ChevronDown, Copy, MapPin } from 'lucide-react'
import type { Stop } from '../data/itinerary'
import { categories } from '../categories'

interface Props {
  stop: Stop
  last: boolean
  onCopy: (address: string) => void
}

function Detail({ label, text }: { label: string; text?: string }) {
  if (!text) return null
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</div>
      <p className="mt-0.5 text-[14px] leading-relaxed">{text}</p>
    </div>
  )
}

export default function StopCard({ stop, last, onCopy }: Props) {
  const [open, setOpen] = useState(false)
  const cat = categories[stop.category]
  const Icon = cat.icon
  const hasDetails = stop.whatsGood || stop.whatToEat || stop.notes || stop.warn || stop.mapsUrl || stop.address

  return (
    <li className="relative flex gap-3">
      <div className="flex w-14 shrink-0 flex-col items-center">
        <span className="rounded-full bg-surface px-2 py-1 text-[11px] font-semibold tabular-nums text-muted ring-1 ring-line">
          {stop.time}
        </span>
        {!last && <span className="mt-1 w-px flex-1 bg-line" />}
      </div>

      <div className="mb-3 min-w-0 flex-1 overflow-hidden rounded-2xl bg-surface ring-1 ring-line">
        <button
          type="button"
          onClick={() => hasDetails && setOpen(o => !o)}
          aria-expanded={open}
          className="flex w-full items-start gap-2 p-3.5 text-left transition active:scale-[0.99] active:bg-line/40"
        >
          <div className="min-w-0 flex-1">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${cat.pill}`}>
              <Icon size={12} strokeWidth={2.4} />
              {cat.label}
            </span>
            <h3 className="mt-1.5 text-[16px] font-semibold leading-snug">{stop.title}</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{stop.summary}</p>
          </div>
          {hasDetails && (
            <ChevronDown
              size={18}
              className={`mt-1 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          )}
        </button>

        <div className="expand" data-open={open}>
          <div>
            <div className="space-y-3 border-t border-line px-3.5 pb-3.5 pt-3">
              {stop.warn && (
                <div className="rounded-xl bg-amber-500/15 px-3 py-2 text-[13.5px] font-medium leading-snug text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300">
                  {stop.warn}
                </div>
              )}
              <Detail label="What's good" text={stop.whatsGood} />
              <Detail label="What to eat" text={stop.whatToEat} />
              <Detail label="Notes" text={stop.notes} />
              {stop.address && <p className="text-[12.5px] text-muted">📍 {stop.address}</p>}
              {stop.mapsUrl && (
                <div className="flex gap-2">
                  <a
                    href={stop.mapsUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-accent text-[14px] font-semibold text-white transition active:scale-[0.97] active:opacity-80"
                  >
                    <MapPin size={16} /> Open in Maps
                  </a>
                  {stop.address && (
                    <button
                      type="button"
                      onClick={() => onCopy(stop.address!)}
                      className="flex h-11 items-center justify-center gap-1.5 rounded-xl px-3.5 text-[13px] font-semibold ring-1 ring-line transition active:scale-[0.97] active:bg-line/50"
                    >
                      <Copy size={14} /> Copy address
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
