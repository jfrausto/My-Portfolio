import React from 'react';
import { Box, Text, useColorMode, Link } from '@chakra-ui/react';


export default function Footer() {
  const {colorMode} = useColorMode();
  const footColors = {
    light: "brand.900",
    dark: "brand.300"
  }
  return (
    <>
      <Box
            position="absolute"
            bottom="0%"
            left="20%"
            w="60%"
            p={2}
            mb={1}
            borderRadius="md"
            border="1px solid"
            borderColor={footColors[colorMode]}
            >
              <Text fontSize={["10px", "10px", "12px", "12px"]}>
                powered by <Link href="https://chakra-ui.com/" isExternal>Chakra UI </Link> | <Link href="https://reactjs.org/" isExternal>React</Link> | <Link href="https://www.react-spring.io/" isExternal>React-Spring</Link>
              </Text>
          </Box>
    </>
  )
}
