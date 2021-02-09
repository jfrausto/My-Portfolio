import React from 'react';
import { Box, Heading, Stack, Image, Text, Center, Container, VStack, List, ListItem, Divider } from "@chakra-ui/react";
import Jesse from "./images/jesse_shopped_cropped.jpg";

export default function About() {
  return (
    <div>
      <Stack
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        justifyItems="center"
        p={2}
        marginX="auto"
      >
        <Center>
        <Box
          justifySelf="center"
          maxW={["656px", "577px" , "448px", "448px"]}
          minW={["248px", "534px", "405px", "540px"]}
        >
            <Image
              src={Jesse}
              borderRadius="full"
              objectFit="contain"
              objectPosition="50% 50%"
              alt="it's me!"
              />
        </Box>
        </Center>
        <VStack 
          justifyContent="center"
        >
          <Container>
                  <Heading textDecoration="underline crimson" pb={2} textAlign={["center", "center", "left", "left"]}>
                    Hey!
                  </Heading>
                  <Text align="left">
                    I am a web developer from East Los Angeles. 
                    My love for web development began as a teenager tinkering with Xanga
                    blogs and MySpace pages. The responsiveness to seemingly endless build
                    combinations enthralled my young mind. Now, I'm on the road to
                    becoming your favorite web developer. My interests include
                    basketball, baseball, music, video games, the great outdoors, and learning new things.
                    Please, take a look at my work and let's connect.
                  </Text>
            </Container>
        </VStack>
      </Stack>
      
      
    </div>
  )
}
