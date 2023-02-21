import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
  BoxProps,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { CallToAction } from "@/components/navbar";
import { FC } from "react";
import { Link as RLink } from "react-router-dom";

const Hero: FC<BoxProps> = ({ ...props }) => {
  const {
    colors: { brand },
  } = useTheme() as any;
  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return (
    <HStack
      mt={isMobile ? "20" : undefined}
      flexDir={isMobile ? "row" : "column"}
      {...props}
    >
      <LeftSection py={isMobile ? undefined : "12"} pl="3" />
      <RightSection
        alignSelf={["self-end"]}
        bg={brand.light_green}
        position="relative"
        roundedLeft="50"
        h={["sm", "sm", "sm", "lg"]}
        minW={["52", "80", "80", "md"]}
      />
      <Box
        bg={brand.light_green}
        position="absolute"
        right={0}
        bottom={0}
        left="70%"
        h={["sm", "sm", "sm", "lg"]}
      />
    </HStack>
  );
};

export const LeftSection: FC<BoxProps> = ({ ...props }) => {
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box {...props}>
      <VStack alignItems={"start"} color={"white"} gap={7}>
        <Heading
          size={["3xl", "3xl", "2xl", "xl", "2xl"]}
          pr={["0", "0", "28", "40"]}
        >
          Create Your Perfect Meal Plan, with Zero Effort
        </Heading>
        <Text
          pr={["none", "none", "40", "40"]}
          fontSize={["sm", "sm", "sm", "md"]}
        >
          Eating healthy has never been easier. Choose your subscription plan,
          select your meals, and we'll take care of the rest. Our chefs will use
          only the freshest ingredients to create delicious, nutritious meals
          tailored to your needs. With our meal management system, you can sit
          back and enjoy your meals, knowing that you're getting everything you
          need to reach your health and wellness goals.
        </Text>
        <HStack color="white">
          <CallToAction
            bg={brand.light_green}
            _hover={{
              border: "1px",
              bg: "transparent",
            }}
          >
            <RLink to="/signup">Begin the journey</RLink>
          </CallToAction>
          <CallToAction
            borderColor={brand.light_purple}
            color={"white"}
            variant="outline"
            bg={"transparent"}
            _hover={{
              bg: brand.light_purple,
              border: "1px",
            }}
          >
            <RLink to="/ourtensteps">Learn More</RLink>
          </CallToAction>
        </HStack>
      </VStack>
    </Box>
  );
};

export const RightSection: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Image
        src={"/first_dish.svg"}
        position="absolute"
        zIndex={1}
        top={"50%"}
        left={["-70%", "-50%"]}
        transform="translateY(-50%)"
        maxW={["200%", "120%", "120%", "125%"]}
        alt="main dish"
      />
    </Box>
  );
};

export default Hero;
