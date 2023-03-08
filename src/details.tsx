
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, useMediaQuery, useToast, VStack } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import './styles/styles.css';
import { ConfigRequest } from "./config/ConfigRequest";
import { useNavigate } from "react-router";

interface InputValues {
    goal: string;
    height: string;
    weight: string;
    birthday: string;
    physical: string;
    gender: string;
}

const Details: FC = () => {

    const { api } = ConfigRequest();
    const Goals = [
        { id: 'goalId:1', Label: 'Lose', value: '1' },
        { id: 'goalId:2', Label: 'Maintain', value: '2' },
        { id: 'goalId:3', Label: 'Gain', value: '3' },
    ];

    const LPA = [
        { id: 'lpaId:1', Label: '1', value: '1' },
        { id: 'lpaId:2', Label: '2', value: '2' },
        { id: 'lpaId:3', Label: '3', value: '3' },
        { id: 'lpaId:4', Label: '4', value: '4' },
        { id: 'lpaId:5', Label: '5', value: '5' },
    ];

    const Gender = [
        { id: 'genderId:1', Label: 'Male', value: 'Male' },
        { id: 'genderId:2', Label: 'Female', value: 'Female' },
    ];

    const [inputVal, setInputVal] = useState<InputValues>({
        goal: '',
        height: '',
        weight: '',
        birthday: '',
        physical: '',
        gender: '',
    });

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputVal({ ...inputVal, [name]: value });
    };
 

    const toast = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let retrievedData: any = '';
        retrievedData = sessionStorage.getItem("email");


        localStorage.setItem('details', JSON.stringify(inputVal));
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('email', window.atob(retrievedData));
        formData.append('data', JSON.stringify(inputVal));
        await api
            .post('getStartDetails', formData)
            .then((res) => {
                if (res.data.status === 'success') {
                    setTimeout(() => {

                        navigate('/selection');
                    }, 1000);
                }
                toast({
                    title: res.data.msg,
                    status: res.data.status,
                    duration: 2000,
                    isClosable: true,
                    position: 'bottom',
                })
            })
            .catch((err) => {
                console.log(err);
            });
        setIsSubmitting(false);
    };



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
                        DETAILS
                    </Heading>

                    <form onSubmit={formSubmit} className="detailsForm">
                        <div className="row">
                            <div className="inputgroup col-12">
                                <FormLabel>GOAL*</FormLabel>
                                <div className="radiogroup">
                                    {Goals.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="goal" required type="radio" value={val.value} onChange={handleValue} className="d-none" />
                                                <label htmlFor={val.id} className="radioLabel">
                                                    {val.Label}
                                                </label>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="inputgroup col-md-6">
                                <FormLabel>HEIGHT*</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="number"
                                        placeholder="/cm"
                                        variant={"filled"}
                                        name='height'
                                        onChange={handleValue}
                                    />
                                </FormControl>
                            </div>
                            <div className="inputgroup col-md-6" >
                                <FormLabel>WEIGHT*</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="number"
                                        placeholder="/cm"
                                        variant={"filled"}
                                        name='weight'
                                        onChange={handleValue}
                                    />
                                </FormControl>
                            </div>
                            <div className="inputgroup col-md-6" >
                                <FormLabel>BIRTHDAY*</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="date"
                                        variant={"filled"}
                                        name='birthday'
                                        onChange={handleValue}
                                    />
                                </FormControl>
                            </div>
                            <div className="inputgroup col-md-6">
                                <FormLabel>LEVEL OF PHYSICAL ACTIVITY LPA*</FormLabel>
                                <div className="radiogroup">
                                    {LPA.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="physical" type="radio" value={val.value} required className="d-none" onChange={handleValue} />
                                                <label htmlFor={val.id} className="radioLabel rounded-full border-theme">
                                                    {val.Label}
                                                </label>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="inputgroup col-12">
                                <FormLabel>GENDER*</FormLabel>
                                <div className="radiogroup">
                                    {Gender.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="gender" type="radio" value={val.value} required className="d-none" onChange={handleValue} />
                                                <label htmlFor={val.id} className="radioLabel">
                                                    {val.Label}
                                                </label>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <Button
                                mt="5"
                                w="full"
                                borderRadius={'10px'}
                                type="submit"
                                color="white"
                                shadow="xl"
                                py={'20px'}
                                height={'30px'}
                                bgGradient="linear(to-r, red.300, red.500)"
                                _hover={{
                                    bgGradient: "linear(to-r, red.500, red.300)",
                                }}
                                _active={{
                                    bg: "red.600",
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Proceeding...' : 'Proceed'}
                            </Button>
                        </div>
                    </form>


                </Box>
            </Box>
            <Footer px="7" />

        </React.Fragment>
    )
}


export default Details;