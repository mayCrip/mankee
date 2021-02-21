import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans Condensed', 'Helvetica Neue', sans-serif
  }

  a, a:visited {
    color: ${props => props.theme.palette.primary.main};
  }
`
export default GlobalStyle
