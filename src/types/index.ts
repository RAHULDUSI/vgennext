import type { LucideIcon } from 'lucide-react'

export type Service = {
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  path: string
  eyebrow: string
  headline: string
  capabilities: string[]
}

export type Industry = {
  name: string
  icon: LucideIcon
  path: string
  description: string
}
