import React from 'react';
import { 
  useColorMode, 
  VStack,
  Heading,
  Text,
  chakra
 } from '@chakra-ui/react';
 import { useSpring, animated, config} from 'react-spring';

// interface animated react-spring with chakra Text component
const AnimatedText = animated(Text);

export default function MainHeading() {

  const {colorMode} = useColorMode();

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

  const headingColor = {
    light: "brand.900",
    dark: "brand.300"
  }
  const leftGrad = {
    light: "brand.500",
    dark: "brand.700"
  }
  const rightGrad = {
    light: "brand.700",
    dark: "brand.500"
  }
  const arrowBg = {
    light: "brand.900",
    dark: "transparent"
  }
  const arrowColor = {
    light: "brand.300",
    dark: "brand.700"
  }


  return (
    <>
      <VStack spacing={8}>
            {/* need special variants for name and taglines */}
            <Heading 
              color={headingColor[colorMode]}
              fontSize={["xl", "2xl", "3xl", "5xl"]} 
              lineHeight="shorter" 
              maxW="56rem"
              letterSpacing="tighter"
              zIndex="overlay"
            >
              Hi, my name is 
                <chakra.span
                  bgGradient={`linear(to-l, ${leftGrad[colorMode]}, ${rightGrad[colorMode]})`}
                  bgClip="text"
                > Jesse Frausto
                </chakra.span>. 
              I'm a full-stack web developer.
            </Heading>
            <AnimatedText 
              p={2}
              borderRadius="lg"
              bg={arrowBg[colorMode]}
              color={arrowColor[colorMode]} 
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
