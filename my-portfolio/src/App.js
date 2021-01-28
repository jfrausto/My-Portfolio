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
        <Grid minH="100vh" p={3}>
          <VStack spacing={0}>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
