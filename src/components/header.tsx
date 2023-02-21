import { Container, useTheme, BoxProps, Box, Image } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const Header: FC<BoxProps & PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Box position="relative" as="header" {...props}>
      <Container maxW={"8xl"}>{children}</Container>
    </Box>
  );
};

export const HeroBeard: FC<{ section?: BoxProps; container?: BoxProps }> = ({
  section,
  container,
}) => {
  const {
    colors: { brand },
  } = useTheme() as any;
  return (
    <Box {...container}>
      <Box h="10" bg={brand.dark_purple} {...section} />
      <Image src="/primary_blob.svg" alt="blob" />
    </Box>
  );
};
export default Header;
