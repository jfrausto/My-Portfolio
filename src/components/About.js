import React from 'react';
import { Box, Heading, Stack, Image, Center, VStack, Wrap, WrapItem} from "@chakra-ui/react";
import AboutMeTags from './AboutMeTags';
import QuickFacts from './QuickFacts';
import Jesse from "./images/jesse_shopped_cropped.jpg";
import { FaHome, FaTv, FaItunesNote, FaPizzaSlice, FaSeedling, FaFire } from "react-icons/fa";

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
                    mb={3}
                    textAlign={["center", "center", "left", "left"]}
                    textDecoration="italic" as="h3" size="sm"
                  >
                    -- Technical Skills --
                  </Heading>

                  <AboutMeTags />

                  <Heading 
                    mt={3}
                    mb={1}
                    textAlign={["center", "center", "left", "left"]}
                    textDecoration="italic" as="h3" size="sm"
                  >
                    -- Quick Facts --
                  </Heading>
                  <Wrap spacing="15px" align="center">
                    <WrapItem>
                      <QuickFacts 
                        icon={FaHome}
                        heading={"Hometown"}
                        snippet={"East Los Angeles, CA"}
                      />
                    </WrapItem>
                    <WrapItem>
                      <QuickFacts 
                        icon={FaSeedling}
                        heading={"Currently Learning"}
                        snippet={"PHP, Kotlin, TypeScript"}
                      />
                    </WrapItem>
                    <WrapItem>
                      <QuickFacts 
                        icon={FaItunesNote}
                        heading={"Music"}
                        snippet={"Funk, Psych, R&B"}
                      />
                    </WrapItem>
                    <WrapItem>
                      <QuickFacts 
                        icon={FaFire}
                        heading={"Current Interests"}
                        snippet={"Cryptos, Music Production"}
                      />
                    </WrapItem>
                    <WrapItem>
                      <QuickFacts 
                        icon={FaTv}
                        heading={"Now Watching"}
                        snippet={"Archer, Beserk"}
                      />
                    </WrapItem>
                    <WrapItem>
                      <QuickFacts 
                        icon={FaPizzaSlice}
                        heading={"Favorite Cuisines"}
                        snippet={"Korean, Mexican, Japanese"}
                      />
                    </WrapItem>
                  </Wrap>
            </Box>
        </VStack>
      </Stack>
      
      
    </div>
  )
}
