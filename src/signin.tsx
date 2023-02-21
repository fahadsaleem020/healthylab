import { FC } from "react";
import {
  useMediaQuery,
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
  HStack,
  useTheme,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { Link as RLink } from "react-router-dom";

const Signin: FC = () => {
  const [isMobile] = useMediaQuery("(min-width: 900px)");
  const [is700] = useMediaQuery("(max-width: 700px)");

  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box as="main" minH="100vh" px="7" bg={brand.dark_purple}>
      <Navbar color="white" py={isMobile ? undefined : "4"} mb="20" />
      <Box
        bg="white"
        maxW={"50rem"}
        m="auto"
        minH={"30rem"}
        rounded="2xl"
        overflow="hidden"
      >
        <Flex minH="30rem" flexDir={is700 ? "column" : undefined}>
          <Box
            flex={1}
            bgImage={"/signin_box.svg"}
            display={is700 ? "none" : "block"}
          />
          <VStack
            flex={1}
            alignItems="start"
            justifyContent={"center"}
            px={is700 ? "5" : undefined}
          >
            <Heading pl="2">Sign in</Heading>
            <Text pl="2">Sign in if you 're already registered.</Text>
            <VStack gap={10} px="2" pr="5" w="full" py="5" alignItems="start">
              <FormControl>
                <FormLabel>Your Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  variant={"filled"}
                  rounded="full"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  variant={"filled"}
                  rounded="full"
                />
              </FormControl>

              <HStack w="full">
                <Button
                  type="submit"
                  rounded="full"
                  color="white"
                  shadow="xl"
                  w="full"
                  bgGradient="linear(to-r, red.300, red.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, red.300)",
                  }}
                  _active={{
                    bg: "red.600",
                  }}
                >
                  SIGN IN
                </Button>
                <Button
                  rounded="full"
                  w="full"
                  color="blue.500"
                  variant="ghost"
                  as={RLink}
                  to="/signup"
                  type="button"
                  _hover={{
                    shadow: "xl",
                  }}
                >
                  Register Now
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Signin;
