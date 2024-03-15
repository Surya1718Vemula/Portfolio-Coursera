import React from "react";
import { Avatar, Heading, VStack,Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
<Avatar src="https://i.pravatar.cc/150?img=7" size="xl" />
    <VStack space={2} alignItems="center">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        {greeting}
      </Heading>
      <Heading as="h3" size="md" textAlign="center" color="white">
        {bio1}
      </Heading>
      <Heading as="h3" size="md" textAlign="center" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);


export default LandingSection;
