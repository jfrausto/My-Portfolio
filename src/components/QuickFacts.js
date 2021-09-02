import React from 'react';
import { Flex, Box, Text, Icon, useColorMode } from '@chakra-ui/react';

export default function QuickFacts({icon, heading, snippet}) {

  const {colorMode} = useColorMode();

  const factColors = {
    light: "brand.500",
    dark: "brand.300"
  }

  return (
    <>
      <Flex mt={1} mr={1}>
        <Icon as={icon} w={8} h={8} mt={2} color={factColors[colorMode]} />
        <Box ml="3" textAlign="left">
          <Text fontWeight="bold" fontSize="sm">
            {heading}
          </Text>
          <Text fontSize="xs">
            {snippet}
          </Text>
        </Box>
      </Flex>
    </>
  )
}
