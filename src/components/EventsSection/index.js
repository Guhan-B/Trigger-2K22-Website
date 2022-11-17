import React from "react";
import Button from "./../Button";
import styles from "./styles.module.scss";
import { events } from "../../shared/data";

const EventsSection = () => {
    return (
        <div className={styles.events_section} id="events">
            <h1>EVENTS</h1>
            <div className={styles.grid}>
                {
                    events.map(
                        event => 
                        <Card
                            image={event.thumbnail} 
                            tags={event.tags} 
                            description={event.description}
                            link={event.registrationLink}
                        />
                    )
                }
            </div>
        </div>
    );
}

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.thumbnail}>
                <img src={props.image} alt="Thumbnail"/>
            </div>
            <div className={styles.body}>
                <div className={styles.tags}>
                    { props.tags.map(tag => <span>{tag}</span>) }
                </div>
                <p>{ props.description }</p>
                <div className={styles.actions}>
                    <Button type="button" label="Register Now" onClick={() => window.open(props.link, "_blank")}/>
                </div>
            </div>
        </div>
    );
}

export default EventsSection;