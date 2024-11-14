import React, { useState, useEffect, useRef } from 'react';
import styles from './Testmonials.module.css';
import YTW from '../../Assets/Group-5 images.webp';
import YTB from '../../Assets/yt comments normal.png';
import blackLine from '../../Assets/blackLine.svg';
import TYmobileView from '../../Assets/youtube comments.webp';
import YTWmogileView from '../../Assets/Group for mobile view..webp';

const Testmonials = () => {
    const [studentsEnrolled, setStudentsEnrolled] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [completionRating, setCompletionRating] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const statsRef = useRef(null); // Reference to track the stats section
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run

    const animateCount = (setter, target, duration) => {
        let start = 0;
        const increment = target / (duration / 50);

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(interval);
            } else {
                setter(Math.round(start * 10) / 10);
            }
        }, 50);
    };

    // Resize handler for responsive images
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageToDisplay = screenWidth < 800 ? TYmobileView : YTW;
    const imageForStatistics = screenWidth < 800 ? YTWmogileView : YTB;

    // Use IntersectionObserver to trigger the animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCount(setStudentsEnrolled, 34, 1000);
                        animateCount(setAverageRating, 4.9, 1000);
                        animateCount(setCompletionRating, 86, 1000);
                        setHasAnimated(true); // Ensure it only animates once
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className={styles.testmonials}>
            <p className={styles.heading}>TESTIMONIALS</p>

            {/* Section 1: Student Transformation */}
            <div className={styles.section}>
                <h3 className={styles.subHeading}>
                    <span className={styles.highlateWord}>34,000+ students</span> have already transformed their lives
                </h3>
                <img
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    src={blackLine}
                    alt="Decorative Line"
                    className={styles.line}
                />
                <img
                    src={imageToDisplay}
                    alt="Student Testimonials"
                    className={styles.image}
                />
            </div>

            {/* Section 2: Statistics */}
            <div className={styles.section} ref={statsRef}>
                <h3 className={styles.subHeading}>
                    Numbers that speak for themselves
                </h3>
                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{studentsEnrolled.toLocaleString()}K</span>
                        <p className={styles.statLabel}>Students Enrolled</p>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{averageRating}/5</span>
                        <p className={styles.statLabel}>Average Rating</p>
                    </div>
                    {screenWidth > 790 && (
                        <div className={styles.stat}>
                            <span className={styles.statValue}>{completionRating}%</span>
                            <p className={styles.statLabel}>Completion Rating</p>
                        </div>
                    )}
                </div>
                <img src={imageForStatistics} alt="YouTube Comments" className={styles.image} />
            </div>
        </div>
    );
};

export default Testmonials;
