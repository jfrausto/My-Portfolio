import React from 'react';
import { HStack, VStack, IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";



export default function Nav() {
  return (
    <>
      <Tabs isFitted variant="unstyled">
        <TabList my={3}>
          <Tab
            borderRadius="md"
            _selected={{ 
              bg: useColorModeValue("transparent", "transparent"),
              border: "1px solid",
              borderColor: useColorModeValue("brand.900", "brand.300"),
            }}
            _focus={{
              outline: "none"}} 
          >
            <IconButton 
              size="lg" 
              h="12" w="12"
              variant="ghost" 
              icon={<FaMale/>}
              color={useColorModeValue("brand.900", "brand.100")}
              _focus={{
                  outline: "none"
              }} 
            />
          </Tab>
          <Tab 
          borderRadius="md"
          _selected={{ 
            bg: useColorModeValue("transparent", "transparent"),
            border: "1px solid",
              borderColor: useColorModeValue("brand.900", "brand.300"),
          }}
          _focus={{ outline: "none" }} 
          >
            <IconButton 
              size="lg" 
              h="12" w="12"
              variant="ghost" 
              icon={<FaLaptopCode/>}
              color={useColorModeValue("brand.900", "brand.100")}
              _focus={{
                  outline: "none"
              }} 
            />
          </Tab>
          <Tab
            borderRadius="md"
            _selected={{ 
              bg: useColorModeValue("transparent", "transparent"),
              border: "1px solid",
              borderColor: useColorModeValue("brand.900", "brand.300"),
            }}
            _focus={{ outline: "none" }} 
            >
            <IconButton 
              size="lg" 
              h="12" w="12"
              variant="ghost" 
              icon={<FaMailBulk/>}
              color={useColorModeValue("brand.900", "brand.100")}
              _focus={{
                  outline: "none"
              }} 
            />
          </Tab>
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <About/>
          </TabPanel>
          <TabPanel>
            <Portfolio/>
          </TabPanel>
          <TabPanel>
            <Contact/>
          </TabPanel>
        </TabPanels>
      </Tabs>



    {/* navigation stack ---- a hstack with vstacks for centering easier */}
      {/* HSTACK BG GREEN */}
      {/* <HStack justify="center" spacing={["1", "4", "8", "20"]} my="auto"> */}
        {/* VSTACKS BGs? */}
          {/* <VStack h="20" w={["20", "24", "32", "40"]} p={2} justify="center">
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
        </HStack> */}
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
