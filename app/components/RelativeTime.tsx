// components/RelativeTime.tsx
'use client'

import { formatRelativeTime } from '@/lib/utils'

export default function RelativeTime({ date }: { date: string | Date }) {
  return <>{formatRelativeTime(new Date(date))}</>
}
