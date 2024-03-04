import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './about.css';
import officer from "../Images/officer.jpg";
import logo2 from "../Images/logo2.png";


function About() {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className='aboutcontainer'>
                <div className='sidebar'>
                    <div className='sidecontainer'>
                        <ul>
                            <li>
                                <Link to='/dashboard1'></Link>
                                <button onClick={() => handleButtonClick('/dashboard1')}>Form1</button>
                            </li>
                            <li>
                                <Link to='/dashboard2'></Link>
                                <button onClick={() => handleButtonClick('/dashboard2')}>Form2 </button>
                            </li>
                            <li>
                                <Link to='/dashboard3'></Link>
                                <button onClick={() => handleButtonClick('/dashboard3')}>Form3</button>
                            </li>
                            <li>
                                <Link to='/dashboard4'></Link>
                                <button onClick={() => handleButtonClick('/dashboard4')}>Form4 </button>
                            </li>
                            <li>
                                <Link to='/dashboard5'></Link>
                                <button onClick={() => handleButtonClick('/dashboard5')}>Form5</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rightcontainer'>
                    <div className='header'>
                        <img src={logo2} alt="" />
                        <h1> RIGHT TO PUBLIC SERVICES ACT - YOUR SERVICE IS OUR DUTY</h1>
                    </div>
                    <div id='abcontainer'>
                        <div className='aboutsec'>
                            <h2>Maharashtra State Commission For Right To Services</h2>
                            <p>
                                The Maharashtra Right to Public Service Act, 2015 is a revolutionary Act.
                                This Act provides that the citizens shall be provided services by the State Government in a transparent, efficient, and time-bound manner.
                                In order to ensure effective implementation of this Act, the Maharashtra State Commission for Right to Services has been established.
                                On 1st March 2017, former Chief Secretary of Maharashtra State, Shri Swadheen Kshatriya was appointed as the First State Chief Commissioner for Right to Services.
                                After completing his tenure, he retired on 25.01.2022.
                                Then Shri Dilip Shinde, who was appointed as Commissioner, Right to Services, Pune, held additional charge of the post of the Chief Commissioner, Right to Services, Maharashtra State from 25.01.2022 to 03.05.2023.
                                Now from 04.05.2023, Ex. Chief Secretary of Maharashtra, Shri Manu Kumar Srivastava has taken over charge as the Chief Commissioner, Right to Services, Maharashtra State.
                            </p>
                            <p>
                                Citizens can get complete information regarding which services are available under this Act by accessing either the mobile app ‘RTS Maharashtra’ or ‘Aaple Sarkar Web Portal’.
                                Citizens can even apply online for availing these services.
                                In case of delay in providing the services or denial of the services without adequate justification, citizens can file first and second Appeal with senior officers within the department and third and final Appeal can be filed before the Commission.
                            </p>
                        </div>
                        <div className='headofficer'>
                            <div className='details'>
                                <div>
                                    <img src={officer} alt="" />
                                </div>
                                <div>
                                    <h3>Shri Manu kumar Srivastav,</h3>
                                    <h3>I.A.S. (Retd.)</h3>
                                    <h4>Chief Commissioner</h4>
                                    <h4>Maharashtra State Commission for Right to Services</h4>

                                </div>

                            </div>


                        </div>

                    </div>





                </div>

            </div>

        </div>
    );
}

export default About;
