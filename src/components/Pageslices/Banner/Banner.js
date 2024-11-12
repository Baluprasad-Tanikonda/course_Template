import React from 'react';
import style from './Banner.module.css';


const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.bannerContent}>
                <div className={style.bannerInfo}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Course Thumbnail"
                        className={style.bannerImage}
                    />
                    <div className={style.bannerText}>
                        <h2>Communication Masterclass 2.0</h2>
                        <p>34K+ Students Enrolled</p>
                    </div>
                </div>
                <div className={style.bannerPrice}>
                    <span className={style.originalPrice}>₹5,999.00</span>
                    <span className={style.discountedPrice}>₹2,999.00</span>
                </div>
                <button className={style.enrollButton}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Banner;
