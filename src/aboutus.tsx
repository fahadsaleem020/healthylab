import Navbar from "@/components/navbar";
import {
  Box,
  useMediaQuery,
  Flex,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { aboutUs } from "@/defaults";
import Footer from "@/components/footer"; 

const AboutUs = () => {
  const [isMobile] = useMediaQuery("(min-width: 900px)");

  return ( 
    <Box as="main" bg="white">
      <Navbar
        py={isMobile ? undefined : "4"}
        mb="20"
        px="7"
        toggler={{
          "aria-label": "menu toggler",
          color: "blackAlpha.700",
        }}
      />

      <Heading py="5" textAlign={"center"} size="2xl">
        About Us
      </Heading>

      {aboutUs.map((val, i) => {
        return i % 2 ? (
          <LeftCard
            key={i}
            data={val.data}
            title={val.title}
            imageUrl={val.imageUrl}
          />
        ) : (
          <RightCard
            key={i}
            data={val.data}
            title={val.title}
            imageUrl={val.imageUrl}
          />
        );
      })}
      <Footer px="7" />
    </Box> 
  );
};

const LeftCard: FC<{ title: string; imageUrl: string; data: string }> = ({
  title,
  imageUrl,
  data,
}) => {
  const [is991] = useMediaQuery("(max-width: 991px)");

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      gap={5}
      px="7"
      pt="20"
      pb="15"
    >
      <Box
        w="full"
        minH={"25rem"}
        minW={["full", "20rem", "30rem"]}
        position="relative"
        order={is991 ? 1 : 2}
      >
        <Image
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
        <Heading>{title}</Heading>
        <Text>{data}</Text>
      </VStack>
    </Flex>
  );
};

const RightCard: FC<{
  title: string;
  imageUrl: string;
  data: string;
}> = ({ title, imageUrl, data }) => {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      gap={5}
      px="7"
      pt="20"
      pb="15"
    >
      <Box
        w="full"
        minH={"25rem"}
        minW={["full", "20rem", "30rem"]}
        position="relative"
      >
        <Image
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
        <Heading>{title}</Heading>
        <Text>{data}</Text>
      </VStack>
    </Flex>
  );
};

export default AboutUs;
