import { 
  Container, 
  Heading, 
  Wrap, 
  WrapItem, 
  Center, 
  Box,
  AspectRatio,
  chakra
} from '@chakra-ui/react'
import React from 'react';
import VibeeMov from './videos/Vibee_demo.mp4';
import LearnSquadMov from './videos/Learn_Squad_demo.mp4';
import PubCrawlMov from './videos/Pub_Crawl_Gen_demo.mp4';
import BudgetTrackerMov from './videos/Budget_Tracker_demo.mp4';
import BurgerDBMov from './videos/Burger_DB_demo.mp4';



export default function Portfolio() {
  return (
    <div>
      <Box as={Heading} marginBottom="2rem" marginTop={2}>
        Projects
      </Box>
      <Box
        bg="red.400"
        paddingX={6}
      >
        <Wrap spacing="30px" justify="center">
          <WrapItem>
            <Center maxW="480px" p={4} bg="red.200">
                <video autoplay="true" loop="true">
                  <source src={VibeeMov} type="video/mp4" />
                </video>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={4} bg="green.200">
              <video autoplay="true" loop="true">
                <source src={PubCrawlMov} type="video/mp4" />
              </video>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={4} bg="black">
              <video autoplay="true" loop="true">
                <source src={LearnSquadMov} type="video/mp4" />
              </video>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={4} bg="blue.200">
              <video autoplay="true" loop="true">
                <source src={BurgerDBMov} type="video/mp4" />
              </video>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={4} bg="blackAlpha.500">
              <video autoplay="true" loop="true">
                <source src={BudgetTrackerMov} type="video/mp4" />
              </video>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  )
}
