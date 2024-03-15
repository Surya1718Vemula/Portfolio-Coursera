// import { Heading, HStack, Image, Text, VStack ,Stack} from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import React from "react";

// const Card = ({ title, description, imageSrc }) => {
 
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
// //   return null;
// // };
// return (
//   <Stack
//     direction="column"
//     spacing={0}
//     borderWidth="1px"
//     borderRadius="lg"
//     borderColor="gray.200"
//     backgroundColor="white"
//     overflow="hidden"
//     width="100%"
//   >
//     <Image
//       src={imageSrc}
//       alt={title}
//       width="100%"
//       height="auto"
//       objectFit="cover"
//       borderRadius="lg"
//     />
//     <VStack spacing={2} alignItems="flex-start" p={4} bg="white">
//       <Heading as="h4" size="md" fontWeight="bold" color="black" bg="white">
//         {title}
//       </Heading>
//       <Text color="gray.600" bg="white">
//         {description}
//       </Text>
//       <HStack justifyContent="flex-start">
//         <Text fontSize="sm" color="black">See More</Text>
//         <FontAwesomeIcon icon={faArrowRight} size="sm" ml="2" />
//       </HStack>
      
//     </VStack>
//   </Stack>
// );
// };

// export default Card;
import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Stack
      direction="column"
      spacing={0}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.200"
      backgroundColor="white"
      overflow="hidden"
      width="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="auto"
        objectFit="cover"
        borderRadius="lg"
      />
      <VStack spacing={2} alignItems="flex-start" p={4} bg="white">
        <Heading as="h4" size="md" fontWeight="bold" color="black" bg="white">
          {title}
        </Heading>
        <Text color="gray.600" bg="white">
          {description}
        </Text>
        <HStack justifyContent="flex-start"> {/* Adjusted justification */}
          <FontAwesomeIcon icon={faArrowRight} size="sm" mr="2" /> {/* Added icon with margin */}
          <Text fontSize="sm" color="black">See More</Text>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Card;
