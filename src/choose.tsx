import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, FormControl, FormLabel, Heading, Image, Input, SimpleGrid, Stack, Text, useMediaQuery, useToast, VStack } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import './styles/styles.css';
import { ConfigRequest } from "./config/ConfigRequest";
import { Package } from '@/types/schema';
import Footer from "@/components/footer";
import { useNavigate } from "react-router-dom";

const Choose: FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { api } = ConfigRequest();
    const navigate = useNavigate();
    const [Package, setPkg] = useState<Package[]>([]);

    const toast = useToast()
    let retrievedEmail: any = '',
        retrievedData: any = '',
        details: any = '',
        dietary_plan: any = '';
    retrievedEmail = sessionStorage.getItem("email");
    retrievedData = localStorage.getItem("details");
    details = JSON.parse(retrievedData);
    const fetchPkg = async () => {
        const formdata = new FormData();
        dietary_plan = sessionStorage.getItem("dietary_plan");
        formdata.append('goal', details.goal)
        formdata.append('dietary_plan_id', window.atob(dietary_plan))
        await api.post('getPkg', formdata).then((res) => {
            setPkg(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        fetchPkg();
    }, [])

    const handlePrices = (price: string, index: number, perDaymMeal: string) => {
        const packasge = [...Package];
        packasge[index].selected = price;
        packasge[index].perDaymMeal = perDaymMeal;
        setPkg(packasge)
    };

    const submitPackage = async (id: string, index: number) => {
        setIsSubmitting(true);
        const formdata = new FormData();

        formdata.append('email', window.atob(retrievedEmail));
        formdata.append('planeAmount', Package[index].selected)
        formdata.append('perDayMeal', Package[index].perDaymMeal)
        formdata.append('pkg_id', id);

        await api.post('updateGetPackage', formdata).then((res) => {
            if (res.data.status == 'success') {

                sessionStorage.setItem('pkg', btoa(id))
                setTimeout(() => {
                    navigate('/results');

                }, 1000);
            }
            toast({
                title: res.data.msg,
                status: res.data.status,
                duration: 2000,
                isClosable: true,
                position: 'bottom',
            })
        }).catch((err) => {
            console.log(err)
        })


        setIsSubmitting(false);
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
                <Box p={'20px'} maxW={'1000px'} width={'100%'} margin={'20px auto'}>
                    <Heading as="h1" size="lg" py="5" textAlign={"center"}>
                        SELECTION
                    </Heading>
                    <SimpleGrid columns={2} spacingX='20px' spacingY='20px' display='flex' justifyContent='center'>

                        {Package.map((val: Package, i: number) => {
                            return (
                                <Card maxW="sm" key={val.id}>
                                    <CardBody>
                                        <Image src={val.icon} alt={val.title} borderRadius="lg" mx="0" width={'100%'} />
                                        <Stack mt="6" spacing="3">
                                            <Heading size="md">{val.title}</Heading>
                                            <Text>{val.description}</Text>
                                            <SimpleGrid columns={2} spacingX="10px" spacingY="10px">
                                                <div className="radiogroup ">
                                                    <input id={val.price + "one" + val.id} name={val.price + "item" + val.id} type="radio" value={val.price} className="d-none" onChange={(e) => handlePrices(val.price, i, '1')} />
                                                    <label htmlFor={val.price + "one" + val.id} className="radioLabel rounded-full border-theme w-120px" >
                                                        1
                                                    </label>
                                                    <input id={val.price_two + "two" + val.id} name={val.price + "item" + val.id} type="radio" value={val.price_two} className="d-none" onChange={(e) => handlePrices(val.price_two, i, '2')} />
                                                    <label htmlFor={val.price_two + "two" + val.id} className="radioLabel rounded-full border-theme w-120px" >
                                                        2
                                                    </label>
                                                    <input id={val.price_three + "three" + val.id} name={val.price + "item" + val.id} type="radio" value={val.price_three} className="d-none" onChange={(e) => handlePrices(val.price_three, i, '3')} />
                                                    <label htmlFor={val.price_three + "three" + val.id} className="radioLabel rounded-full border-theme w-120px" >
                                                        3
                                                    </label>
                                                </div>
                                                <Text textAlign="right">Meals a day</Text>
                                            </SimpleGrid>
                                        </Stack>
                                        <SimpleGrid columns={2} spacingX="10px" spacingY="10px">
                                            <Heading size="md" textAlign={'left'}> FREE DELIVERY</Heading>
                                            <Box display={'flex'} justifyContent='end' gap={'10px'} alignItems='center'>
                                                <Text fontSize={"12px"} textAlign={'right'}>Incl. VAT</Text>
                                                <Heading size="md" textAlign={'right'}>BD {Package[i].selected != null ? Package[i].selected : val.price} </Heading>
                                            </Box>
                                        </SimpleGrid>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <ButtonGroup spacing="2">
                                            <Button mt="5"
                                                w="full"
                                                borderRadius="10px"
                                                type="button"
                                                color="white"
                                                shadow="xl"
                                                py="20px"
                                                height="30px"
                                                bgGradient="linear(to-r, red.300, red.500)"
                                                onClick={(e) => submitPackage(val.id, i)}
                                                _hover={{
                                                    bgGradient: "linear(to-r, red.500, red.300)",
                                                }}
                                                _active={{
                                                    bg: "red.600",
                                                }}
                                                disabled={isSubmitting}
                                            >
                                                Proceed
                                            </Button>
                                        </ButtonGroup>

                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            </Box>
            <Footer px="7" />

        </React.Fragment>
    );


};

export default Choose;