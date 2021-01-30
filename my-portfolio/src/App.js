import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react';
// import theme from "./theme.js";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from "./theme";
import MainHeading from "./components/MainHeading";
import Nav from './components/Nav';


function App() {


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">

        {/* 
            TOP GRID
            WILL HOLD NAME INTRO
            TYPOGRAPHY
            COLOR MODE SWITCHER
            
        */}
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <MainHeading />
        </Grid>

        {/* 
            PLACE HOLDING TEXT EVERYWHERE rn
            these two grids provide 100% window height rn
            will contain side navigation bar with
            - about me
            - links and screenshots to projects
            - contact 
        */}
        <Box 
          minH="15vh" 
          bg="blue.200"
          p={4}
        >
          {/* not using grid for its intended use here.. lol */}
          {/* could do a grid like */}
          <Nav/>
        </Box>
        {/* 
          another grid for the main content?????
        */}
        <Box
          minH="85vh"
          bg="blue.800"
        >
        </Box>

      </Box>
    </ChakraProvider>
  );
}

export default App;
