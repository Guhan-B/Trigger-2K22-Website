import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ACT from "../../assets/ACT.png"

const Header = (props) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const header = document.getElementById("header");

        const listiner = (e) => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = "var(--color-white)";
                header.style.boxShadow = "rgba(107, 114, 142, 0.5) 0px 0px 10px 0px";
            } else {
                header.style.backgroundColor = "transparent"
                header.style.boxShadow = "";
            }
        }

        document.addEventListener('scroll', listiner);

        return () => {
            document.removeEventListener("scroll", listiner);
        }
    }, []);

    return (
        <header id="header" className={styles.header}>
            <div className={styles.logo} onClick={() => navigate("/trigger")}>
                <img src={ACT} alt="ACT"/>
                <span>
                    <p>ANNA UNIVERSITY, MIT</p>
                    <p>DEPARTMENT OF COMPUTER TECHNOLOGY</p>
                </span>
            </div>
            { 
                props.showLinks &&
                <div className={styles.links}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#events">Events</a>
                    <a href="#support">Support</a>
                </div>
            }
        </header>
    );
}

export default Header;