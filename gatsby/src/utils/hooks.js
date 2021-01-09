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
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'

    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
