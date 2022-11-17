import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import EventsSection from "../../components/EventsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

const LandingPage = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <EventsSection></EventsSection>    
            <ContactSection></ContactSection>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default LandingPage;