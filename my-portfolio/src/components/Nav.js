import React from 'react';
import { HStack, VStack, IconButton } from "@chakra-ui/react";
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <>
    {/* navigation stack ---- a hstack with vstacks for centering easier */}
      {/* HSTACK BG GREEN */}
      <HStack justify="center" spacing={["1", "4", "8", "20"]} my="auto">
        {/* VSTACKS BGs? */}
          <VStack h="20" w={["20", "24", "32", "40"]} p={2} justify="center">
            <IconButton 
              size="lg" 
              h="16" w="16"
              variant="ghost" 
              icon={<FaMale/>}
              _focus={{
                  outline: "none"
              }} 
              as={Link} 
              to={"/about"}/>
          </VStack>
          <VStack h="20" w={["20", "24", "32", "40"]} p={2} justify="center">
            <IconButton 
            size="lg"
            h="16" w="16"
            variant="ghost" 
            icon={<FaLaptopCode/>}
            _focus={{
                outline: "none"
            }} 
            as={Link} 
            to={"/portfolio"}/>
          </VStack>
          <VStack h="20" w={["20", "24", "32", "40"]} mt="2" p={2} justify="center">
            <IconButton 
              size="lg"
              h="16" w="16"
              variant="ghost" 
              icon={<FaMailBulk/>}
              _focus={{
                  outline: "none"
              }} 
              as={Link} 
              to={"/contact"}/>
          </VStack>
        </HStack>
      {/* </HStack> */}

    {/* main content stack */}
    {/* react router switch */}


      {/* <VStack spacing={4} bg="red.100">
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
        <Text color="brand.300">
          Portfolio coming soon...!
        </Text>
      </VStack> */}
    </>
  )
}
