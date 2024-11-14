import React, { useEffect, useRef, useState } from "react";
import styles from "./Certificate.module.css";
import certificateStyling from './CertificateStyling.module.css';
import background from '../../Assets/background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faLightbulb, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faCrown, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import EnrollButton from './../Enrollbutton/Enrollbutton';
import certificate from '../../Assets/1-1.png';
import { levelData } from "./levelData";

const TimelineComponent = () => {
    const [progressHeight, setProgressHeight] = useState(0);
    const timelineRef = useRef(null);
    const cardRefs = useRef([]);

    // Update progress line based on visible cards
    const updateProgress = () => {
        const totalCards = cardRefs.current.length;
        const visibleCards = cardRefs.current.filter((card) => {
            const rect = card.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }).length;

        // Calculate progress based on visible cards
        const progress = (visibleCards / totalCards) * 100;
        setProgressHeight(progress);
    };

    useEffect(() => {
        // Initialize cardRefs array
        cardRefs.current = cardRefs.current.slice(0, levelData.length);

        // Set up scroll and resize event listeners
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("resize", updateProgress);

        // Initial update
        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <>
            {/* Timeline Section */}
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
                            style={{ height: `${progressHeight}%` }}
                        />
                    </div>

                    {/* Dynamic Level Cards */}
                    {levelData.map((level, index) => (
                        <div
                            key={index}
                            className={`${styles.levelCard} ${styles[`level${index + 1}`]}`}
                            style={level.position}
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <div className={styles.levelIcon}>
                                <FontAwesomeIcon icon={level.icon} className={level.iconClass} />
                            </div>
                            <div className={styles.levelContent}>
                                <h3 className={styles.levelTitle}>{level.title}</h3>
                                <p className={styles.levelDescription}>
                                    {level.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Section */}
            <div className={certificateStyling.content}>
                <div className={certificateStyling.certificateContainer}>
                    <div className={certificateStyling.textContainer}>
                        <h3 className={certificateStyling.heading}>
                            Get<span>&nbsp; Certified</span>
                        </h3>
                        <div className={certificateStyling.descriptionContainer}>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faCrown} />
                                </span>
                                Earn your credentials of Expertise
                            </p>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </span>
                                Share your verified certificate
                            </p>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Add certificate on LinkedIn
                            </p>
                            <div className={certificateStyling.btn}>
                                <EnrollButton label="Upskill Today" />
                            </div>
                        </div>
                    </div>
                    <div className={certificateStyling.imageContainer}>
                        <img
                            src={certificate}
                            alt="Certificate Preview"
                            className={certificateStyling.certificateImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineComponent;
