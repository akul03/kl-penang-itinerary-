import { Bus, Utensils, Camera, Music, ShoppingBag, BedDouble, type LucideIcon } from 'lucide-react'
import type { Category } from './data/itinerary'

interface CategoryStyle {
  label: string
  icon: LucideIcon
  pill: string
}

export const categories: Record<Category, CategoryStyle> = {
  travel: { label: 'Travel', icon: Bus, pill: 'bg-sky-500/15 text-sky-600 dark:text-sky-300' },
  food: { label: 'Food', icon: Utensils, pill: 'bg-amber-500/15 text-amber-600 dark:text-amber-300' },
  sight: { label: 'Sight', icon: Camera, pill: 'bg-teal-500/15 text-teal-600 dark:text-teal-300' },
  nightlife: { label: 'Nightlife', icon: Music, pill: 'bg-purple-500/15 text-purple-600 dark:text-purple-300' },
  shopping: { label: 'Shopping', icon: ShoppingBag, pill: 'bg-pink-500/15 text-pink-600 dark:text-pink-300' },
  stay: { label: 'Stay', icon: BedDouble, pill: 'bg-green-500/15 text-green-600 dark:text-green-300' }
}
