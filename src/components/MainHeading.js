import React from 'react';
import { 
  useColorModeValue, 
  VStack,
  Heading,
  Text,
  chakra
 } from '@chakra-ui/react';
 import { useSpring, animated, config} from 'react-spring';

// interface animated react-spring with chakra Text component
const AnimatedText = animated(Text);

export default function MainHeading() {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ transform: 'translateY(20px)'});
      await next({ transform: 'translateY(0px)'});
      await next({ transform: 'translateY(20px)'});
      await next({ transform: 'translateY(0px)'});
      await next({ transform: 'translateY(20px)'});
      await next({ transform: 'translateY(0px)'});
      await next({ transform: 'translateY(20px)'});
    },
    from: {transform: 'translateY(0px)'},
    config: config.wobbly
  });
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
              Hi, my name is 
                <chakra.span
                  bgGradient={`linear(to-l, ${useColorModeValue("brand.500", "brand.700")}, ${useColorModeValue("brand.700", "brand.500")})`}
                  bgClip="text"
                > Jesse Frausto
                </chakra.span>. 
              I'm a full-stack web developer.
            </Heading>
            <AnimatedText 
              p={2}
              borderRadius="lg"
              bg={useColorModeValue("brand.900", "transparent")}
              color={useColorModeValue("brand.300", "brand.700")} 
              fontWeight="black"
              position="relative"
              style={props}
            >
              V V V V V V V V V V 
            </AnimatedText>
          </VStack>
    </>
  )
}
