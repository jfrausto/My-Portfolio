import { Heading, Box, Container, HStack, Button, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaCheckCircle, FaWrench, FaHandshake } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      
        <Box
          marginTop={8}
          maxW="1400px"
          >
            <Heading textAlign="center">
              Want to work together?
            </Heading>
        </Box>
      
      
        <Box
          maxW="1400px"
        >
          <Container mt={8}>
          <List spacing={4} textAlign="left">
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={FaWrench} color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={FaHandshake} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
          </Container>
        </Box>

        <Container mt={8}>
          <HStack justify="center" spacing="50px" >
            <Button as="a" target="_blank" variant="outline" href="https://github.com/jfrausto" textTransform="lowercase" leftIcon={<FaGithub />}>
              Github
            </Button>
            <Button as="a" target="_blank" variant="outline" href="https://www.linkedin.com/in/jesse-f-9182331ab/" textTransform="lowercase" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
            <Button as="a" target="_blank" variant="outline" href="mailto:fraustojesse24@gmail.com" textTransform="lowercase" leftIcon={<FaGoogle />}>
            fraustojesse24@gmail.com
            </Button>
          </HStack>
        </Container>
      
      
    </div>
  )
}
