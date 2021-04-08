import React from 'react';
import { Flex, Box, Text, Icon, useColorModeValue } from '@chakra-ui/react';

export default function QuickFacts({icon, heading, snippet}) {
  return (
    <>
      <Flex mt={1} mr={1}>
        <Icon as={icon} w={8} h={8} mt={2} color={useColorModeValue("brand.500", "brand.300")} />
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
