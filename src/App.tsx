import { useCallback, useEffect, useRef, useState } from 'react'
import { Info, Moon, Sun } from 'lucide-react'
import { days, trip } from './data/itinerary'
import StopCard from './components/StopCard'
import TripSheet from './components/TripSheet'
import DishSheet from './components/DishSheet'
import { copyText } from './clipboard'

type Theme = 'dark' | 'light'

function read(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function write(key: string, value: string) {
  try { localStorage.setItem(key, value) } catch { /* storage unavailable */ }
}

function initialDay(): number {
  const fromHash = parseInt(window.location.hash.replace('#day-', ''), 10)
  const saved = parseInt(read('day') ?? '', 10)
  const n = Number.isFinite(fromHash) ? fromHash : saved
  return days.some(d => d.n === n) ? n : 1
}

export default function App() {
  const [day, setDay] = useState(initialDay)
  const [theme, setTheme] = useState<Theme>(() => (read('theme') === 'light' ? 'light' : 'dark'))
  const [sheet, setSheet] = useState(false)
  const [dishView, setDishView] = useState<{ title: string; ids: string[] } | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number>()
  const tabs = useRef<Record<number, HTMLButtonElement | null>>({})

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    write('theme', theme)
  }, [theme])

  useEffect(() => {
    write('day', String(day))
    history.replaceState(null, '', `#day-${day}`)
    tabs.current[day]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [day])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 2200)
  }, [])

  const onCopy = useCallback(async (address: string) => {
    showToast((await copyText(address)) ? 'Copied — paste into Grab' : 'Copy failed — long-press the address')
  }, [showToast])

  const current = days.find(d => d.n === day)!

  return (
    <div className="mx-auto min-h-screen max-w-[480px] pb-16">
      <header className="sticky top-0 z-30 bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 pb-2 pt-3">
          <div>
            <h1 className="text-[22px] font-bold leading-tight tracking-tight">{trip.title}</h1>
            <p className="text-[12.5px] text-muted">{trip.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface ring-1 ring-line transition active:scale-90"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setSheet(true)}
              aria-label="Trip info"
              className="flex h-10 items-center gap-1.5 rounded-full bg-accent px-3.5 text-[13px] font-semibold text-white transition active:scale-95"
            >
              <Info size={16} /> Trip info
            </button>
          </div>
        </div>

        <nav className="no-scrollbar flex gap-2 overflow-x-auto border-b border-line px-4 pb-3 pt-1" aria-label="Days">
          {days.map(d => {
            const active = d.n === day
            return (
              <button
                key={d.n}
                ref={el => { tabs.current[d.n] = el }}
                onClick={() => setDay(d.n)}
                aria-current={active ? 'true' : undefined}
                className={`shrink-0 rounded-2xl px-3.5 py-2 text-left transition active:scale-95 ${
                  active ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-surface ring-1 ring-line'
                }`}
              >
                <div className={`text-[10.5px] font-semibold uppercase tracking-wider ${active ? 'text-white/80' : 'text-muted'}`}>Day {d.n}</div>
                <div className="text-[13.5px] font-semibold">{d.date}</div>
                <div className={`max-w-[9.5rem] truncate text-[11.5px] ${active ? 'text-white/85' : 'text-muted'}`}>{d.label}</div>
              </button>
            )
          })}
        </nav>
      </header>

      <main className="px-4 pt-5">
        <div className="mb-4">
          <h2 className="text-lg font-bold">{current.date}</h2>
          <p className="text-sm text-muted">{current.label}</p>
        </div>
        <ol key={current.n}>
          {current.stops.map((s, i) => (
            <StopCard key={`${current.n}-${i}`} stop={s} last={i === current.stops.length - 1} onCopy={onCopy}
              onDishes={st => setDishView({ title: st.title, ids: st.dishes ?? [] })}
            />
          ))}
        </ol>
      </main>

      {sheet && <TripSheet onClose={() => setSheet(false)} />}
      {dishView && <DishSheet title={dishView.title} ids={dishView.ids} onClose={() => setDishView(null)} />}

      {toast && (
        <div
          role="status"
          className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2.5 text-[13.5px] font-medium text-bg shadow-xl"
          style={{ animation: 'toast-in .2s ease' }}
        >
          {toast}
        </div>
      )}
    </div>
  )
}
