import React, { useEffect, useRef, useState } from "react";
import styles from "./Certificate.module.css";
import certificateStyling from './CertificateStyling.module.css';
import background from '../../Assets/background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faLightbulb, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faCrown, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import EnrollButton from './../Enrollbutton/Enrollbutton';
import certificate from '../../Assets/1-1.png';

const TimelineComponent = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);

    const handleScroll = () => {
        if (!timelineRef.current) return;
        const element = timelineRef.current;
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.scrollHeight;
        const windowHeight = window.innerHeight;

        // Calculate the scroll progress relative to the container
        const progress = Math.min(
            Math.max(((windowHeight - elementTop) / (elementHeight + windowHeight)) * 100, 0),
            100
        );
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={styles.timelineContainer}
                ref={timelineRef}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={styles.timelineHeading}>
                    <p>Your Journey to becoming a <span style={{ color: "#ff5003" }}>Master Communicator</span></p>
                </div>


                <div className={styles.courseLevel}>
                    <div className={styles.timelineLine}>
                        <div
                            className={styles.progressLine}
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>

                    <div className={`${styles.levelCard} ${styles.level1}`} style={{ top: "10%", left: "15%" }}>
                        <div className={`${styles.levelIcon}`}>
                            <FontAwesomeIcon icon={faFlag} className={styles.icon} />
                        </div>
                        <h3 className={styles.levelTitle}>Stutter to Steady</h3>
                        <p className={styles.levelDescription}>
                            You will eliminate all the <em>‘ummm’</em> and <em>‘aaa’</em> and start
                            speaking steadily and confidently to everyone around you!
                        </p>
                    </div>

                    <div className={`${styles.levelCard} ${styles.level2}`} style={{ top: "40%" }}>
                        <div className={`${styles.levelIcon2}`}>
                            <FontAwesomeIcon icon={faPaperPlane} className={styles.icon2} />
                        </div>
                        <h3 className={styles.levelTitle}>Steady to Clear</h3>
                        <p className={styles.levelDescription}>
                            You will be able to present your thoughts in a clear manner to make people
                            understand you easily.
                        </p>
                    </div>

                    <div className={`${styles.levelCard} ${styles.level3}`} style={{ top: "70%", left: "15%" }}>
                        <div className={`${styles.levelIcon}`}>
                            <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                        </div>
                        <h3 className={styles.levelTitle}>Clear to Clever</h3>
                        <p className={styles.levelDescription}>
                            People will remember you, trust you, respect you, and will extend a hand of
                            friendship towards you upfront!
                        </p>
                    </div>

                </div>
            </div>

            <div className={certificateStyling.content}>
                <div className={certificateStyling.certificateContainer}>
                    <div className={certificateStyling.textContainer}>
                        <h3 className={certificateStyling.heading}>Get<span>&nbsp; Certified</span></h3>
                        <div className={certificateStyling.descriptionContainer}>
                            <p className={certificateStyling.description}><span className={certificateStyling.symbol}><FontAwesomeIcon icon={faCrown} /></span>Earn your credentials of Expertise</p>
                            <p className={certificateStyling.description}><span className={certificateStyling.symbol}><FontAwesomeIcon icon={faShareNodes} /></span>Share your verified certificate</p>
                            <p className={certificateStyling.description}><span className={certificateStyling.symbol}><FontAwesomeIcon icon={faCircleCheck} /></span>Add certificate on LinkedIn</p>
                            <div className={certificateStyling.btn}><EnrollButton label="Upskill Today" /></div>
                        </div>
                    </div>
                    <div className={certificateStyling.imageContainer}>
                        <img src={certificate} alt="Certificate Preview" className={certificateStyling.certificateImage} />
                    </div>
                </div>
            </div>


        </>
    );
};

export default TimelineComponent;
