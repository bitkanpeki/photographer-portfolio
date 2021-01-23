import React from 'react'
import LayoutPortrait from './src/components/LayoutPortrait'

// export function wrapPageElement({ element, props }) {
//   return <Global {...props}>{element}</Global>
// }

export function wrapPageElement({ element, props }) {
  return <LayoutPortrait {...props}>{element}</LayoutPortrait>
}
