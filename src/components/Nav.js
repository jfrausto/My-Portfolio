import React from 'react';
import { useColorMode, Text } from "@chakra-ui/react";
import { FaMale, FaLaptopCode, FaMailBulk } from 'react-icons/fa';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";



export default function Nav() {

  const {colorMode} = useColorMode();

  const brandColors = {
    light: "brand.900",
    dark: "brand.300"
  }

  return (
    <>
      <Tabs isFitted variant="unstyled">
        <TabList my={3}>
          <Tab
            borderRadius="md"
            _selected={{ 
              bg: "transparent",
              border: "2px solid",
              borderColor: brandColors[colorMode],
            }}
            _focus={{
              outline: "none"}} 
          >
            <FaMale/><Text ml="4px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]}>me</Text>
          </Tab>
          <Tab 
          borderRadius="md"
          _selected={{ 
            bg: "transparent",
            border: "2px solid",
            borderColor: brandColors[colorMode],
          }}
          _focus={{ outline: "none" }} 
          >
            <FaLaptopCode/><Text ml="4px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]}>work</Text>
          </Tab>
          <Tab
            borderRadius="md"
            _selected={{ 
              bg: "transparent",
              border: "2px solid",
              borderColor: brandColors[colorMode],
            }}
            _focus={{ outline: "none" }} 
            >
            <FaMailBulk/><Text ml="4px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]}>contact</Text>
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
    </>
  )
}
