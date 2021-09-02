import { Heading, Box, Container, Wrap, WrapItem, Button, List, ListIcon, ListItem, useColorMode } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaCheckCircle, FaWrench, FaHandshake } from "react-icons/fa";

export default function Contact() {

  const {colorMode} = useColorMode();

  const iconColors = {
    light: "brand.500",
    dark: "brand.300"
  }
  const fontColors = {
    light: "brand.900",
    dark: "brand.100"
  }
  return (
    <div>
      
        <Box
          marginTop={1}
          marginX="auto"
          maxW="1400px"
          >
            <Heading 
              textAlign="center" 
              textDecoration="underline crimson"
              color={fontColors[colorMode]}
            >
              Want to work together?
            </Heading>
        </Box>
      
      
        <Box
          maxW="1400px"
          marginX="auto"
        >
          <Container mt={8}>
          <List spacing={4} textAlign="left">
            <ListItem color={fontColors[colorMode]}>
              <ListIcon as={FaCheckCircle} color={iconColors[colorMode]} />
              I think outside the box. I'm willing to try new ideas and workflows to accomplish our goals. 
            </ListItem>
            <ListItem color={fontColors[colorMode]}>
              <ListIcon as={FaWrench} color={iconColors[colorMode]} />
              I'm able to quickly learn new technologies and apply their core principles to projects efficiently. 
            </ListItem>
            <ListItem color={fontColors[colorMode]}>
              <ListIcon as={FaHandshake} color={iconColors[colorMode]} />
              I love making new relationships and working with people of all walks of life. Let's work and create something great!
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
          </Container>
        </Box>

        <Container 
          mt={8}
          marginX="auto"
        >
          <Wrap justify="center" spacing="35px">
            <WrapItem>
              <Button as="a" target="_blank" variant="outline" href="https://github.com/jfrausto" textTransform="lowercase" leftIcon={<FaGithub />}>
                Github
              </Button>
            </WrapItem>
            <WrapItem>
              <Button as="a" target="_blank" variant="outline" href="https://www.linkedin.com/in/jesse-f-9182331ab/" textTransform="lowercase" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
            </WrapItem>
            <WrapItem>
              <Button as="a" target="_blank" variant="outline" href="mailto:fraustojesse24@gmail.com" textTransform="lowercase" leftIcon={<FaGoogle />}>
            fraustojesse24@gmail.com
            </Button>
            </WrapItem>
          </Wrap>
        </Container>
      
      
    </div>
  )
}
