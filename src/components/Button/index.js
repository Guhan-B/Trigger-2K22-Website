import React from "react";
import styles from "./styles.module.scss";
import ARROW from "../../assets/Arrow.svg";

const Button = (props) => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            <span>{props.label}</span>
            <img src={ARROW} alt="arrow" />
        </button>
    );
}

export default Button;