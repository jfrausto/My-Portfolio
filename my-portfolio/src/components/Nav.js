import React from 'react';
import { HStack, Text, Stack, Box, Spacer, Flex } from "@chakra-ui/react";
import { Router, Link } from "react-router-dom";


export default function Nav() {
  return (
    <>
    {/* navigation stack */}
      {/* <HStack
        p={3}
        bg="blue.200"
        spacing
      > */}
      <HStack justify="center">
          <Box h="24"  w="24" p={3} bg="red.500">
            <Link to={"/about"}>
              about
            </Link>
          
          </Box>
          <Box h="24" w="24" p={3} bg="red.800">
            <Link to={"/portfolio"}>
              portfolio
            </Link>
          </Box>
          
          <Box h="24" w="24" p={3} bg="red.100">
            <Link to={"/contact"}>
              contact
            </Link>
          </Box>
        </HStack>
      {/* </HStack> */}

    {/* main content stack */}
    {/* react router switch */}


      {/* <VStack spacing={4} bg="red.100">
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
      </VStack> */}
    </>
  )
}
