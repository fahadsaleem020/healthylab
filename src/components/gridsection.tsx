import {
  useMediaQuery,
  useTheme,
  Box,
  HStack,
  Grid,
  GridItem,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Show,
  Flex,
} from "@chakra-ui/react";
import { HeroBeard } from "@/components/header";
import { Link as RLink } from "react-router-dom";

const GridSections = () => {
  const [is990] = useMediaQuery("(min-width: 995px)");
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box position="relative">
      <HeroBeard
        container={{
          position: "absolute",
          top: "0",
          w: "full",
        }}
      />
      <Grid
        templateRows={is990 ? "repeat(10, 10rem)" : "repeat(15, 10rem)"}
        templateColumns={is990 ? "repeat(2, 1fr)" : "1fr"}
        gap={0}
      >
        <GridItem
          order={1}
          colSpan={1}
          rowSpan={!is990 ? 4 : 5}
          bgColor={brand.pink_light}
        >
          <VStack
            color="black"
            alignItems="start"
            gap={7}
            mt={!is990 ? "36" : "72"}
          >
            <Heading textTransform={"capitalize"} px="7">
              Healthy Eating, Delivered Right to Your Door
            </Heading>
            <Text px="7">
              Eating healthy has never been easier. Choose your subscription
              plan, select your meals, and we'll take care of the rest. Our
              chefs will use only the freshest ingredients to create delicious,
              nutritious meals tailored to your needs. With our meal management
              system, you can sit back and enjoy your meals, knowing that you're
              getting everything you need to reach your health and wellness
              goals.
            </Text>
            <Flex px="7" flexDir={["row", "row", "row"]} gap={2}>
              <Button
                colorScheme={"red"}
                rounded="full"
                px="10"
                _hover={{
                  bg: "transparent",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                <RLink to="/ourplans">Our Plans</RLink>
              </Button>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem
          order={2}
          colSpan={1}
          rowSpan={!is990 ? 4 : 6}
          bgColor={brand.light_green}
          bgImage="/second_dish.svg"
          bgRepeat="no-repeat"
          bgPosition={"center"}
          position="relative"
          zIndex={-1}
        >
          <Image
            src="/secondary_blob.svg"
            alt="blob"
            position="absolute"
            top={0}
            zIndex={"1"}
          />
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={!is990 ? 4 : 6}
          bgColor={brand.dark_green}
          position="relative"
          bgImage="/third_dish.svg"
          bgRepeat="no-repeat"
          bgPosition="center 150%"
          order={!is990 ? 4 : 3}
        >
          <Show breakpoint="(min-width: 995px)">
            <Image
              src="/secondary_blob.svg"
              alt="blob"
              position="absolute"
              top={0}
              zIndex={"1"}
            />
          </Show>
        </GridItem>
        <GridItem
          order={!is990 ? 3 : 4}
          colSpan={1}
          rowSpan={!is990 ? 4 : 5}
          bgColor={brand.pink_light}
        >
          <Center h="full">
            <VStack color="black" p="7" alignItems="start" gap={7}>
              <Heading textTransform={"capitalize"}>
                Stay on Track, No Matter What Life Throws Your Way
              </Heading>
              <Text>
                We get it: life can be unpredictable. That's why our pause
                feature lets you take a break from your subscription for up to a
                week, with real-time updates and notifications. Plus, you can
                share your feedback on our meals, and we'll use it to make
                improvements. With our website optimized for fast performance
                and quick response times, you'll have more time to enjoy the
                important things in life.
              </Text>
              <HStack>
                <Button
                  colorScheme={"red"}
                  rounded="full"
                  px="10"
                  _hover={{
                    bg: "transparent",
                    border: "1px solid black",
                    color: "black",
                  }}
                >
                  <RLink to="/ourtensteps">Learn Our Ten Steps</RLink>
                </Button>
              </HStack>
            </VStack>
          </Center>
        </GridItem>
      </Grid>
      <Flex flexDir={!is990 ? "column" : "row"} bg={brand.light_green}>
        <Box flex={1} m="auto">
          <VStack color="white" p="9" alignItems="start" gap={7}>
            <Heading textTransform={"capitalize"}>
              Join the Movement to Live Healthier, Happier, and Tastier
            </Heading>
            <Text>
              Healthy living isn't a chore; it's a lifestyle. When you subscribe
              to our meal service, you'll join a community of like-minded
              individuals who share your commitment to health and wellness. With
              a variety of meal plans to suit your. lifestyle and dietary needs,
              we're here to support you every step of the way. Let's make
              healthy eating the best part of your day.
            </Text>
            <HStack>
              <Button
                bg={brand.dark_green}
                _hover={{
                  bg: brand.light_green,
                  border: "1px solid",
                }}
                rounded="full"
                px="10"
              >
                <RLink to="/ourmenus">Explore Menus</RLink>
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box
          flex={1}
          bg={brand.dark_green}
          bgImage="/second_dish.svg"
          bgPosition={"center"}
          bgRepeat="no-repeat"
          bgSize="70%"
          minH="lg"
        ></Box>
      </Flex>
    </Box>
  );
};

export default GridSections;
