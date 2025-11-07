'use client'

import { useEffect } from 'react'

export default function ScriptsClient() {
  useEffect(() => {
    
    const observado = document.querySelector<HTMLElement>('#header-title')
    const alvo = document.querySelector<HTMLElement>('.header-icon')
    const alvo2 = document.querySelector<HTMLElement>('.icon')

    if (observado && alvo && alvo2) {
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
          const novaAltura = entry.target.clientHeight

          if (novaAltura > 28) {
            alvo.classList.add('wrapped')
            observado.style.lineHeight = '1em'
            alvo2.classList.add('icon2')
          } else {
            alvo.classList.remove('wrapped')
            alvo2.classList.remove('icon2')
            observado.style.lineHeight = 'auto'
          }
        }
      })

      observer.observe(observado)
    }

    
  }, [])

  return null // Este componente só manipula o DOM, não precisa renderizar nada
}