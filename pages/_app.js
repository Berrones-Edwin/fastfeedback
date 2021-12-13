import { ProvideAuth } from '@/lib/auth'
import theme from '@/styles/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import '../styles/globals.css'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  )
}

export default MyApp
