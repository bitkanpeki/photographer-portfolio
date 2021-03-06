const size = {
  // Small devices (landscape phones, 576px and up)
  small: '576px',
  // Medium devices (tablets, 768px and up)
  medium: '768px',
  // Large devices (desktops, 992px and up)
  large: '992px',
  // Extra large devices (large desktops, 1200px and up)
  extraLarge: '1200px',
}

export const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
  extraLarge: `(min-width: ${size.extraLarge})`,
}
