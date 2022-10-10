import {
  Link,
  Box,
  Flex,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";

const Footer = (props) => {


  return (
    <FooterContainer {...props}>
      <DevBy />
      <Profiles />
    </FooterContainer>
  );
};

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
      fill="#f0d290"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
    fill="#f0d290"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DevBy = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      w="200px"
      color="beige.100"
    >
      <Heading as="h4" size="md" m="3%" fontFamily="Barlow Condensed">
        Developed by:
      </Heading>
    </Box>
  );
};

const Profiles = () => {
  return (
    <Box marginTop={[0, 0, 5, 3]}>
      <Stack
        spacing={[2, 2, 0, 0]}
        width={["100%", "100%", "auto", "auto"]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        p={["1%", "auto", "1%", "1%"]}
      >
        <Flex direction={["row", "row", "none", "none"]}>
        <Flex direction="column">
          <Text
            fontSize="1.2rem"
            color="beige.100"
            w="160px"
            textAlign="center"
            mt="2%"
          >
            Fabricio Hang
          </Text>
          <Flex direction="row" justify="space-evenly" alignItems="center">
            <Link
              p="2%"
              href="https://www.github.com/saveasfabri"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              p="3%"
              href="https://www.linkedin.com/in/fabricioahang"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text
            fontSize="1.2rem"
            color="beige.100"
            w="160px"
            textAlign="center"
            mt="2%"
          >
            Melina Lencina
          </Text>
          <Flex direction="row" justify="space-evenly" alignItems="center">
            <Link
              p="2%"
              href="https://www.github.com/MelinaLencina"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              p="3%"
              href="https://www.linkedin.com/in/melina-lencina"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Flex>
        </Flex>
        </Flex>
        <Flex direction={["row", "row", "none", "none"]}>
        <Flex direction="column">
          <Text
            fontSize="1.2rem"
            color="beige.100"
            w="160px"
            textAlign="center"
            mt="2%"
          >
            Alan Vilalte
          </Text>
          <Flex direction="row" justify="space-evenly" alignItems="center">
            <Link p="2%" href="https://www.github.com/avilalte" target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              p="3%"
              href="https://www.linkedin.com/in/alan-vilalte"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text
            fontSize="1.2rem"
            color="beige.100"
            w="160px"
            textAlign="center"
            mt="2%"
          >
            Franco Yunes
          </Text>
          <Flex direction="row" justify="space-evenly" alignItems="center">
            <Link p="2%" href="https://www.github.com/fyunes" target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              p="3%"
              href="https://www.linkedin.com/in/francoyunes"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Flex>
        </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

const FooterContainer = ({ children }) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify={["center", "center", "space-evenly", "space-evenly"]}
      flexDirection={["column", "column", "row", "row"]}
      w="100%"
      bg="rgb(89, 53, 29, 0.5)"
      borderTop="1px #de834d solid"
      p="1%"
    >
      {children}
    </Flex>
  );
};

export default Footer;