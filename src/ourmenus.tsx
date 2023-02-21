import {
  Box,
  Flex,
  Grid,
  useTheme,
  GridItem,
  useMediaQuery,
  Image,
  Heading,
  Text,
  HStack,
  GridProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  VStack,
  ModalFooter,
} from "@chakra-ui/react";
import { TbPizza, TbMeat } from "react-icons/tb";
import { GiFat, GiWheat } from "react-icons/gi";
import Navbar from "@/components/navbar";
import Footer from "./components/footer";
import { Dish } from "@/types/schema";
import { dishes } from "@/defaults";
import { FC, useState } from "react";

const Menus: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalData, setModalData] = useState<Omit<Dish, "modes" | "id">>();

  const [isMobile] = useMediaQuery("(min-width: 900px)");
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <Box as="main" bg={brand.dark_purple} px="7">
      <Navbar color="white" py={isMobile ? undefined : "4"} mb="20" />
      <Heading color="white" py="5" textAlign={"center"} size="2xl">
        Our Menus
      </Heading>
      <Box py="10">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            // "repeat(4, 1fr)",
          ]}
          gap={"12"}
        >
          {dishes.map((val, i) => {
            return (
              <GridItem
                key={i}
                bg="white"
                rounded="2xl"
                cursor="pointer"
                transition={"all 300ms cubic-bezier(0.77, 0, 0.175, 1)"}
                title="click to view more details"
                onClick={() => {
                  onOpen();
                  setModalData(val);
                }}
                _hover={{
                  shadow: "dark-lg",
                  transform: "scale(1.1)",
                }}
              >
                <Card dishDetails={val} />
              </GridItem>
            );
          })}
        </Grid>
        <DetailsModal isOpen={isOpen} onClose={onClose} modalData={modalData} />
      </Box>
      <Footer px="7" left={0} right={0} bottom={0} />
    </Box>
  );
};

const Card: FC<{ dishDetails: Omit<Dish, "modes" | "id"> }> = ({
  dishDetails,
}) => {
  const {
    briefDescription,
    calories,
    carbohydrates,
    detailedDescription,
    fat,
    imageUrl,
    name,
    protein,
  } = dishDetails;
  return (
    <Flex flexDir={"column"}>
      <Box w="full" minH="13rem" position="relative">
        <Image
          position="absolute"
          alt="dish name"
          src={imageUrl}
          maxW={"15rem"}
          left="50%"
          top="-20%"
          transform="translateX(-50%)"
        />
      </Box>
      <Box w="full" p="5">
        <Heading as="h1" size="lg" py="5" textAlign={"center"}>
          {name}
        </Heading>

        <Text textAlign={"center"}>{briefDescription}</Text>
        <Box py="4">
          <HStack>
            <Chip
              icon={<TbPizza size={35} style={{ margin: "auto" }} />}
              title={"Calories"}
              data={calories}
              chipStyles={{
                bg: "red.100",
              }}
            />
            <Chip
              icon={<TbMeat size={35} style={{ margin: "auto" }} />}
              title={"Protein"}
              data={protein}
              chipStyles={{
                bg: "yellow.100",
              }}
            />
          </HStack>
          <HStack mt="2">
            <Chip
              icon={<GiFat size={35} style={{ margin: "auto" }} />}
              title={"Fat"}
              data={fat}
              chipStyles={{
                bg: "green.100",
              }}
            />
            <Chip
              icon={<GiWheat size={35} style={{ margin: "auto" }} />}
              title={"Carbohydrates"}
              data={carbohydrates}
              chipStyles={{
                bg: "purple.100",
              }}
            />
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};

const DetailsModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  modalData: Omit<Dish, "modes" | "id"> | undefined;
}> = ({ isOpen, onClose, modalData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["full", "full", "full", "4xl"]}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <ModalBody p="5">
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gridTemplateRows={"repeate(2, 1fr)"}
          >
            <GridItem
              rowSpan={2}
              h={["20rem", "20rem", "20rem", "initial"]}
              position="relative"
            >
              <Image
                position="absolute"
                alt="dish name"
                src={modalData?.imageUrl}
                maxW={["70%", "45%", "30%", "90%"]}
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
              />
            </GridItem>
            <GridItem bg="gray.50" p="10" rounded="xl">
              <VStack alignItems={"start"} gap={3}>
                <Heading as="h1" size="lg">
                  {modalData?.name}
                </Heading>

                <Text maxH={"15rem"} overflowY="auto">
                  {modalData?.detailedDescription}
                </Text>
                <Box>
                  <HStack>
                    <Chip
                      icon={<TbPizza size={35} style={{ margin: "auto" }} />}
                      title={"Calories"}
                      data={modalData?.calories!}
                      chipStyles={{
                        bg: "red.100",
                      }}
                    />
                    <Chip
                      icon={<TbMeat size={35} style={{ margin: "auto" }} />}
                      title={"Protein"}
                      data={modalData?.protein!}
                      chipStyles={{
                        bg: "yellow.100",
                      }}
                    />
                  </HStack>
                  <HStack mt="2">
                    <Chip
                      icon={<GiFat size={35} style={{ margin: "auto" }} />}
                      title={"Fat"}
                      data={modalData?.fat!}
                      chipStyles={{
                        bg: "green.100",
                      }}
                    />
                    <Chip
                      icon={<GiWheat size={35} style={{ margin: "auto" }} />}
                      title={"Carbohydrates"}
                      data={modalData?.carbohydrates!}
                      chipStyles={{
                        bg: "purple.100",
                      }}
                    />
                  </HStack>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            rounded="full"
            bg="transparent"
            color="red.400"
            border="1px"
            borderColor="red.400"
            _hover={{
              bg: "transparent",
              color: "red.400",
              border: "1px",
              borderColor: "red.400",
              shadow: "xl",
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Chip: FC<{
  icon: React.ReactElement;
  title: string;
  data: number;
  chipStyles?: GridProps;
}> = ({ icon, title, data, chipStyles: styles }) => {
  return (
    <Grid
      flex={1}
      gridTemplateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      rounded={"md"}
      {...styles}
    >
      <GridItem colSpan={1} rowSpan={2}>
        <Flex h="full" pl="3">
          <Box m="auto">{icon}</Box>
        </Flex>
      </GridItem>
      <GridItem colSpan={3} pl="3">
        <Text>{title}</Text>
      </GridItem>
      <GridItem colSpan={3} pl="3">
        <Text fontSize={"xl"}>{data}</Text>
      </GridItem>
    </Grid>
  );
};

export default Menus;
