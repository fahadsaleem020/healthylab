import { FC } from "react";
import {
  useMediaQuery,
  useTheme,
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
  Link,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { Link as RLink } from "react-router-dom";

const Signup: FC = () => {
  const [isMobile] = useMediaQuery("(min-width: 900px)");
  const [is700] = useMediaQuery("(max-width: 700px)");

  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box as="main" minH="100vh" px="7" bg={brand.dark_purple}>
      <Navbar color="white" py={isMobile ? undefined : "4"} mb="10" />
      <Box
        bg="white"
        rounded="2xl"
        maxW={"60rem"}
        m="auto"
        px="5"
        py="10"
        textAlign={"center"}
      >
        <Heading>GET STARTED</Heading>
        <Text mb="16">A diet that tastes better than you cheat days!</Text>
        <Flex flexDir={is700 ? "column" : undefined}>
          <Box flex={1} display={is700 ? "none" : "block"} />
          <VStack flex={1} alignItems="start" justifyContent={"center"}>
            <VStack gap={4} w="full" alignItems="start">
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
                  placeholder="Enter password"
                  variant={"filled"}
                  rounded="full"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter password again"
                  variant={"filled"}
                  rounded="full"
                />
              </FormControl>

              <Box w="full">
                <Button
                  mt="5"
                  w="full"
                  rounded="full"
                  type="submit"
                  color="white"
                  shadow="xl"
                  bgGradient="linear(to-r, red.300, red.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, red.300)",
                  }}
                  _active={{
                    bg: "red.600",
                  }}
                >
                  Proceed
                </Button>
                <Text pt="12">
                  By clicking above, you agree to our <Link>Terms of use</Link>
                  <br />
                  and consent to our privacy policy
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Signup;
