import { Heading, Box, Container, Center } from '@chakra-ui/react'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <Box
        bg="red.800"
      >
        <Heading>
          Contact Me
        </Heading>
      </Box>

      <Box 
        bg="green.800"
      >
        <Container>
          <Center>
            List of icons and links to my info goes here
          </Center>
        </Container>
      </Box>
      
    </div>
  )
}
