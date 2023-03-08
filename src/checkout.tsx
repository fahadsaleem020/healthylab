import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, SimpleGrid, Stack, Table, Tbody, Td, Text, Thead, Tr, useMediaQuery, VStack } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import './styles/styles.css';
import { ConfigRequest } from "./config/ConfigRequest";
import Footer from "@/components/footer";
import { useNavigate } from 'react-router'; 

const Checkout: FC = () => {
    interface SubsInfo {
        id: string;
        title: string;
        mealsPerDay: string;
        price: string;
    }
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { api } = ConfigRequest();
    const navigate = useNavigate();
    let retrievedData: any = '',
        details:any = '',
        retrievedEmail:any = '';
    retrievedData = localStorage.getItem("details"); 
    details = JSON.parse(retrievedData);
    retrievedEmail = sessionStorage.getItem("email");


    const [subsInfo, setSubsInfo] = useState({ id: '', res: '', orderno: '', title: '', mealsPerDay: '', price: '' });
    const fetchSubscription = async () => {
        const formdata = new FormData();
        const email = window.atob(retrievedEmail);
        formdata.append('email', email);
        try {
            const response = await api.post('subsInfo', formdata);
            if (response.data.res === 'success') {
                let data = response.data;
                setSubsInfo({ ...subsInfo, ...data });
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSubscription();
    }, [])


    const [inputVal, setInputVal] = useState(
        { fullname: '', date: '', house: '', building: '', road: '', block: '', area: '', number: '' }
    );
    const HandleSubmit = async (e: any) => {
        e.preventDefault();
        alert('Waiting...')
        setIsSubmitting(true);
        setTimeout(() => {

            setIsSubmitting(false);
        }, 1000);
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
                    <form onSubmit={HandleSubmit}>
                        <Grid

                            templateColumns='repeat(12, 1fr)'
                            gap={4}
                        >

                            <GridItem colSpan={9} bg='whiteAlpha.50' >
                                <Heading as='h2' mb='5' mt={'45px'} size='md'>
                                    ACCOUNT INFORMATION
                                </Heading>
                                <Grid templateColumns='repeat(2,1fr)' gap={6}>
                                    <GridItem w='100%' >
                                        <FormControl >
                                            <FormLabel>FULL NAME</FormLabel>
                                            <Input name="fullname" placeholder='Enter Your Full Name' />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'  >
                                        <FormControl >
                                            <FormLabel>EMAIL</FormLabel>
                                            <Input name='email' color={'#000'} placeholder='First name' value={window.atob(retrievedEmail)} disabled />
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                <Heading as='h2' mb='5' mt={'45px'} size='md'>
                                    SUBSCRIPTION DETAILS
                                </Heading>
                                <Grid templateColumns='repeat(2,1fr)' gap={6}>
                                    <GridItem w='100%' >
                                        <FormControl >
                                            <FormLabel>STARTING DATE</FormLabel>
                                            <Input type='date' name="date" />
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                <Heading as='h2' mb='5' mt={'45px'} size='md'>
                                    DELIVERY INFORMATION
                                </Heading>
                                <Grid templateColumns='repeat(2,1fr)' gap={6}>
                                    <GridItem w='100%' >
                                        <FormControl >
                                            <FormLabel>HOUSE/FLAT</FormLabel>
                                            <Input placeholder='Enter House/Flat' name="house" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'  >
                                        <FormControl >
                                            <FormLabel>BUILDING</FormLabel>
                                            <Input placeholder='Enter Building' name="building" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%' >
                                        <FormControl >
                                            <FormLabel>ROAD</FormLabel>
                                            <Input placeholder='Enter Road' name="road" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'  >
                                        <FormControl >
                                            <FormLabel>BLOCK</FormLabel>
                                            <Input placeholder='Enter Block' name="block" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%' >
                                        <FormControl >
                                            <FormLabel>AREA</FormLabel>
                                            <Input placeholder='Enter Area' name="area" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'  >
                                        <FormControl >
                                            <FormLabel>MOBILE NUMBER</FormLabel>
                                            <Input type='number' placeholder='Enter Mobile Number' name="number" />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'  >
                                        <FormControl >
                                            <FormLabel>PREFFERED DELIVERY TIME</FormLabel>
                                            <Text>9AM to 8PM</Text>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                            <GridItem colSpan={3} p={"10px"} bg={'#fcfcfc'} border={'1px solid #f8f8f8'}  >
                                <Heading as='h2' mb='5' mt={'35px'} size='md'>
                                    ORDER SUMMARY
                                </Heading>
                                <FormControl >
                                    <FormLabel mb='5'>SELECTED:</FormLabel>
                                    <Text size='md' mb='5'>{subsInfo.title}</Text>
                                    <Text fontSize={'18px'} mb='5' color={'#658052'}>{subsInfo.mealsPerDay} meal a day / 5 days</Text>
                                    <Text fontSize={'18px'} mb='5'  >{subsInfo.orderno}</Text>
                                </FormControl>

                                <Text fontSize={'18px'} mb='2' mt='10' >  SUMMARY :</Text>
                                <Table p='0' border={'0'}>
                                    <Tbody>
                                        <Tr>
                                            <Td border={'0'} px='0' textAlign={"left"}>Subtotal</Td>
                                            <Td border={'0'} px='0' textAlign={"right"}>BHD {subsInfo.price} </Td>

                                        </Tr>
                                        <Tr>

                                            <Td border={'0'} px='0' textAlign={"left"}>VAT 10% <small>(inclusive) </small></Td>
                                            <Td border={'0'} px='0' textAlign={"right"}>0</Td>
                                        </Tr>
                                        <Tr>

                                            <Td border={'0'} px='0' textAlign={"left"}>Delivery</Td>
                                            <Td border={'0'} px='0' textAlign={"right"}>FREE</Td>
                                        </Tr>
                                        <Tr>

                                            <Td border={'0'} px='0' textAlign={"left"}>Total </Td>
                                            <Td border={'0'} px='0' textAlign={"right"}><strong> BHD {subsInfo.price} </strong></Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </GridItem>
                        </Grid>
                        <ButtonGroup spacing="2" width={'100%'}>
                            <Button mt="5"
                                w="100%"
                                maxW={'300px'}
                                borderRadius="10px"
                                type="submit"
                                color="white"
                                shadow="xl"
                                py="20px"
                                mx={'auto'}
                                height="30px"
                                bgGradient="linear(to-r, red.300, red.500)"
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
                    </form>




                </Box>
            </Box>
            <Footer px="7" />
        </React.Fragment >
    );


};

export default Checkout; 