import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Box,
  Text,
  Heading,
  useTheme,
  useMediaQuery,
  FormControl,
  Input,
  HStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { MdAutoGraph } from "react-icons/md";

const OurPlans = () => {
  const {
    colors: { brand },
  } = useTheme() as any;
  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Box minH="80vh" bg={brand.dark_purple} display="flex" flexDir={"column"}>
        <Navbar
          py={isMobile ? undefined : "4"}
          bg={brand.dark_purple}
          linksContainer={{
            color: "white",
          }}
          px="7"
        />

        <Container bg="white" rounded="xl" p="16" m="auto" maxW="container.sm">
          <HStack mb="7">
            <Box bg="purple.100" rounded="lg" p="2" color={"purple.600"}>
              <MdAutoGraph size={22} />
            </Box>
            <Heading size="lg">Track Your Order</Heading>
          </HStack>
          <FormControl mb={"4"}>
            <Input
              type="email"
              placeholder="Order number"
              borderColor={"gray.400"}
            />
          </FormControl>
          <Text color="gray.500" mb="5">
            Place your tracking number provided to you.
          </Text>
          <Button
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
        </Container>
      </Box>
      <Footer px="7" />
    </>
  );
};

export default OurPlans;
