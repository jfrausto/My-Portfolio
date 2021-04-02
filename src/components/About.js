import React from 'react';
import { Box, Heading, Stack, Image, Center, VStack} from "@chakra-ui/react";
import AboutMeTags from './AboutMeTags';
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
          pl={2}
        >
          <Box
            maxW="60ch"
          >
                  <Heading textDecoration="underline crimson" pb={2} textAlign={["center", "center", "left", "left"]}>
                    Nice to meet you!
                  </Heading>
                  <Heading 
                    textAlign={["center", "center", "left", "left"]}
                    textDecoration="italic" as="h3" size="sm"
                  >
                    -- Technical Skills --
                  </Heading>
                  {/* <Text 
                    fontSize={["xs", "xs", "sm", "sm"]}
                    align={["center", "center", "left", "left"]}
                  >
                    MongoDB, Express, React, Node, PHP, CSS, HTML, SQL, Socket.io, Webpack, Javascript, JQuery
                  </Text> */}
                  <AboutMeTags />
                  
            </Box>
        </VStack>
      </Stack>
      
      
    </div>
  )
}
