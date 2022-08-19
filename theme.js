import { extendTheme } from "@chakra-ui/react";
import "@fontsource/source-sans-pro"
import '@fontsource/open-sans'

export const theme = extendTheme({
  fonts:{
    heading: `'Source Sans Pro', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    primary: "#0E2368",
    secondary: "#E23744",
    border:'#424961'
    },
});
