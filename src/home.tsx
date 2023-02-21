import CelebrateSeciton from "@/components/celebratesection";
import GridSections from "@/components/gridsection";
import { useMediaQuery, useTheme } from "@chakra-ui/react";
import HeroSection from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FC } from "react";

const Home: FC = () => {
  const [isMobile] = useMediaQuery("(min-width: 900px)");
  const {
    colors: { brand },
  } = useTheme() as any;

  return (
    <>
      <Header bg={brand.dark_purple}>
        <Navbar color="white" py={isMobile ? undefined : "4"} />
        <HeroSection />
      </Header>
      <GridSections />
      <CelebrateSeciton />
      <Footer px="7" />
    </>
  );
};

export default Home;
