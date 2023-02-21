import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { ourTenSteps } from "@/defaults";
import Footer from "@/components/footer";
import React, { FC } from "react";

const OurTenSteps: FC = () => {
  return (
    <React.Fragment>
      <Box as="main" px="7" bg="white">
        <Navbar
          toggler={{
            "aria-label": "menu toggler",
            color: "blackAlpha.700",
          }}
        />

        <Heading py="20" textAlign={"center"}>
          How It Works
        </Heading>

        {ourTenSteps.map((val, i) => {
          return (
            <VStack key={i} alignItems="start" gap={4} mb="16">
              <Heading textTransform="uppercase" size="lg">
                {++i}. {val.title}
              </Heading>
              <Text>{val.data}</Text>
            </VStack>
          );
        })}
      </Box>
      <Footer px="7" />
    </React.Fragment>
  );
};

export default OurTenSteps;
