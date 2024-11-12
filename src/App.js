// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetailsPage/CourseDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
