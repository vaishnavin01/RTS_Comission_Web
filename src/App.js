import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/navbar';
import './assets/navbar.css';
import Homepage from './assets/homepage';
import Form1 from './assets/form1';
import Form2 from './assets/form2';
import Form3 from './assets/form3';
import Form4 from './assets/form4';

import Form5 from './assets/form5';
import Dashboard4 from './assets/dashboard4';
import Dashboard3 from './assets/dashboard3';
import Dashboard5 from './assets/dashboard5';
import Dashboard2 from './assets/dashboard2';
import Dashboard1 from './assets/dashboard1';
import Contact from './assets/contact';
import Login from './assets/Login';
import Registration from './assets/Registration';

import About from './assets/about';



function App() {
  return (

    <Router>
      <div>
        <Navbar />



        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path="/form5" element={<Form5 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/dashboard4' element={<Dashboard4 />}></Route>
          <Route path='/dashboard3' element={<Dashboard3 />}></Route>
          <Route path='/dashboard5' element={<Dashboard5 />}></Route>
          <Route path='/dashboard2' element={<Dashboard2 />}></Route>
          <Route path='/dashboard1' element={<Dashboard1 />}></Route>



        </Routes>



      </div>
    </Router>
  );
}

export default App;
