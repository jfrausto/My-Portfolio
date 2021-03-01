import React from 'react';
import {
  Center, 
  VStack,
  Heading,
  Link,
  HStack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';


export default function PortfolioCard({ project, video, prod, code, tags}) {
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
                          size="sm"
                          variant="subtle"
                          colorScheme={obj.color}
                        >
                          {obj.tech}
                        </Tag>
                       )
                    }
                  </HStack>
                  <Link fontSize="sm" pt="0" href={code} isExternal><i>source</i></Link>
                </VStack>
            </Center>
    </>
  )
}
