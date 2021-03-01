import { 
  Heading, 
  Wrap, 
  WrapItem, 
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  burgerTags, 
  budgetTrackTags 
} from './projectTags/ProjectTags';
import React from 'react';
import VibeeMov from './videos/Vibee_TAB_demo.mp4';
import LearnSquadMov from './videos/Learn_Squad_TAB_demo.mp4';
import PubCrawlMov from './videos/Pub_Crawl_Gen_TAB_demo.mp4';
import BudgetTrackerMov from './videos/Budeget_Tracker_TAB_demo.mp4';
import BurgerDBMov from './videos/Burger_DB_TAB_demo.mp4';
import PortfolioCard from './PortfolioCard';

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
            <PortfolioCard 
              project="Vibee"
              video={VibeeMov} 
              prod="https://evening-sands-41595.herokuapp.com/"
              code="https://github.com/jfrausto/FindYourVibe"
              tags={vibeeTags}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard
              project="Pub Crawl"
              video={PubCrawlMov}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Learning Squads"
              video={LearnSquadMov}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Burger DB"
              video={BurgerDBMov}
              prod="https://gentle-oasis-33918.herokuapp.com/"
              code="https://github.com/jfrausto/out-n-in-burger"
              tags={burgerTags}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Budget Tracker"
              video={BudgetTrackerMov}
              prod="https://rocky-garden-31416.herokuapp.com/"
              code="https://github.com/jfrausto/Budget-Tracker"
              tags={budgetTrackTags}
            />
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  )
}
