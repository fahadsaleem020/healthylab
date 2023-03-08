import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, FormControl, FormLabel, Heading, Image, Input, SimpleGrid, Stack, Table, Tbody, Td, Text, Tr, useMediaQuery, VStack } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import './styles/styles.css';
import { ConfigRequest } from "./config/ConfigRequest";
import Footer from "@/components/footer";
import { useNavigate } from 'react-router';
import { differenceInYears } from 'date-fns';
import { Link } from "@chakra-ui/react";
const Results: FC = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { api } = ConfigRequest();
    const navigate = useNavigate();
    let details: any = '', retrievedData: any = '';
    retrievedData = localStorage.getItem("details");
    details = JSON.parse(retrievedData);
    const birthdayDate = new Date(details.birthday);

    // Calculate age based on current date
    const age = differenceInYears(new Date(), birthdayDate);
    const weightInKg = parseFloat(details.weight) * 0.45359237;
    const heightInCm = parseFloat(details.height);
    const baseMetabolicRate = details.gender === 'Male'
        ? 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
        : 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;



    const handleResult = () => {
        navigate('/checkout')
    }
    return (
        <React.Fragment>

            <Box as="main" px="7" bg="white">
                <Navbar
                    toggler={{
                        "aria-label": "menu toggler",
                        color: "blackAlpha.700",
                    }}
                />
            </Box>
            <Box bg={"gray.100"} minHeight={'400px'} py={'20px'}>
                <Box bg={'white'} p={'20px'} maxW={'1000px'} width={'100%'} margin={'20px auto'}>
                    <Heading as="h1" size="lg" py="5" textAlign={"center"}>
                        ESTIMATED DAILY CALORIES
                    </Heading>
                    <Text size="lg" textAlign={"center"}>To maintain your current weight you'll need {Math.round(baseMetabolicRate)} calories per day</Text>

                    <Table size='lg' border={1} borderColor={'gray.300'} cellSpacing={'1px'}>
                        <Tbody>
                            <Tr >
                                <Td>Age</Td>
                                <Td> {age}</Td>
                            </Tr>

                            <Tr>
                                <Td>Height</Td>
                                <Td>{details.height} Cm</Td>
                            </Tr>

                            <Tr>
                                <Td>Weight</Td>
                                <Td>{details.weight} Kg</Td>
                            </Tr>

                            <Tr>
                                <Td>Gender</Td>
                                <Td>{details.gender} </Td>
                            </Tr>
                            <Tr>
                                <Td>Activity Level</Td>
                                <Td>Intensity {details.physical}</Td>
                            </Tr>

                        </Tbody>
                    </Table>
                    <Box maxWidth={'750px'} mt={'20px'} mx={'auto'} display={"flex"} borderRadius={'5px'} border={'3px solid #658052'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Heading as="h1" size="lg" py="2" textAlign={"center"}>
                            {Math.round(baseMetabolicRate)}
                        </Heading>
                        <Text fontSize="20px" py="2" textAlign={"center"}>
                            CALORIES/DAY
                        </Text>
                        <Text size="lg" py="2" textAlign={"center"}>
                            To Maintain
                        </Text>
                    </Box>

                    <ButtonGroup spacing="2" width={'100%'}>
                        <Button mt="5"
                            w="fit-content"
                            borderRadius="10px"
                            type="button"
                            color="white"
                            shadow="xl"
                            py="20px"
                            mx={'auto'}
                            height="30px"
                            bgGradient="linear(to-r, red.300, red.500)"
                            onClick={handleResult}
                            _hover={{
                                bgGradient: "linear(to-r, red.500, red.300)",
                            }}
                            _active={{
                                bg: "red.600",
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Proceeding..." : "Proceed"}
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
            <Footer px="7" />

        </React.Fragment>
    );


};

export default Results; 