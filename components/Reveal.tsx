'use client'

import { useEffect } from 'react'

/** `.reveal` elementlarni scroll qilinganda ko‘rsatadi. */
export default function Reveal() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add('show')
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
