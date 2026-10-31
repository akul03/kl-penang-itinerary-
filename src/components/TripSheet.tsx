import { X, MapPin, Users, Ticket } from 'lucide-react'
import { trip } from '../data/itinerary'

export default function TripSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" role="dialog" aria-modal="true" aria-label="Trip info">
      <div className="absolute inset-0 bg-black/60" style={{ animation: 'fade-in .2s ease' }} onClick={onClose} />
      <div
        className="relative max-h-[85vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-bg p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] ring-1 ring-line"
        style={{ animation: 'sheet-up .3s cubic-bezier(.2,.8,.2,1)' }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{trip.title}</h2>
            <p className="text-sm text-muted">{trip.subtitle}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface ring-1 ring-line active:scale-95">
            <X size={18} />
          </button>
        </div>

        <section className="mb-5">
          <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted"><Users size={13} /> Travellers</h3>
          <p className="rounded-2xl bg-surface p-3.5 text-[14.5px] ring-1 ring-line">{trip.travellers}</p>
        </section>

        <section className="mb-5">
          <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted"><MapPin size={13} /> Stays</h3>
          <div className="space-y-2">
            {trip.stays.map(s => (
              <a key={s.name} href={s.mapsUrl} target="_blank" rel="noopener" className="block rounded-2xl bg-surface p-3.5 ring-1 ring-line transition active:scale-[0.98]">
                <div className="text-[14.5px] font-semibold">{s.name}</div>
                <div className="mt-0.5 text-[12.5px] text-muted">{s.address}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-accent"><MapPin size={13} /> Open in Maps</div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted"><Ticket size={13} /> Key bookings</h3>
          <ul className="space-y-2">
            {trip.bookings.map(b => (
              <li key={b} className="rounded-2xl bg-surface p-3.5 text-[13.5px] leading-relaxed ring-1 ring-line">{b}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
