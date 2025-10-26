'use client'

import { useEffect } from 'react'

export default function ForceFullReloadLinks() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a') as HTMLAnchorElement | null

      // Ignora se não for um link ou se for um link externo
      if (
        !anchor ||
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('rel')?.includes('external') ||
        anchor.href.startsWith('mailto:') ||
        anchor.href.startsWith('tel:') ||
        anchor.href.startsWith('http') && !anchor.href.startsWith(window.location.origin)
      ) {
        return
      }

      // Impede o roteamento SPA padrão
      e.preventDefault()

      // Redireciona com reload total
      window.location.href = anchor.href
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}