// CourseDetails.js
import React from 'react';
import Accordian from './../Pageslices/AccordianQuestions/Accordian';
import Headerpart from '../Pageslices/Header/Headerpart';
import Masterclass from './../Pageslices/Masterclass/Masterclass';
import Testmonials from './../Pageslices/Testmonials/Testmonials';
import Whatwillyoulearn from '../Pageslices/Whatwillyoulearn/Whatwillyoulearn';
import Mentorpage from './../Pageslices/Mentorpage/Mentorpage';
import Certificate from '../Pageslices/Certificatepart/Certificate';
import Footer from './../Pageslices/Footer/Footer';
import Pricebar from './../Pageslices/Pricebar/Pricebar';
import Banner from '../Pageslices/Banner/Banner';


const items = [
    { title: 'Accordion Item #1', content: 'This is the content of the first item.' },
    { title: 'Accordion Item #2', content: 'This is the content of the second item.' },
    { title: 'Accordion Item #3', content: 'This is the content of the third item.' }
];

const CourseDetails = () => {
    return (
        <div>
            <Headerpart />
            <Masterclass />
            <Testmonials />
            <Whatwillyoulearn />
            <Mentorpage />
            <Certificate />
            <Accordian items={items} />
            <Footer />
            <Pricebar />
            <Banner/>
        </div>
    );
};

export default CourseDetails;
