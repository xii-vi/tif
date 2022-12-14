import { ChakraProvider,CSSReset } from '@chakra-ui/react'
import {theme} from "../theme"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  
  )
}

export default MyApp
