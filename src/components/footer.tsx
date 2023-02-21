import {
  useTheme,
  HStack,
  Text,
  Box,
  // Link,
  Flex,
  BoxProps,
} from "@chakra-ui/react";
import { Brand } from "@/components/navbar";
import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC<BoxProps> = ({ ...props }) => {
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box as="footer" bg={brand.dark_purple} {...props}>
      <HStack
        color={"white"}
        py="20"
        flexWrap={"wrap"}
        h="24"
        justifyContent={"space-between"}
        alignItems="end"
      >
        <Link to="/termsandconditions">Term & Conditions</Link>
        <Brand
          image={{
            mt: "-7",
          }}
        />
        <HStack>
          <Text>Join Us </Text>
        </HStack>
      </HStack>
      <Flex justifyContent="center">
        <HStack
          color={"white"}
          gap={5}
          textTransform="capitalize"
          flexWrap={"wrap"}
        >
          <Link to="/signup">Subscribe</Link>
          <Link to="/ourplans">Our Plans</Link>
          <Link to="/ourtensteps">Our Ten Steps</Link>
          <Link to="/aboutus">about us</Link>
        </HStack>
      </Flex>
      <Flex justifyContent="center" color={"white"} py="20">
        <Text>&copy; Copyrights 2023 Healthylab. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
