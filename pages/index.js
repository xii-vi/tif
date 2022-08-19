import { Stack } from "@chakra-ui/react";
import { LandingPageNavbar,About, LatestArticle, Footer } from "../components";

export default function Home() {
  return (
    <>
    <Stack spacing={20}>
    <LandingPageNavbar />
    <About />
    <LatestArticle />
    <Footer style={{backgroundColor:"#FCFCFC",textColor:"#646874" ,headingColor:"#0E2368",socialMediaColor:"#0E2368"}} />
    </Stack>
    
    </>
  )
}
