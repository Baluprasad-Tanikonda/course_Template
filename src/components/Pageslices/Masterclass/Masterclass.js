import React, { useEffect, useState } from 'react';
import styles from './Masterclass.module.css';
import classImage from '../../Assets/masterclass/Group-5015-min-1.png';
import Enrollbutton from './../Enrollbutton/Enrollbutton';

const Masterclass = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Check if there's a saved event date in localStorage
        const savedEventDate = localStorage.getItem('eventDate');
        let eventDate;

        if (savedEventDate) {
            eventDate = new Date(savedEventDate);
        } else {
            eventDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // One week from now
            localStorage.setItem('eventDate', eventDate);
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(interval);
                localStorage.removeItem('eventDate');
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []); // No dependencies, run only once

    return (
        <div>
            <div className={styles.MasterClass}>
                {/* <span className={styles.aside}>press B anytime to Enroll</span> */}
                <div className={styles.headings}>
                    <p className={styles.Text1}>That's why we created </p>
                    <p className={styles.Text2}>a masterclass</p>
                    <p className={styles.Text3}>to help you speak with confidence and clarity</p>
                </div>
            </div>
            <div className={styles.classVideo}>
                <img src={classImage} alt="Masterclass" className={styles.ClassImage} />
            </div>
            <div className={styles.nextLive}>
                <Enrollbutton label="Enroll Now" />
                <h2>NEXT Live Q&A in </h2>
                <div className={styles.timerBoxes}>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.days}</div>
                        <div>Days</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.hours}</div>
                        <div>Hours</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.minutes}</div>
                        <div>Minutes</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.seconds}</div>
                        <div>Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masterclass;
