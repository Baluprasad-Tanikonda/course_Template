import React from 'react';
import styles from './Whatwillyoulearn.module.css';
import cardData from './cardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import backgroundImage from '../../Assets/background.png';
import professional from '../../Assets/professional.svg';
import student from '../../Assets/educationsymbol.svg';
import business from '../../Assets/businesssymbol.svg';

const colors = ["#f0f8ff", "#f5f5dc", "#ffe4e1", "#e6e6fa", "#ffefd5", "#d3ffce"];

const Whatwillyoulearn = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.heading}>
                        What will you <span>Learn</span> ?
                    </p>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam neque molestiae veritatis reprehenderit, rerum doloribus? Assumenda, nemo veniam obcaecati qui, dolor doloremque porro velit veritatis magnam dolorum accusantium consequuntur.
                    </p>
                </div>

                <div className={styles.modules}>
                    {cardData.map((module, index) => (
                        <div
                            key={index}
                            className={styles.moduleContainer}
                            style={{ backgroundColor: colors[index % colors.length] }}
                        >
                            <div className={styles.moduleHeader}>
                                <p className={styles.moduleTitle}>{module.module}</p>
                                <h3 className={styles.moduleSubTitle}>{module.title}</h3>
                            </div>

                            <div className={styles.detailsContainer}>
                                <div className={styles.details}>
                                    <div className={styles.detailItem}>
                                        <FontAwesomeIcon icon={faVideo} />
                                        <p>{module.details.videos} videos</p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <FontAwesomeIcon icon={faClock} />
                                        <p>Time: {module.details.time}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.descriptionsContainer}>
                                {module.details.descriptions.map((description, i) => (
                                    <p key={i} className={styles.descriptionItem}>{description}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.masterclassInfo}>
                <img src={backgroundImage} alt="Background" className={styles.backgroundImage} />
                <p className={styles.masterclassQuestion}>Who is this <span>Masterclass</span> for?</p>
                <section className={styles.roleContainer}>
                    <article className={styles.role}>
                        <img src={professional} alt="Working Professional" className={styles.roleImage} />
                        <div>
                            <h3 className={styles.roleTitle}>Working professional</h3>
                            <p className={styles.roleDescription}>who want to present ideas, participate in office meetings or get promoted.</p>
                        </div>
                    </article>
                    <article className={styles.role}>
                        <img src={business} alt="Business Owner" className={styles.roleImage} />
                        <div>
                            <h3 className={styles.roleTitle}>Business Owner</h3>
                            <p className={styles.roleDescription}>who want to become better leaders, improve delegation, negotiation, and sales.</p>
                        </div>
                    </article>
                    <article className={styles.role}>
                        <img src={student} alt="Student" className={styles.roleImage} />
                        <div>
                            <h3 className={styles.roleTitle}>Students</h3>
                            <p className={styles.roleDescription}>who want to have a great college life filled with new opportunities, clear Interviews & get a dream job.</p>
                        </div>
                    </article>
                </section>

            </div>
        </>
    );
};

export default Whatwillyoulearn;
