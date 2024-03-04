import React from 'react';
import axios from 'axios';
import './contact.css';

import logo2 from "../Images/logo2.png";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";



function Contact() {
    return (
        <div>
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
            <div className='contactcontainer'>
                <div className='addresscontainer'>
                    <div className='addressbox'>

                        <div className='addresstag'>

                            <i className="fa-solid fa-house"></i>

                            <h2>Office Address of the Commission</h2>
                        </div>
                        <div>
                            <p>Maharashtra State Commission for Right to Services</p>
                            <p>7th Floor, New Administrative Building, Hutatma Rajguru Chowk, Madam Cama</p>
                            <p>Road, Opposite Mantralaya, Mumbai 400032.</p>
                        </div>

                    </div>
                    <div className='contactnumbox'>
                        <h2 className='addresstag'>Contact Details</h2>
                        <div className='addresstag'>
                            <i className="fa-solid fa-phone"></i>
                            <h3> Telephone No : 022-22832346, 022-22022347</h3>

                        </div>
                        <br />
                        <div className='addresstag'>
                            <i className="fa-solid fa-envelope"></i>
                            <h3>ccrts[at]maharashtra[dot]gov[dot]in</h3>

                        </div>
                        <br />
                        <div className='addresstag'>
                            <i className="fa-solid fa-user"></i>
                            <h3>Deputy Secretory of the Commission: Smt. Vaishali Chavan (Nirdhar)</h3>
                        </div>
                    </div>
                </div>
                <div id='header1'>
                    <h1>STATE DIVISIONAL COMMISSIONERS FOR RIGHT TO SERVICE</h1>
                </div>

                <div className='officerinfo'>


                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2>AURANGABAD DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img1} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name :  Dr. Kiran Jadhav, I.P.S.(Retd.)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation :  State Commissioner for Right to Services, Aurangabad Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>

                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address : State Commissioner for Right to Services, Kanakkunj Building 2nd Floor, Jubilee Park to GTS Road, Aurangabad.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4> E-Mail:  crtsaurangabad[at]maharashtra[dot]gov[dot]in</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2> KONKAN DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img5} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name :  Shri Baldev Singh, I.A.S.(Retd.)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation : State Commissioner for Right to Services, Konkan Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address :  Konkan Bhavan (Extension Building), 7th Floor, Room No 727, CBD Belapur, Navi Mumbai 400614.</h4>

                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4> E-Mail: crts[dot]konkan[at]maharashtra[dot]gov[dot]in</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2> NAGPUR DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img6} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name : Shri Abhay Yawalkar, I.A.S.(Retd.)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation : State Commissioner for Right to Services, Nagpur Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address : Old Secretariat Building, Samaj Kalyan Office road, civil lines, Nagpur 440001</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4>E-Mail: crtsnagpur[at]maharashtra[dot]gov[dot]in</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2> NASHIK DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img2} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name : Smt. Chitra Kulkarni (Retd. Additional Commissioner State GST)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation : State Commissioner for Right to Services, Nashik Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address : Sinhgad, Government rest house, Chandak circle, Nashik 422002.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4> E-Mail: rtsc[dot]nashik[at]gmail[dot]com</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2> AMRAVATI DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img4} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name : Dr. Narukulla Rambabu, I.F.S.(Retd.)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation : State Commissioner for Right to Services, Amravati Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address :Urdhwa Wardha Project Colony Road, Amravati Camp, Amravati 444 602.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4> E-Mail: crtsamravati[at]maharashtra[dot]gov[dot]in</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className='cardcomponent'>
                        <div className="innercard">
                            <h2>PUNE DIVISION</h2>
                            <div className="card">
                                <div className='imgbox'>

                                    <img src={img3} alt="" />
                                </div>

                                <div className='detailinfo'>
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-user"></i>
                                        <h4>Name :  Shri Dilip Shinde, I.A.S. (Retd.)</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-star"></i>
                                        <h4>Designation : State Commissioner for Right to Services, Pune Revenue Division.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-house"></i>
                                        <h4>Address : 3rd Floor, Gholeroad-Shivajinagar Regional Office, Pune Municipal Corporation, Shivajinagar, Pune - 411 005.</h4>
                                    </div>
                                    <br />
                                    <div className='addresstag1'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <h4>E-Mail:crtspune[at]maharashtra[dot]gov[dot]in</h4>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact;
