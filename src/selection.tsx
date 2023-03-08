import { Box, Button, FormControl, FormLabel, Heading, Input, Text, useMediaQuery, useToast, VStack } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import './styles/styles.css';
import { ConfigRequest } from "./config/ConfigRequest";
import { useNavigate } from "react-router-dom";
import { Alergies } from '@/types/schema';
const Selection: FC = () => {

    const { api } = ConfigRequest();
    const navigate = useNavigate();

    const DietPlan = [
        { id: 'DietPlanId:1', Label: 'Balanced', value: '1', },
        { id: 'DietPlanId:2', Label: 'Vegetarian', value: '2' },
    ]
    const Days = [
        { id: 'DaysId:1', Label: '5 Days (Sat - Wed)', value: '1', },
        { id: 'DaysId:2', Label: '5 days (Sun - Thu)', value: '2' },
        { id: 'DaysId:3', Label: '6 days (Sat - Thu)', value: '3' },
    ]

    const [Alergies, setAlergies] = useState<Alergies[]>([]);
    const fetchAlergies = async () => {
        await api.post('getAlergies').then((res) => {
            setAlergies(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    const [inputVal, setInputVal] = useState(
        { dietary_plan: '', num_of_days: '' }
    );


    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputVal({ ...inputVal, [name]: value });
    }
    const [checkedValues, setCheckedValues] = useState<string[]>([])

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            setCheckedValues(checkedValues.filter((value) => value !== value));
        }
    }
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toast = useToast()
    const formSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        let retrievedData: any = '';
        retrievedData = sessionStorage.getItem("email");
        const checkedValuesString = checkedValues.join(",");
        const formData = new FormData();
        formData.append('email', window.atob(retrievedData));
        formData.append('allergies', JSON.stringify(checkedValuesString));
        formData.append('data', JSON.stringify(inputVal));
        await api.post('getStartSelection', formData).then((res) => {
            if (res.data.status === 'success') {
                sessionStorage.setItem('dietary_plan', window.btoa(inputVal.dietary_plan));
                setTimeout(() => {
                    navigate('/choose');

                }, 1000);
                toast({
                    title: res.data.msg,
                    status: res.data.status,
                    duration: 2000,
                    isClosable: true,
                    position: 'bottom',
                })
            }
        }).catch((err) => {
            console.log(err);
        })
        setIsSubmitting(false);
    };

    useEffect(() => {
        fetchAlergies();
    }, [])

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
                        SELECTION
                    </Heading>


                    <form onSubmit={formSubmit} className="detailsForm">
                        <div className="row">
                            <div className="inputgroup col-12">
                                <FormLabel>CHOOSE YOUR DIETARY PLAN *</FormLabel>
                                <div className="radiogroup">
                                    {DietPlan.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="dietary_plan" required type="radio" value={val.value} onChange={handleValue} className="d-none" />
                                                <label htmlFor={val.id} className="radioLabel">
                                                    {val.Label}
                                                </label>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="inputgroup col-12">
                                <FormLabel>NUMBER OF DAYS  *</FormLabel>
                                <div className="radiogroup">
                                    {Days.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="num_of_days" required type="radio" value={val.value} onChange={handleValue} className="d-none" />
                                                <label htmlFor={val.id} className="radioLabel">
                                                    {val.Label}
                                                </label>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                            </div>

                            <div className="inputgroup col-12">
                                <FormLabel>ALLERGIES</FormLabel>
                                <div className="radiogroup row">
                                    {Alergies.map((val, i) => {
                                        return (
                                            <>
                                                <input id={val.id} name="allergy" type="checkbox" value={val.id} onChange={handleChecked} className="d-none" />
                                                <label htmlFor={val.id} className="radioLabel col-md-4">
                                                    {val.allergy}
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

export default Selection;