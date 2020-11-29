import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff,
        --black: #000,
        
        // Standard sizes for spaces
        --spaceSmall: 0.25rem,
        --spaceMedium: 0.5rem,
        --spaceLarge: 1rem,
        --spaceXLarge: 2rem,
        --spaceXXLarge: 4rem,
    }

    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    button:active,
    button:focus {
        outline: none;
    }
`
export default GlobalStyles
