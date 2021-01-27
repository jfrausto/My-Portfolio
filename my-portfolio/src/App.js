import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Button,
  Link
} from '@chakra-ui/react';
// import theme from "./theme.js";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from "./theme";
// import {Button} from "./theme/components/Button";

function App() {

  // const theme = useTheme();

  // my personal brand colors
  // const myColors = {
  //   colors: {
  //     brand: {
  //       100: "#ffebeb",
  //       300: "#ffa400",
  //       500: "#009ffd",
  //       700: "#dc143c",
  //       900: "#233347"
  //     }
  //   }
  // };
  // const theme = extendTheme( myColors );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">

        {/* 
            WILL HOLD NAME INTRO
            TYPOGRAPHY
            COLOR MODE SWITCHER
            
        */}
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text color="brand.300">
              Portfolio coming soon...!
            </Text>
            <Button>yooo</Button>
            <Text color="brand.700">hi i should be red</Text>
          </VStack>
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
