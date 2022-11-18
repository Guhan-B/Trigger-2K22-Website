import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import EventsSection from "../../components/EventsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const LandingPage = (props) => {
    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, []);

    return (
        <React.Fragment>
            <Header showLinks={true}></Header>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <EventsSection></EventsSection>    
            <ContactSection></ContactSection>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default LandingPage;