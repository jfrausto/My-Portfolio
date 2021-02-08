import React from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Grid,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import theme from "./theme.js";
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
import theme from "./theme";
import MainHeading from "./components/MainHeading";
import Nav from './components/Nav';
import Goo from "./components/Goo";
import Footer from './components/Footer';



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
          <MainHeading  />
          <Goo/>
        </Grid>

        {/* 
            PLACE HOLDING TEXT EVERYWHERE rn
            these two grids provide 100% window height rn
            will contain side navigation bar with
            - about me
            - links and screenshots to projects
            - contact 
        */}
        {/* <Router> */}
          {/* <VStack
            minH="15vh"
            borderTop="2px"
            borderTopColor="brand.300"
            p={3}
          >
            <Nav/>
          </VStack>

          <Box
            minH="85vh"
            bg="blue.800"
            p={8}
          >   
            <Switch>
              <Route exact path={["/", "/about"]}>
                <About/>
              </Route>
              <Route exact path="/portfolio" >
                <Portfolio />
              </Route>
              <Route path="/contact" >
                <Contact/>
              </Route>
            </Switch>
          </Box> */}
        {/* </Router> */}
        
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
