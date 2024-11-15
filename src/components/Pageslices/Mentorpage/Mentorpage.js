import React, { useEffect, useState } from 'react';
import styles from './Mentorpage.module.css';
import image1 from '../../Assets/1-1.png';
import image2 from '../../Assets/2-1.png';
import image3 from '../../Assets/3-1.png';
import crownImage from '../../Assets/crownImage.svg';
import EnrollButton from './../Enrollbutton/Enrollbutton';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Mentorpage = () => {

    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const autoSlideInterval = 4000;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, autoSlideInterval);

        // Cleanup function to clear the timer
        return () => clearInterval(timer);
    }, [currentImageIndex]);


    return (
        <div className={styles.Mentorpage}>
            {/* Full width background */}
            <div className={`${styles.background} p-4 rounded shadow`}>
                <h2 className="text-center mb-4">
                    Unlock Bonuses worth <span className="text-primary">₹17000</span>
                </h2>

                <div className={styles.cards}>
                    <div className="row justify-content-center">
                        {/* Bonus 1 */}

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#ff6f01', border: '2px dashed #ff7300', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 1</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #ff7300', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image1} className="card-img-top" alt="Bonus 1" />
                                <div className="card-body text-center" style={{ backgroundColor: '#ffefe3' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹4999</span>
                                        <span style={{ color: '#e46f15', paddingLeft: '25px', fontSize: '24px' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#ff6f01', border: '2px dashed #ff7300', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 2</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #ff7300', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image2} className="card-img-top" alt="Bonus 2" />
                                <div className="card-body text-center" style={{ backgroundColor: '#ffefe3' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹5999</span>
                                        <span style={{ color: '#e46f15', paddingLeft: '25px', fontSize: '24px' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#ff6f01', border: '2px dashed #ff7300', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 3</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #ff7300', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image3} className="card-img-top" alt="Bonus 3" />
                                <div className="card-body text-center" style={{ backgroundColor: '#ffefe3' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹6999</span>
                                        <span style={{ color: '#e46f15', paddingLeft: '25px', fontSize: '24px' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Unlock Bonuses Button */}
                <div className="text-center mt-4">
                    <EnrollButton label="Unlock Bonuses" />
                </div>
            </div>


            <div className={styles.mentorInfo}>
                <div className={styles.mentorProfile}>
                    <p className={styles.smallHeading}>Meet your <span className={styles.color}>Instructor</span></p>

                    {/* Carousel image */}
                    <img
                        src={images[currentImageIndex]}
                        alt={`Mentor ${currentImageIndex + 1}`}
                        className={styles.profileImage}
                    />

                    {/* Mentor details */}
                    <div className={styles.mentorDetails}>
                        <p className={styles.mentorSkill}>
                            <span><img src={crownImage} alt="" /></span>Expert in Communication Skills
                        </p>
                        <p className={styles.mentorName}>Ganeshprasad</p>
                        <p className={styles.mentorTitle}>Co-founder of Think School</p>
                    </div>

                    {/* Navigation buttons */}
                    <button onClick={() => { prevImage(); }} className={styles.prevButton}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={() => { nextImage(); }} className={styles.nextButton}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                <div className={styles.mentorBio}>
                   <div className={styles.bioContent}>
                        <h3 className={styles.bioTitle}>Meet your Mentor</h3>
                        <p className={styles.bioText}>
                            Ganesh is a public speaker and YouTuber who co-founded Think School with Parsh Kothari, an education startup that generated 4+ Billion video impressions in 24 months.
                        </p>
                        <p className={styles.bioText}>
                            Ganesh has helped 27,000+ students improve their communication to become effective public speakers, great salespeople, YouTubers, and successful business people. Ganesh’s dedication to education has earned him the title of “Insightful Education Creator of the Year 2023” at the Global Startup Summit 2023.
                        </p>
                        <p className={styles.bioText}>
                            His vision is to make the Indian youth more employable by helping them learn practical and fundamental skills in life.
                        </p>
                   </div>

                    {/* Statistics */}
                    <div className={styles.mentorStats}>
                        <div className={styles.statItem}>
                            <img src="" alt="" className={styles.statIcon} />
                            <p>3.71M+</p>
                            <p>subscribers</p>
                        </div>
                        <div className={styles.statItem}>
                            <img src="" alt="" className={styles.statIcon} />
                            <p>450K+</p>
                            <p>followers</p>
                        </div>
                        <div className={styles.statItem}>
                            <img src="" alt="" className={styles.statIcon} />
                            <p>58K+ </p>
                            <p>fllowers</p>
                        </div>
                    </div>

                    {/* Featured In */}
                    <div className={styles.featured}>
                        <p>Featured in</p>
                        <div className={styles.logos}>
                            <img src={''} alt="" className={styles.featuredImage} />
                            <img src={''} alt="" className={styles.featuredImage} />
                            <img src={''} alt="" className={styles.featuredImage} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentorpage;
