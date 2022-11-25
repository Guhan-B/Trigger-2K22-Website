import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ACT from "../../assets/ACT.png"
import MIT from "../../assets/MIT.png";
import AU from "../../assets/AU.png";

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

    const [showMenu, setShowMenu] = React.useState(false);

    const iconClasses = [styles.burger_icon];
    const menuClasses = [styles.burger_menu];

    if(showMenu) {
        iconClasses.push(styles.active);
        menuClasses.push(styles.active);
    }
    
    return (
        <header id="header" className={styles.header}>
            <div className={[styles.logo, styles.AU_MIT].join(" ")} onClick={() => navigate("/")}>
                <img src={AU}  alt="AU"/>
                <img src={MIT} alt="MIT"/>
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

            { 
                props.showLinks &&
                <React.Fragment>
                    <div className={menuClasses.join(" ")}>
                        <a onClick={() => setShowMenu(false)} href="#home">Home</a>
                        <a onClick={() => setShowMenu(false)} href="#about">About</a>
                        <a onClick={() => setShowMenu(false)} href="#events">Events</a>
                        <a onClick={() => setShowMenu(false)} href="#support">Support</a>
                    </div>
                    <div className={iconClasses.join(" ")} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </React.Fragment>
            }
            
            <div className={[styles.logo, styles.ACT].join(" ")} onClick={() => navigate("/")}>
                <img src={ACT} alt="ACT"/>
            </div>
        </header>
    );
}

export default Header;