import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from "./theme";
import MainHeading from "./components/MainHeading";
import Nav from './components/Nav';
import Goo from "./components/Goo";
import Footer from './components/Footer';



function App() {


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize={["sm","md", "lg", "xl"]}>

        {/* 
            TOP GRID
            WILL HOLD NAME INTRO
            TYPOGRAPHY
            COLOR MODE SWITCHER
            
        */}
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <MainHeading  />
          <Goo/>
        </Grid>

        {/* 
            changed to box container
             - nav holds page components because of tab/panel structure
        */}
        <Box
          minH="100vh"
          maxW="1500px"
          marginX="auto"
          py={8}
          px={2}
          position="relative"
        >
          <Nav/>
          <Footer/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
