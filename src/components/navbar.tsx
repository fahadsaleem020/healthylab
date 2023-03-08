import {
  Button,
  HStack,
  useTheme,
  IconButton,
  StackProps,
  ButtonProps,
  Show,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  IconButtonProps,
  BoxProps,
  VStack,
  Text,
  DrawerHeader,
  DrawerCloseButton,
  ImageProps,
  TextProps,
  Link as Clink,
} from "@chakra-ui/react";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineQuestionCircle,
  AiOutlineCustomerService,
} from "react-icons/ai";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import { Link as RLink, useLocation } from "react-router-dom";
import { Paths } from "@/types/navigation";
import { ConfigRequest } from "@/config/ConfigRequest";
import { Link } from "react-router-dom";
const Navbar: FC<
  StackProps & { linksContainer?: StackProps; toggler?: IconButtonProps }
> = ({ linksContainer, toggler, ...props }) => {
  const {
    colors: { brand },
  } = useTheme() as any;
  const navDrawer = useDisclosure();
  const location = useLocation().pathname;

  const isPath = (path: Paths) => {
    if (!location.includes(path)) return undefined;
    return activeStyles;
  };

  const activeStyles: TextProps = {
    bg: brand.light_green,
    color: "white",
  };
  const {api} = ConfigRequest();

  const [isSession, setSession] = useState(false)
  const session = async () => {
    await api.post('session').then((res)=>{
      if(res.data.res === 'login'){
        setSession(true);
      }else{
        setSession(false);
      }
    })
  }
  useEffect(() => {
    session()
  }, [])
  
  return (
    <HStack justifyContent="space-between" {...props}>
      <Brand />
      {/* links */}
      <Show breakpoint="(min-width: 900px)">
        <HStack gap={3} fontWeight="semibold" {...linksContainer}>
          <NavItem to="/">
            <Text
              py="5"
              pt={"8"}
              px="2"
              fontSize={["sm", "sm", "md", "md"]}
              roundedBottom="lg"
              _hover={activeStyles}
            >
              Home
            </Text>
          </NavItem>
          <NavItem to="/ourplans">
            <Text
              py="5"
              pt={"8"}
              px="2"
              fontSize={["sm", "sm", "sm", "md"]}
              roundedBottom="lg"
              _hover={activeStyles}
              {...isPath("ourplans")}
            >
              Our Plans
            </Text>
          </NavItem>
          <NavItem to="/ourmenus">
            <Text
              py="5"
              pt={"8"}
              px="2"
              fontSize={["sm", "sm", "sm", "md"]}
              roundedBottom="lg"
              _hover={activeStyles}
              {...isPath("ourmenus")}
            >
              Our Menu
            </Text>
          </NavItem>
          <NavItem to="/ourtensteps">
            <Text
              py="5"
              pt={"8"}
              px="2"
              fontSize={["sm", "sm", "sm", "md"]}
              roundedBottom="lg"
              _hover={activeStyles}
              {...isPath("ourtensteps")}
            >
              Our Ten Steps
            </Text>
          </NavItem>
          <NavItem to="/aboutus">
            <Text
              py="5"
              pt={"8"}
              px="2"
              fontSize={["sm", "sm", "sm", "md"]}
              roundedBottom="lg"
              _hover={activeStyles}
              {...isPath("aboutus")}
            >
              About us
            </Text>
          </NavItem>
        </HStack>
      </Show>
      {/* buttons */}
      <HStack pt="4" color="white">
    {!isSession ? (
      <>
        <RLink to="/signup">
          <CallToAction
            bg={brand.light_green}
            _hover={{
              border: "1px",
              bg: "transparent",
            }}
          > 
            Get Started
          </CallToAction> 
        </RLink>
         <Clink href="http://healthylab.io/admin" isExternal>
         <CallToAction
           bg={brand.light_green}
           _hover={{
             border: "1px",
             bg: "transparent",
           }}
         >
           Login
         </CallToAction>
       </Clink>
       </>
        ) : (
        <Show breakpoint="(min-width: 900px)">
          <Clink href="http://healthylab.io/admin" isExternal>
            <IconButton
              rounded="full"
              px="6"
              icon={<BsFillPersonFill size={19} />}
              aria-label="account"
              bg={brand.light_green}
              _hover={{
                border: "1px",
                bg: "transparent",
              }}
              size={["sm", "sm", "sm", "md"]}
            />
          </Clink>
          {/* <IconButton
            bg={brand.light_green}
            rounded="full"
            px="6"
            icon={<BsFillCartFill size={19} />}
            aria-label="cart"
            _hover={{
              border: "1px",
              bg: "transparent",
            }}
            size={["sm", "sm", "sm", "md"]}
          /> */}
        </Show>
          )}
        {/* toggler */}
        <MenuToggler
          aria-label="toggler"
          onClick={navDrawer.onOpen}
          {...toggler}
        />
        {/* drawer */}
        <NavbarDrawer isOpen={navDrawer.isOpen} onClose={navDrawer.onClose} />
      </HStack>
    </HStack>
  );
};

