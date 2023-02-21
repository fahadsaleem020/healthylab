import { HeroBeard } from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { plans } from "@/defaults";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  useTheme,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import { Plan } from "@/types/schema";

const OurPlans = () => {
  const {
    colors: { brand },
  } = useTheme() as any;
  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Box as="main">
        <Navbar
          py={isMobile ? undefined : "4"}
          bg={brand.dark_purple}
          linksContainer={{
            color: "white",
          }}
          px="7"
        />
        <Box h="15rem" bg={brand.dark_blue}>
          <HeroBeard />
        </Box>
        <Heading
          textAlign={"center"}
          size="2xl"
          bg={brand.dark_blue}
          color="white"
        >
          Our Plans
        </Heading>
        <Box as="main">
          {plans.map((val, i) => {
            return i % 2 ? (
              <YellowCard key={i} {...val} />
            ) : (
              <BlueCard key={i} {...val} />
            );
          })}
        </Box>
      </Box>
      <Footer px="7" />
    </>
  );
};

export default OurPlans;

const YellowCard: FC<Plan> = ({ imageUrl, name, descriptions }) => {
  const [is991] = useMediaQuery("(max-width: 991px)");

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      gap={5}
      px="7"
      py="20"
      bg={"yellow.500"}
      className="item"
    >
      <Box
        w="full"
        minH={"25rem"}
        minW={["full", "20rem", "30rem"]}
        position="relative"
        order={is991 ? 1 : 2}
        transition="all 300ms ease"
      >
        <Image
          rounded="2xl"
          position="absolute"
          alt="dish name"
          src={imageUrl}
          maxW={["100%", "80%", "50%", "100%"]}
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <VStack alignItems={"start"} mt="5" order={is991 ? 2 : 1}>
        <Heading>{name}</Heading>
        <Text>{descriptions}</Text>
      </VStack>
    </Flex>
  );
};

const BlueCard: FC<Plan> = ({ imageUrl, name, descriptions }) => {
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      gap={5}
      px="7"
      py="20"
      bg={brand.dark_blue}
      color={"white"}
      className="item"
    >
      <Box
        w="full"
        minH={"25rem"}
        minW={["full", "20rem", "30rem"]}
        position="relative"
        transition="all 300ms ease"
      >
        <Image
          rounded="2xl"
          position="absolute"
          alt="dish name"
          src={imageUrl}
          maxW={["100%", "80%", "50%", "100%"]}
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <VStack alignItems={"start"} mt="5">
        <Heading>{name}</Heading>
        <Text>{descriptions}</Text>
      </VStack>
    </Flex>
  );
};
