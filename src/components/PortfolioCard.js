import React from 'react';
import {
  Center, 
  Box,
  VStack,
  Heading,
  Link,
  HStack,
  Tag,
  Text,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  useColorModeValue
} from '@chakra-ui/react';


export default function PortfolioCard({ project, video, prod, code, tags, desc}) {
  return (
    <>
      <Center maxW="480px" p={3}>
                <VStack>
                  <Heading size="md">
                    <Link href={prod} color={useColorModeValue("brand.500", "brand.300")} isExternal>
                      {project}
                    </Link>
                  </Heading>
                  <Link href={prod} isExternal>
                    <video autoPlay={true} loop={true}>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Link>
                  <HStack spacing={1}>
                    {
                      tags.map( (obj) => 
                        <Tag
                          key={obj.tech}
                          size="sm"
                          variant="subtle"
                          colorScheme={obj.color}
                        >
                          {obj.tech}
                        </Tag>
                       )
                    }
                  </HStack>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <p>
                        <AccordionButton>
                          <AccordionIcon />
                          <Box flex="1" textAlign="center">
                            about  
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </p>
                      <AccordionPanel pb={1}>
                        <Text fontSize={["xs", "xs", "sm", "sm"]}>
                          {desc}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Link fontSize="sm" pt="0" href={code} isExternal><i>source</i></Link>
                </VStack>
            </Center>
    </>
  )
}
