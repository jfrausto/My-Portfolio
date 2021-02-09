import React from 'react';
import { Box, Text, useColorModeValue, Link } from '@chakra-ui/react';


export default function Footer() {
  return (
    <>
      <Box
            position="absolute"
            bottom="0%"
            left="20%"
            w="60%"
            p={2}
            borderRadius="md"
            border="1px solid"
            borderColor={useColorModeValue("brand.900", "brand.300")}
            >
              <Text fontSize={["10px", "10px", "12px", "12px"]}>
                powered by <Link href="https://chakra-ui.com/" isExternal>Chakra UI </Link> | <Link href="https://reactjs.org/" isExternal>React</Link> | <Link href="https://www.react-spring.io/" isExternal>React-Spring</Link>
              </Text>
          </Box>
    </>
  )
}
