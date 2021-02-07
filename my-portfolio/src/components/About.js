import React from 'react';
import { Box, Heading, Stack, Image, Text, Center, Container, VStack } from "@chakra-ui/react";
import Jesse from "./images/jesse_shopped_cropped.jpg";

export default function About() {
  return (
    <div>
      <Stack
        bg="green.500"
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        justifyItems="center"
        p={2}
        mt={8}
      >
        <Center>
        <Box
          justifySelf="center"
          maxW={["656px", "577px" , "448px", "448px"]}
          minW={["248px", "534px", "405px", "540px"]}
          bg="red.500"
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
          bg="blue.200"
        >
          <Container>
                  <Heading textAlign={["center", "center", "left", "left"]}>
                    Hey!
                  </Heading>
                  <Text align="left">
                    I am a web developer from East Los Angeles. My interests include
                    basketball, music, video games, the great outdoors, and the internet.
                    My love for web development began as a teenager tinkering with Xanga
                    blogs and MySpace pages. The responsiveness to seemingly endless build
                    combinations enthralled my young mind. Now, I'm on the road to
                    becoming your favorite web developer.
                  </Text>
            </Container>
        </VStack>

      </Stack>
    </div>
  )
}
