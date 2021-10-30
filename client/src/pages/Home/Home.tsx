import React, { FC } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Categories from "../../component/Categories/Categories";
import HeroImg from "../../images/background/Hero-section.jpg";
import MobileHeroImg from "../../images/background/Hero-section-mobile.jpg";
import Footer from "../../component/Footer/Footer";
import { HeroSection, HeroImage, MobileHeroImage } from "./styles";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection>
        <HeroImage src={HeroImg} alt="Hero Section" />
        <MobileHeroImage src={MobileHeroImg} alt="Hero Section" />
      </HeroSection>
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
