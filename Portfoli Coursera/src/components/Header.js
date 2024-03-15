// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faMedium,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";
// import { Box, HStack,Stack } from "@chakra-ui/react";

// const socials = [
//   {
//     icon: faEnvelope,
//     url: "mailto: hello@example.com",
//   },
//   {
//     icon: faGithub,
//     url: "https://github.com",
//   },
//   {
//     icon: faLinkedin,
//     url: "https://www.linkedin.com",
//   },
//   {
//     icon: faMedium,
//     url: "https://medium.com",
//   },
//   {
//     icon: faStackOverflow,
//     url: "https://stackoverflow.com",
//   },
// ];

// const Header = () => {
//   const handleClick = (anchor) => () => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (<Stack space={3} alignItems="left">
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"
//       backgroundColor="#18181b"
//     >
//       <Box color="white" maxWidth="1280px" margin="0 auto">
//         <HStack
//           px={16}
//           py={4}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <nav>
//             {<a href="mailto: hello@example.com">
//     <FontAwesomeIcon icon={faEnvelope} size="2x"/>      
//             </a>
//            }
          
//             {
//               <a href="https://github.com">
//     <FontAwesomeIcon icon={faGithub} size="2x"/>      
//               </a>
              
//             }
//             {
//               <a href="https://www.linkedin.com">
//     <FontAwesomeIcon icon={faLinkedin} size="2x"/>      
//             </a>
//             }
//             {<a href="https://medium.com">
//     <FontAwesomeIcon icon={faMedium} size="2x"/>      
//             </a>
//             }
//             {
//               <a href="https://stackoverflow.com">
//     <FontAwesomeIcon icon={faStackOverflow} size="2x"/>      
//             </a>
//            }
//           </nav>
         
          
         
//           <nav>
//             <HStack spacing={8}>
//               {<a id="projects-section" href="/#project-me">Projects</a>}
//               {<a id="contactme-section"href="/#contact-me">Contact Me</a>}
//             </HStack>
//           </nav>
//         </HStack>
//       </Box>
//     </Box>
//     </Stack>
//   );
// };
// export default Header;
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Stack space={3} alignItems="left">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              {socials.map((social, index) => (
                <a key={index} href={social.url} style={{ marginRight: '20px' }}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </nav>
            <nav>
              <HStack spacing={8}>
                <a id="projects-section" href="/#project-me">
                  Projects
                </a>
                <a id="contactme-section" href="/#contact-me">
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;

