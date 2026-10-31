import { useEffect, useState } from 'react'
import type { Dish } from './data/dishes'

export interface DishPhoto {
  url: string
  artist: string
  license: string
}

const CACHE_PREFIX = 'dish-photos-v1:'

function readCache(id: string): DishPhoto[] | null {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + id)
    return raw ? (JSON.parse(raw) as DishPhoto[]) : null
  } catch {
    return null
  }
}

function writeCache(id: string, photos: DishPhoto[]) {
  try { localStorage.setItem(CACHE_PREFIX + id, JSON.stringify(photos)) } catch { /* storage unavailable */ }
}

const stripTags = (html: string) => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

async function fetchPhotos(query: string): Promise<DishPhoto[]> {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    `&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=3` +
    '&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=600&format=json&origin=*'
  const res = await fetch(url)
  if (!res.ok) return []
  const data = await res.json()
  const pages = Object.values(data?.query?.pages ?? {}) as Array<{
    index?: number
    imageinfo?: Array<{ thumburl?: string; extmetadata?: Record<string, { value?: string }> }>
  }>
  return pages
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
    .map(p => {
      const info = p.imageinfo?.[0]
      return {
        url: info?.thumburl ?? '',
        artist: stripTags(info?.extmetadata?.Artist?.value ?? '') || 'Unknown',
        license: stripTags(info?.extmetadata?.LicenseShortName?.value ?? '')
      }
    })
    .filter(p => p.url)
}

export type PhotoState = { status: 'loading' } | { status: 'done'; photos: DishPhoto[] }

export function useDishPhotos(dish: Dish): PhotoState {
  const [state, setState] = useState<PhotoState>(() => {
    const cached = readCache(dish.id)
    return cached ? { status: 'done', photos: cached } : { status: 'loading' }
  })

  useEffect(() => {
    if (readCache(dish.id)) return
    let cancelled = false
    fetchPhotos(dish.wikimediaQuery)
      .then(photos => {
        if (cancelled) return
        if (photos.length) writeCache(dish.id, photos)
        setState({ status: 'done', photos })
      })
      .catch(() => { if (!cancelled) setState({ status: 'done', photos: [] }) })
    return () => { cancelled = true }
  }, [dish.id, dish.wikimediaQuery])

  return state
}
