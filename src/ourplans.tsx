import { HeroBeard } from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { FC, useState, useEffect } from "react"; 
import notfound from '../public/notfound.gif'; 
import { ConfigRequest } from "./config/ConfigRequest";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  useTheme,
  useMediaQuery,
  Link,
  transition,
  Spinner,
} from "@chakra-ui/react";
import { Plan } from "@/types/schema";

const OurPlans = () => {
  const { api } = ConfigRequest();
  const {
    colors: { brand },
  } = useTheme() as any;
  const [isMobile] = useMediaQuery("(min-width: 900px)");

  const [ourPlane, setOurPlan] = useState<Plan[]>([])
  const [isPending, setIsPending] = useState(true)
  const fetchPlan = async () => {

    await api.post('ourPlane').then((res) => {
      setOurPlan(res.data);
    }).catch((err) => {
      console.log(err);
    })
    setIsPending(false);
  }

  useEffect(() => {
    fetchPlan();
  }, [])

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
        {isPending ? (
          <Box h='full' as="main" w='full' display='flex' justifyContent='center' bg={brand.dark_blue}>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
              mx='auto'
            />
          </Box>
        ) :

          ourPlane.length > 0 ? (
            <>
              <Heading
                textAlign={"center"}
                size="2xl"
                bg={brand.dark_blue}
                color="white"
              >
                Our Plans
              </Heading>
              <Box as="main">
                {ourPlane.map((val, i) => {
                  return i % 2 ? ( 
                    <YellowCard key={i} {...val} /> 

                  ) : ( 
                    <BlueCard key={i} {...val} /> 
                  );
                })}
              </Box>
            </>
          ) : (
            <> 
                <Image src={notfound} mx={'auto'} /> 
            </>
          )
        }
      </Box>
      <Footer px="7" /> 
    </>
  );
};

export default OurPlans;

const YellowCard: FC<Plan> = ({ id, imageUrl, name, descriptions }) => {
  const [is991] = useMediaQuery("(max-width: 991px)");
  const { colors: { brand } } = useTheme() as any;

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
        <Link href={"/ourmenus/" + id}>
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
        </Link>
      </Box>
      <VStack alignItems={"start"} mt="5" order={is991 ? 2 : 1}>
        <Link href={"/ourmenus/" + id} transition={'.5s'} _hover={{ color: 'gray.500', transition: '.5s' }}>
          <Heading>{name}</Heading>
          <Text>{descriptions}</Text>
        </Link>
      </VStack>
    </Flex>

  );
};

const BlueCard: FC<Plan> = ({ id, imageUrl, name, descriptions }) => {
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
        <Link href={"/ourmenus/" + id} >
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
        </Link>
      </Box>
      <VStack alignItems={"start"} mt="5">
        <Link href={"/ourmenus/" + id} transition={'.5s'} _hover={{ color: "yellow.500", transition: '.5s' }}>
          <Heading>{name}</Heading>
          <Text>{descriptions}</Text>
        </Link>
      </VStack>
    </Flex>
  );
};
