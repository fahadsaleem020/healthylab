import { FC, useState } from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
  HStack,
  Link,
  Toast,
  useToast,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { ConfigRequest } from "./config/ConfigRequest";
import { useNavigate } from 'react-router'; 



const Signup: FC = () => {


  const { api ,setSessionToken} = ConfigRequest();
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(min-width: 900px)");
  const [is700] = useMediaQuery("(max-width: 700px)");

  const {
    colors: { brand },
  } = useTheme() as any;
  const toast = useToast()
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassowrd, setConfirmPassword] = useState<string>('');
  const [isSubmitting, setSubmitting] = useState(false)

  const submitEvent = async () => {
    setSubmitting(true); 
    toast.closeAll()
    const formdata = new FormData();
    if (email != '' && phone != '' && password != '' && confirmPassowrd != '') {
      formdata.append('email', email);
      formdata.append('mobile', phone);
      if (confirmPassowrd !== password) {
        setSubmitting(false);
        return (
          toast({
            title: 'Password and Confirm password incorrect',
            status: 'warning',
            duration: 2000,
            isClosable: true,
            position: 'bottom',
          })
        );
      }

      formdata.append('password', password);
      formdata.append('confirmPassword', confirmPassowrd);
      await api.post('getStart', formdata).then((res) => {
        setSubmitting(false);
        if (res.data.status === 'success') {
           sessionStorage.setItem('email',window.btoa(res.data.email));
            toast({
              title: 'Successfully Signup',
              status: 'success',
              duration: 2000,
              isClosable: true,
              position: 'bottom',
            })
            setSessionToken()
          setTimeout(() => {
            navigate('/details');
            
          }, 2000);
        }else{
          toast({
            title: res.data.msg,
            status: res.data.status,
            duration: 2000,
            isClosable: true,
            position: 'bottom',
          })
        }
      }).catch((err) => {
        setSubmitting(false);
        console.log(err);
      })
    } else {
      setSubmitting(false);
      return (
        toast({
          title: 'Fill the fields',
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position: 'bottom',
        })
      );
    }
  };

  return (
    <Box as="main" minH="100vh" px="7" bg={brand.dark_purple}>
      <Navbar color="white" py={isMobile ? undefined : "4"} mb="10" />
      
        <Box
          bg="white"
          rounded="2xl"
          maxW={"40rem"}
          m="auto"
          p="10"
          textAlign={"center"}
        >
          <Heading>GET STARTED</Heading>
          <Text mb="10">A diet that tastes better than you cheat days!</Text>
          <Flex flexDir={is700 ? "column" : undefined}> 
            <VStack flex={1} alignItems="start" justifyContent={"center"}>
              <VStack gap={4} w="full" alignItems="start">
                <FormControl>
                  <FormLabel>Your Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    variant={"filled"}
                    rounded="full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter your mobile number"
                      variant={"filled"}
                      rounded="full"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      variant={"filled"}
                      rounded="full"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter password again"
                      variant={"filled"}
                      rounded="full"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormControl>

                  <Box w="full">
                    <Button
                      mt="5"
                      w="full"
                      rounded="full"
                      type="button"
                      onClick={submitEvent}
                      color="white"
                      shadow="xl"
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
                    <Text pt="12">
                      By clicking above, you agree to our <Link>Terms of use</Link>
                      <br />
                      and consent to our privacy policy
                    </Text>
                  </Box>
              </VStack>
            </VStack>
          </Flex>
        </Box>
   
    </Box>
  )
};

export default Signup;
