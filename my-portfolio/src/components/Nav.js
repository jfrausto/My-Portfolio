import React from 'react';
import { HStack, Text, Stack, Box, Spacer, Flex } from "@chakra-ui/react";


export default function Nav() {
  return (
    <>
    {/* navigation stack */}
      {/* <HStack
        p={3}
        bg="blue.200"
        spacing
      > */}
      <Flex justifySelf="flex-end">
          <Box h="24"  w="24" p={3} bg="red.500">
          adsf
          </Box>
          <Spacer/>
          <Box h="24" w="24" p={3} bg="red.800">
            xxxx
          </Box>
          <Spacer/>
          <Box h="24" w="24" p={3} bg="red.100">
            zzzz
          </Box>
        </Flex>
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
