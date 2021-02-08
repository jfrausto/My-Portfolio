import React from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Grid,
  Link,
  useColorMode,
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
          <Box 
            position="absolute"
            bottom="0"
            left="43.5%"
            justifySelf="center"
            p={2}
            borderRadius="md"
            border="1px solid"
            borderColor={useColorModeValue("brand.900", "brand.300")}
            >
              <Text fontSize="16px">
                powered by <Link href="https://chakra-ui.com/" isExternal>Chakra UI</Link>
              </Text>
          </Box>

        </Box>
        

      </Box>
    </ChakraProvider>
  );
}

export default App;