const MenuToggler: FC<IconButtonProps> = ({ ...props }) => {
  return (
    <Show breakpoint="(max-width: 900px)">
      <IconButton
        icon={<HiOutlineMenuAlt4 size={20} />}
        colorScheme="whiteAlpha"
        variant="outline"
        rounded="full"
        {...props}
      />
    </Show>
  );
};

const NavbarDrawer: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { colors } = useTheme() as any;
  const activeStyles: StackProps = {
    bg: "purple.100",
    rounded: "md",
  };

  const location = useLocation().pathname;

  const isPath = (path: Paths) => {
    if (!location.includes(path)) return undefined;
    return activeStyles;
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <DrawerBody p="0">
            <VStack gap={6}>
              <HStack
                as={RLink}
                to="/signup"
                w="full"
                fontSize={"lg"}
                className="item"
                cursor="pointer"
                p="1"
                {...isPath("signup")}
              >
                <Box bg={"purple.50"} p="2" rounded="md">
                  <AiOutlineHome
                    size={25}
                    color={(colors.purple as any)[500]}
                  />
                </Box>
                <Text
                  color={colors.brand.dark_purple}
                  p="2"
                  transition="all 200ms ease"
                  sx={{
                    ".item:hover &": {
                      color: "purple.700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Subscribe
                </Text>
              </HStack>

              <HStack
                as={RLink}
                to="/ourplans"
                fontSize={"lg"}
                w="full"
                className="item"
                cursor="pointer"
                p="1"
                {...isPath("ourplans")}
              >
                <Box bg={"purple.50"} p="2" rounded="md">
                  <AiOutlineCustomerService
                    size={25}
                    color={(colors.purple as any)[500]}
                  />
                </Box>
                <Text
                  color={colors.brand.dark_purple}
                  transition="all 200ms ease"
                  sx={{
                    ".item:hover &": {
                      color: "purple.700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Our Plans
                </Text>
              </HStack>

              <HStack
                as={RLink}
                to="/ourmenus"
                fontSize={"lg"}
                w="full"
                className="item"
                cursor="pointer"
                href="/ourmenus"
                p="1"
                {...isPath("ourmenus")}
              >
                <Box bg={"purple.50"} p="2" rounded="md">
                  <AiOutlineQuestionCircle
                    size={25}
                    color={(colors.purple as any)[500]}
                  />
                </Box>
                <Text
                  color={colors.brand.dark_purple}
                  p="2"
                  transition="all 200ms ease"
                  sx={{
                    ".item:hover &": {
                      color: "purple.700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Our Menu
                </Text>
              </HStack>

              <HStack
                as={RLink}
                to="/ourtensteps"
                fontSize={"lg"}
                w="full"
                className="item"
                cursor="pointer"
                href="/ourtensteps"
                p="1"
                {...isPath("ourtensteps")}
              >
                <Box bg={"purple.50"} p="2" rounded="md">
                  <AiOutlinePhone
                    size={25}
                    color={(colors.purple as any)[500]}
                  />
                </Box>
                <Text
                  color={colors.brand.dark_purple}
                  p="2"
                  transition="all 200ms ease"
                  sx={{
                    ".item:hover &": {
                      color: "purple.700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Our Ten Steps
                </Text>
              </HStack>

              <HStack
                as={RLink}
                to="/aboutus"
                fontSize={"lg"}
                w="full"
                className="item"
                cursor="pointer"
                p="1"
                {...isPath("aboutus")}
              >
                <Box bg={"purple.50"} p="2" rounded="md">
                  <AiOutlinePhone
                    size={25}
                    color={(colors.purple as any)[500]}
                  />
                </Box>
                <Text
                  color={colors.brand.dark_purple}
                  p="2"
                  transition="all 200ms ease"
                  sx={{
                    ".item:hover &": {
                      color: "purple.700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  About Us
                </Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const Brand: FC<{ container?: BoxProps; image?: ImageProps }> = ({
  container,
  image,
}) => {
  return (
    <Box w="6rem" position="relative" {...container}>
      <RLink to={"/"}>
        <Image
          position="absolute"
          src="/logo.png"
          alt="home page"
          bottom={0}
          right={0}
          left={0}
          top={"-6"}
          {...image}
        />
      </RLink>
    </Box>
  );
};

const NavItem: FC<PropsWithChildren & { to: string }> = ({ children, to }) => {
  return <RLink to={to}>{children}</RLink>;
};

export const CallToAction: FC<ButtonProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <Button rounded="full" {...props}>
      {children}
    </Button>
  );
};

export default Navbar;
