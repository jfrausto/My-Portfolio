import { Container, Heading, Wrap, WrapItem, Center, Box } from '@chakra-ui/react'
import React from 'react'

export default function Portfolio() {
  return (
    <div>
      <Box as={Heading} marginBottom="2rem">
        Projects
      </Box>
      <Box
        bg="red.400"
        paddingX={6}
      >
        <Wrap spacing="30px" justify="center">
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="green.200">
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="tomato">
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="blue.200">
              Box 4
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="blackAlpha.500">
              Box 5
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  )
}
