import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  extendTheme
} from '@chakra-ui/react';
// import theme from "./theme.js";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useTheme } from '@emotion/react';

function App() {

  // const theme = useTheme();

  // my personal brand colors
  const myColors = {
    colors: {
      brand: {
        100: "#ffebeb",
        300: "#ffa400",
        500: "#009ffd",
        700: "#dc143c",
        900: "#233347"
      }
    }
  };
  const theme = extendTheme( myColors );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
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
