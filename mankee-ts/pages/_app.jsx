import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global-styles'
import { defaultTheme } from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
