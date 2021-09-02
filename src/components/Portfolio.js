import { 
  Heading, 
  Wrap, 
  WrapItem, 
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  burgerTags, 
  budgetTrackTags,
  cryptickTags
} from './projectTags/ProjectTags';
import React from 'react';
import VibeeMov from './videos/Vibee_TAB_demo.mp4';
import LearnSquadMov from './videos/Learn_Squad_TAB_demo.mp4';
import PubCrawlMov from './videos/Pub_Crawl_Gen_TAB_demo.mp4';
import BudgetTrackerMov from './videos/Budeget_Tracker_TAB_demo.mp4';
import BurgerDBMov from './videos/Burger_DB_TAB_demo.mp4';
import CryptickMov from './videos/Cryptick.mp4';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {

  const {colorMode} = useColorMode();

  const portColors = {
    light: "brand.900",
    dark: "brand.100"
  }

  const description = {
    vibee: "a social media app that allows you to analyze your words and choose from songs that could match your mood. Post your mood, song, and words for interesting combinations so the world can see!",
    pubCrawl: "an application that plans a night out for you! Just choose your city and a list of bars, pubs, and restaurants will display with a map on how to get to each one. Allows customization of the type of establishments you would like to visit.",
    learningSquad: "a fast paced trivia game. Pick a squad, and take a quiz from 6 different categories. Earn enough cash, and you will be able to mark your territory on a map in the name of your squad!",
    burgerDB: "an application where you can create a burger, put it on an eating list. You then devour it putting it on the 'In' list. Showcases SQL executions.",
    budgetTracker: "a simple, useful budget tracking application. Input your withdrawals and deposits to watch your wealth fluctuate with a graph",
    cryptick: "a minimalistic price ticker for crypto currencies. Quickly check current and recent info of your favorite cryptos"
  };

  return (
    <div>
      <Box as={Heading} size="xl" marginBottom="0.5rem" 
        textDecoration="underline crimson"
        color={portColors[colorMode]}
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
              desc={description.vibee}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard
              project="Pub Crawl"
              video={PubCrawlMov}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
              desc={description.pubCrawl}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Learning Squads"
              video={LearnSquadMov}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
              desc={description.learningSquad}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Burger DB"
              video={BurgerDBMov}
              prod="https://gentle-oasis-33918.herokuapp.com/"
              code="https://github.com/jfrausto/out-n-in-burger"
              tags={burgerTags}
              desc={description.burgerDB}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Budget Tracker"
              video={BudgetTrackerMov}
              prod="https://rocky-garden-31416.herokuapp.com/"
              code="https://github.com/jfrausto/Budget-Tracker"
              tags={budgetTrackTags}
              desc={description.budgetTracker}
            />
          </WrapItem>
          <WrapItem>
            <PortfolioCard 
              project="Cryptick"
              video={CryptickMov}
              prod="https://cryptick.vercel.app/"
              code="https://github.com/jfrausto/cryptick"
              tags={cryptickTags}
              desc={description.cryptick}
            />
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  )
}
