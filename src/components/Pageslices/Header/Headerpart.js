import React, { useEffect, useRef, useState } from 'react';
import videoSymbol from '../../Assets/movieLogo.svg';
import smallVideo from '../../Assets/smallvideosymbol.svg';
import padsymbol from '../../Assets/padLogo.svg';
import badgeSymbol from '../../Assets/badgeesymbol.svg';
import booksymbol from '../../Assets/bookLogo.svg';
import globeSymbol from '../../Assets/globesymbol.svg';
import style from './Header.module.css';
import Enrollbutton from './../Enrollbutton/Enrollbutton';
import BackgroundImg from '../../Assets/background.png';
import HeaderImg from '../../Assets/HeaderImg.webp';
import FollowerImg from '../../Assets/FollowewrGroup.webp';
import starSymbol from '../../Assets/star.svg';
import RedLine from '../../Assets/RedLine.webp';
import questionMark from '../../Assets/RedQuestionmark.svg';

const Headerpart = () => {
    const redLineRef = useRef(null);
    const header1Ref = useRef(null);
    const header2Ref = useRef(null);
    const doughtsPartRef = useRef(null);


    // below the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1025);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.DoughtsPartVisible);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
        if (redLineRef.current) observer.observe(redLineRef.current);

        return () => {
            if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
            if (redLineRef.current) observer.unobserve(redLineRef.current);
        };
    }, []);

    return (
        <div className={style.headerContainer}>
            <img src={BackgroundImg} alt="Background" className={style.backgroundImage} />
            <div className={style.contentContainer}>
                <div className={style.symbolsContainer}>
                    <h2 className={style.headerText}>
                        {isMobile
                            ? <>Master English Comm unication in <span className={style.highlightedWord}>6 weeks</span></>
                            : <>Learn how to speak English confidence in <span className={style.highlightedWord}>6 weeks</span></>}
                    </h2>
                    <div className={style.symbolItemContent}>
                        <div className={style.symbolItem}>
                            <img
                                src={isMobile ? smallVideo : videoSymbol}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}>Watch Tutorials</span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={isMobile ? badgeSymbol : booksymbol}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}>Read english websires with extra notes or and Materials</span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={isMobile ? globeSymbol : padsymbol}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}>Take Notes</span>
                        </div>
                    </div>
                    <div className={style.EnrollButtonContent}>
                        {!isMobile && <Enrollbutton label="Enroll Now" className={style.EnrollButton} />}
                        <span><img src={FollowerImg} alt="Follower group" className={style.FollowerImage} /></span>
                        <div className={style.reviewContainer}>
                            <div className={style.FollowerStars}>
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={starSymbol} alt="Star" className={style.star} />
                                ))}
                            </div>
                            <span className={style.FollowerCount}>10K+ reviews (4.9 of 5)</span>
                        </div>
                    </div>
                </div>
                <div className={style.HeaderPicture}>
                    <img src={HeaderImg} alt="Header graphic" className={style.headerImage} />
                    <div className={style.professorTitle}>
                        <h3>- With Balu prasad</h3>
                        <p>Co Founder of Digital World | You Tuber</p>
                    </div>
                </div>
            </div>


            <div className={style.scrollSection}>
                <p>Trusted by Learners Working At Top Companies Like</p>
                <div className={style.logoContainer}>
                    <div className={style.logoScroll1}>
                        {/* <img src="Company 1" alt="Company 1" className={style.logo} />
                        <img src="Company 1" alt="Company 2" className={style.logo} />
                        <img src="Company 1" alt="Company 3" className={style.logo} />
                        <img src="Company 1" alt="Company 4" className={style.logo} />
                        <img src="Company 1" alt="Company 5" className={style.logo} /> */}
                        {/* Repea"Company 1"r seamless scrolling */}
                        {/* <img src="Company 1" alt="Company 1" className={style.logo} />
                        <img src="Company 1" alt="Company 2" className={style.logo} />
                        <img src="Company 1" alt="Company 3" className={style.logo} />
                        <img src="Company 1" alt="Company 4" className={style.logo} />
                        <img src="Company 1" alt="Company 5" className={style.logo} /> */}
                        <span className={style.companyName}>Company 1</span>
                        <span className={style.companyName}>Company 2</span>
                        <span className={style.companyName}>Company 3</span>
                        <span className={style.companyName}>Company 4</span>
                        <span className={style.companyName}>Company 5</span>
                        <span className={style.companyName}>Company 6</span>
                        <span className={style.companyName}>Company 7</span>
                        <span className={style.companyName}>Company 8</span>
                        <span className={style.companyName}>Company 9</span>
                        <span className={style.companyName}>Company 10</span>
                    </div>

                    <div className={style.logoScroll2}>
                        <span className={style.companyName}>Company 1</span>
                        <span className={style.companyName}>Company 2</span>
                        <span className={style.companyName}>Company 3</span>
                        <span className={style.companyName}>Company 4</span>
                        <span className={style.companyName}>Company 5</span>
                        <span className={style.companyName}>Company 6</span>
                        <span className={style.companyName}>Company 7</span>
                        <span className={style.companyName}>Company 8</span>
                        <span className={style.companyName}>Company 9</span>
                        <span className={style.companyName}>Company 10</span>
                    </div>
                </div>
            </div>

            <div className={style.DoughtsPart} ref={doughtsPartRef}>
                <p ref={header1Ref} className={`${style.header1}`}>Do you struggle with</p>
                <p ref={header2Ref} className={`${style.header2}`}>expressing yourself confidently?</p>
                <img
                    ref={redLineRef}
                    src={RedLine}
                    alt=""
                    className={`${style.redLine}`}
                />
                <div className={style.SelfQuestioning} data-aos="zoom-in" data-aos-duration="1000">
                    <div className={style.questionItem}>
                        <img src={questionMark} alt="Question mark" className={style.questionIcon} />
                        <p>You want to present your ideas more clearly</p>
                    </div>
                    <div className={style.questionItem}>
                        <img src={questionMark} alt="Question mark" className={style.questionIcon} />
                        <p>You want to make friends and influence people</p>
                    </div>
                    <div className={style.questionItem}>
                        <img src={questionMark} alt="Question mark" className={style.questionIcon} />
                        <p>You want to excel in office meetings and presentations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headerpart;
