import React from "react";
import { useNavigate } from "react-router-dom";
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
                            key={event.id}
                            id={event.id}
                            image={event.thumbnail} 
                            title={event.title}
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
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`event/${props.id}`)
    }

    return (
        <div className={styles.card}>
            <div className={styles.body} onClick={onClick}>
                <h2>{props.title}</h2>
                <div className={styles.tags}>
                    { props.tags.map(tag => <span key={tag}>{tag}</span>) }
                </div>
                <p>{ props.description }</p>
            </div>
            <div className={styles.actions}>
                    <Button type="button" label="Register Now" onClick={() => window.open(props.link, "_blank")}/>
            </div>
        </div>
    );
}

export default EventsSection;