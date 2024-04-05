import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.BLUE_500};
  }

  body {
    -webkit-font-smoothing: antialiased;
    
    ${({ theme }) => css`
      background-color: ${theme.GRAY_900};
      color: ${theme.GRAY_300};
    `}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
