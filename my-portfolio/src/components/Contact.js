import { Heading, Box, Container, Wrap, WrapItem, Button, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaCheckCircle, FaWrench, FaHandshake } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      
        <Box
          marginTop={1}
          maxW="1400px"
          >
            <Heading 
              textAlign="center" 
              textDecoration="underline crimson"
              color={useColorModeValue("brand.900", "brand.100")}
            >
              Want to work together?
            </Heading>
        </Box>
      
      
        <Box
          maxW="1400px"
        >
          <Container mt={8}>
          <List spacing={4} textAlign="left">
            <ListItem color={useColorModeValue("brand.900", "brand.100")}>
              <ListIcon as={FaCheckCircle} color={useColorModeValue("brand.500", "brand.300")} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem color={useColorModeValue("brand.900", "brand.100")}>
              <ListIcon as={FaWrench} color={useColorModeValue("brand.500", "brand.300")} />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem color={useColorModeValue("brand.900", "brand.100")}>
              <ListIcon as={FaHandshake} color={useColorModeValue("brand.500", "brand.300")} />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
          </Container>
        </Box>

        <Container mt={8}>
          <Wrap justify="center" spacing="35px" shouldWrapChildren="true">
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
