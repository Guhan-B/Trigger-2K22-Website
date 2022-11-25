import React from "react";
import styles from "./styles.module.scss";
import HASHTAG from "../../assets/HashTag.svg";
import { socials } from "../../shared/data";
import Button from "../Button";

const HeroSection = (props) => {
    const [timer, setTimer] = React.useState({days: 0, hours: 0, minutes: 0, seconds: 0})

    React.useEffect(() => {
        const i = setInterval(() => calculateTime("November, 26, 2022"), 1000);
        return () => clearInterval(i);
    }, [])

    const numberFormatter = (number) => {
        return number < 10 ? "0" + number : number;
    }

    const calculateTime = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            setTimer({
                days: Math.floor(time / (1000 * 60 * 60 * 24)),
                hours: Math.floor((time / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((time / 1000 / 60) % 60),
                seconds: Math.floor((time / 1000) % 60)
            })
        }
    }

    return (
        <div id="home" className={styles.hero_section}>
            <div className={styles.center_text}>
                <h2>Department of Computer Technology, Anna University, MIT Campus</h2>
                <h2>Association of Computer Technologists</h2>
                <h2>Presents</h2>
                <h1>TRIGGER <span>2K22</span></h1>
            </div>

            <div className={styles.counter}>
                <div className={styles.time}>
                    <span>
                        <p>{numberFormatter(timer.days)}</p>
                        <p>Days</p>
                    </span>
                    <span>
                        <p>{numberFormatter(timer.hours)}</p>
                        <p>Hours</p>
                    </span>
                    <span>
                        <p>{numberFormatter(timer.minutes)}</p>
                        <p>Minutes</p>
                    </span>
                    <span>
                        <p>{numberFormatter(timer.seconds)}</p>
                        <p>Seconds</p>
                    </span>
                </div>
                <div className={styles.action}>
                    <Button label="Register Now" href="#events"/>
                </div>
            </div>

            <div className={styles.side_social}>
                {
                    socials.map(
                        social => 
                        <a rel="noreferrer" target="_blank" key={social.id} href={social.url}>
                            <img src={social.icon} alt={social.name}/>
                        </a>
                    )
                }
                <span className={styles.line}></span>
            </div>

            <div className={styles.side_email}>
                <a href="mailto:contact.actmit@gmail.com">contact.actmit@gmail.com</a>
                <span className={styles.line}></span>
            </div>

            <div  className={styles.marquee}>
                <img src={HASHTAG} alt="Hash Tag"/>
                <img src={HASHTAG} alt="Hash Tag"/>
            </div>
        </div>
    );
}

export default HeroSection;