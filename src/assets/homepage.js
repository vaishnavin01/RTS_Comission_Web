import React from 'react';
import { Link } from 'react-router-dom';
import form1 from "../Images/form1.jpg";
import form2 from "../Images/form2.jpg";
import form3 from "../Images/form3.jpg";
import form4 from "../Images/form4.jpg";
import form5 from "../Images/form5.jpg";
import '../assets/homepage.css'

import logo2 from "../Images/logo2.png";


function Homepage() {
  return (
    <div className='container'>
      <div className="formhead">
        <div className="formimgbox">
          <div>
            <img src={logo2} alt="" id='himg' />
          </div>
          <div>
            <h1>MAHARASHTRA RIGHT TO PUBLIC SERVICE ACT</h1>
          </div>
        </div>
      </div>
      <div className='subcontainer'>

        <div className='Box'>
          <div>
            <li><img src={form1} alt="" /></li>
          </div>
          <div>
            <li><button><Link to="/form1">Click here</Link></button></li>
          </div>

        </div>



        <div className='Box'>
          <div>
            <li><img src={form2} alt="" /></li>
          </div>
          <div>
            <li><button><Link to="/form2">Click here</Link></button></li>
          </div>

        </div>



        <div className='Box'>
          <div>
            <li><img src={form3} alt="" /></li>
          </div>
          <div>
            <li><button><Link to="/form3">Click here</Link></button></li>
          </div>

        </div>



        <div className='Box'>
          <div>
            <li><img src={form4} alt="" /></li>
          </div>
          <div>
            <li><button><Link to="/form4">Click here</Link></button></li>
          </div>

        </div>


        <div className='Box'>
          <div>
            <li><img src={form5} alt="" /></li>

          </div>
          <div>
            <li><button><Link to="/form5">Click here</Link></button></li>
          </div>

        </div>



      </div>



    </div>


  );
}

export default Homepage;
