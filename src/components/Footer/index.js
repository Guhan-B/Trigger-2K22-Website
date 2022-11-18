import React from "react";
import styles from "./styles.module.scss";
import PHONE from "../../assets/Phone.svg";
import { socials, technicalEventManager, nonTechnicalEventManager} from "../../shared/data";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.left}>
            <h2>TRIGGER 2K22</h2>
            <div className={styles.contacts}>
                <span className={styles.contact}>
                    <p>Tech Event Manager</p>
                    <span>
                        <img src={PHONE} alt="phone"/>
                        <p><a href={`tel:${technicalEventManager.mobileNumber}`}>{technicalEventManager.mobileNumber}</a>&nbsp;&nbsp;({technicalEventManager.name})</p>
                    </span>
                </span>
                <span className={styles.contact}>
                    <p>Non Tech Event Manager</p>
                    <span>
                        <img src={PHONE} alt="phone"/>
                        <p><a href={`tel:${nonTechnicalEventManager.mobileNumber}`}>{nonTechnicalEventManager.mobileNumber}</a>&nbsp;&nbsp;({nonTechnicalEventManager.name})</p>
                    </span>
                </span>
            </div>
            <div className={styles.social}>
                { socials.map(social => <a key={social.id} href={social.url}><img alt="icon" src={social.icon}/></a>) }
            </div>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2022, Association of Computer Technologists</p>
            </div>
        </div>
        <div className={styles.right}>

        </div>
    </div>
  );
};

export default Footer;
