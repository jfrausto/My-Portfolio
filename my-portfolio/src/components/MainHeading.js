import React from 'react';
import { 
  useColorModeValue, 
  VStack,
  Heading,
  Text,
  Box
 } from '@chakra-ui/react';


export default function MainHeading() {
  return (
    <>
      <VStack spacing={8}>
            {/* need special variants for name and taglines */}
            <Heading 
              color={useColorModeValue("brand.900", "brand.300")}
              fontSize={["xl", "2xl", "3xl", "5xl"]} 
              lineHeight="shorter" 
              maxW="56rem"
              letterSpacing="tighter"
              zIndex="overlay"
            >
              Hi, my name is Jesse Frausto. I'm a full-stack web developer.
            </Heading>
            <Text 
              p={2}
              borderRadius="lg"
              bg={useColorModeValue("brand.900", "transparent")}
              color={useColorModeValue("brand.300", "brand.700")} 
              fontWeight="black" 
            >
              V V V V V V V V V V 
            </Text>
          </VStack>
    </>
  )
}
