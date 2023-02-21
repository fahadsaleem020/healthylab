import {
  useMediaQuery,
  useTheme,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { CallToAction } from "@/components/navbar";
import { Link as RLink } from "react-router-dom";

const CelebrateSeciton = () => {
  const [is990] = useMediaQuery("(min-width: 995px)");
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Flex bg="yellow.500" minH="lg" flexDir={!is990 ? "column" : "row"}>
      <Box
        flex={!is990 ? undefined : 1}
        bgImage="/celebrate.svg"
        bgRepeat="no-repeat"
        bgPosition={"center"}
        bgSize={!is990 ? "90%" : "60%"}
        h="lg"
      />
      <VStack
        color={brand.dark_green}
        m="auto"
        px={!is990 ? "3" : undefined}
        py={!is990 ? "20" : undefined}
        p="7"
        flex={!is990 ? undefined : 1}
        alignItems="start"
        gap={7}
      >
        <Heading textTransform={"uppercase"} textAlign="left">
          eat healthy <br />
          homemade goodness , <br />
          even when you don't <br />
          have time!
        </Heading>
        <Text>
          Looking to eat healthier but short on time? Our website can help! Our
          meal plans are designed to be delicious, satisfying, and easy to
          prepare. With our expert guidance and tailored plans, you can achieve
          your health goals without sacrificing your busy schedule. Sign up now
          and start enjoying homemade goodness in no time!
        </Text>
        <HStack>
          <CallToAction
            px="10"
            colorScheme={"red"}
            _hover={{
              bg: "transparent",
              border: "1px",
              borderColor: "black",
              // color: "black",
            }}
          >
            <RLink to="/signup">Get Started</RLink>
          </CallToAction>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CelebrateSeciton;
