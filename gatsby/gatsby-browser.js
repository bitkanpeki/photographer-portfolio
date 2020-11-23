import Global from './src/components/Global'

export function wrapPageElement({ element, props }) {
  return <Global {...props}>{element}</Global>
}
