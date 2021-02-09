import { 
  Container, 
  Heading, 
  Wrap, 
  WrapItem, 
  Center, 
  Box,
  useColorModeValue,
  VStack,
  HStack,
  Link,
  Tag,
  Badge
} from '@chakra-ui/react'
import React from 'react';
import VibeeMov from './videos/Vibee_TAB_demo.mp4';
import LearnSquadMov from './videos/Learn_Squad_TAB_demo.mp4';
import PubCrawlMov from './videos/Pub_Crawl_Gen_TAB_demo.mp4';
import BudgetTrackerMov from './videos/Budeget_Tracker_TAB_demo.mp4';
import BurgerDBMov from './videos/Burger_DB_TAB_demo.mp4';



export default function Portfolio() {
  return (
    <div>
      <Box as={Heading} size="xl" marginBottom="0.5rem" 
        textDecoration="underline crimson"
        color={useColorModeValue("brand.900", "brand.100")}
        marginTop={1}
        >
        Projects
      </Box>
      <Box
        paddingX={6}
      >
        <Wrap spacing="30px" align="center" justify="center">
          <WrapItem>
            <Center maxW="480px" p={3}>
                <VStack>
                  <Heading size="md">
                    <Link href="https://evening-sands-41595.herokuapp.com/" color={useColorModeValue("brand.500", "brand.300")} isExternal>
                      Vibee
                    </Link>
                  </Heading>
                  <video autoPlay={true} loop={true}>
                    <source src={VibeeMov} type="video/mp4" />
                  </video>
                  <HStack spacing={1}>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="blue"
                    >
                      React
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="red"
                    >
                      Express
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="green"
                    >
                      MongoDB
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="yellow"
                    >
                      Socket.io
                    </Tag>
                  </HStack>
                </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={3}>
              <VStack>
                <Heading size="md">
                  <Link href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/" color={useColorModeValue("brand.500", "brand.300")} isExternal>
                    Pub Crawl
                  </Link>
                </Heading>
                <video autoPlay={true} loop={true}>
                  <source src={PubCrawlMov} type="video/mp4" />
                </video>
                <HStack spacing={1}>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="purple"
                    >
                      Materialize
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="red"
                    >
                      Express
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="orange"
                    >
                      jQuery
                    </Tag>
                  </HStack>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={3}>
              <VStack>
                <Heading size="md">
                  <Link href="https://learn-squad.herokuapp.com/" color={useColorModeValue("brand.500", "brand.300")} isExternal>
                    Learning Squads
                  </Link>
                </Heading>
                <video autoPlay={true} loop={true}>
                  <source src={LearnSquadMov} type="video/mp4" />
                </video>
                <HStack spacing={1}>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="green"
                    >
                      SQL
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="red"
                    >
                      Express
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="purple"
                    >
                      Bootstrap
                    </Tag>
                  </HStack>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={3}>
              <VStack>
                <Heading size="md">
                  <Link href="https://gentle-oasis-33918.herokuapp.com/" color={useColorModeValue("brand.500", "brand.300")} isExternal>
                    Burger DB
                  </Link>
                </Heading>
                <video autoPlay={true} loop={true}>
                  <source src={BurgerDBMov} type="video/mp4" />
                </video>
                <HStack spacing={1}>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="red"
                    >
                      Express
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="green"
                    >
                      SQL
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="purple"
                    >
                      Bootstrap
                    </Tag>
                  </HStack>
              </VStack>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center maxW="480px" p={3}>
              <VStack>
                <Heading size="md">
                  <Link href="https://rocky-garden-31416.herokuapp.com/" color={useColorModeValue("brand.500", "brand.300")} isExternal>
                    Budget Tracker
                  </Link>
                </Heading>
                <video autoPlay={true} loop={true}>
                  <source src={BudgetTrackerMov} type="video/mp4" />
                </video>
                <HStack spacing={1}>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="red"
                    >
                      Express
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="green"
                    >
                      SQL
                    </Tag>
                    <Tag 
                      size="sm"
                      variant="subtle"
                      colorScheme="yellow"
                    >
                      Webpack
                    </Tag>
                  </HStack>
              </VStack>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  )
}
