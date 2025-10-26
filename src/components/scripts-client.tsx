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

    

    const minhaDiv = document.querySelector<HTMLElement>('#character-basic-stats')
    const containerA = document.querySelector<HTMLElement>('#character-main')
    const maincontent = document.querySelector<HTMLElement>('#main-content')
    const referencia = document.querySelector<HTMLElement>('#ascension-materials')

    if (minhaDiv && containerA && maincontent && referencia) {
      const mQ = window.matchMedia('(max-width: 825px)')

      const moverDiv = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          maincontent.insertBefore(minhaDiv, referencia)
        } else {
          containerA.appendChild(minhaDiv)
        }
      }

      moverDiv(mQ)
      mQ.addEventListener('change', moverDiv)
    }
  }, [])

  return null // Este componente só manipula o DOM, não precisa renderizar nada
}