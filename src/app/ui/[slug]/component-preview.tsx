'use client'

import { ComponentItem } from '@/config/components'

export function ComponentPreview({ component }: { component: ComponentItem }) {
  const Component = component.component
  return <Component />
}