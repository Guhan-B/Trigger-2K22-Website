import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";
import SAMPLE_POSTER from "../../assets/Sample Poster.png";
import { events } from "../../shared/data";

const EventPage = (props) => {
    const params = useParams();
    const event = events.find(event => Number.parseInt(event.id) === Number.parseInt(params.id));
    
    console.log(params);
    console.log(event);

    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, []);

    return (
        <React.Fragment>
            <Header showLinks={false}></Header>
            <div className={styles.event_section}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{ event.title }</h1>
                    <p className={styles.description}>{ event.description }</p>
                    <div className={styles.details}>
                        <span>
                            <p>Team Size</p>
                            <p>{ event.teamSize }</p>
                        </span>
                        <span>
                            <p>Venue</p>
                            <p>{ event.venue }</p>
                        </span>
                        <span>
                            <p>Schedule</p>
                            <p>{ event.schedule }</p>
                        </span>
                    </div>
                    <div className={styles.organizers}>
                        <p>Organizers Details</p>
                        <table>
                            <thead>
                                <tr>
                                    <td>S.No</td>
                                    <td>Name</td>
                                    <td>Mobile Number</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    event.organizers.map(
                                        (organizer, idx) =>
                                        <tr key={idx}>
                                            <td>{ idx + 1 }</td>
                                            <td>{ organizer.name }</td>
                                            <td>
                                                <a href={`tel:${organizer.mobileNumber}`}>{ organizer.mobileNumber }</a>
                                            </td>
                                        </tr> 
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.rules}>
                        <p>Rules</p>
                        <ul>
                            { event.rules.map((rule, idx) => <li key={idx}>{ rule }</li>) }
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <img className={styles.poster} src={SAMPLE_POSTER} alt="poster"/>
                    <Button type="button" label="Register Now" onClick={() => window.open(event.registrationLink, "_blank")}/>
                </div>
            </div>

            <Footer></Footer>
        </React.Fragment>
    );
}

export default EventPage;