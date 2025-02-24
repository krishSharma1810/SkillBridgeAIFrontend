import React from 'react';
import Navbar from "../componentBlock/NavBar"
import HeroSection from "../componentBlock/HeroSection"
import HomeSection2 from "../componentBlock/HomeSection2"
import HomeSection3 from "../componentBlock/HomeSection3"
import Footer from "../componentBlock/Footer"

const Home = () => {
    return (<>
        <Navbar />
        <HeroSection />
        <HomeSection2/>
        <HomeSection3/>
        <Footer/>
    </>
    );
}

export default Home;
