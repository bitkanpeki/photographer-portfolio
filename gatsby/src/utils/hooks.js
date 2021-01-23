import { useEffect, useLayoutEffect } from 'react'

export const useOnClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      for (const ref of refs) {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}

export const useLockBodyScroll = () => {
  useEffect(() => {
    const { body } = document
    body.style.top = `-${window.scrollY}px`
    body.style.position = 'fixed'
    body.style.paddingRight = '12px'

    return () => {
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.paddingRight = '0'
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])
}
