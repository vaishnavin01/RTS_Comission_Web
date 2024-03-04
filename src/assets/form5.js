import React, { useState } from 'react';

import logo2 from "../Images/logo2.png";

import './form1.css';
import axios from 'axios';


function Form5() {
  const [user, setUser] = useState({
    Department: "",
    Reportperiod: "",
    Tnotified_services: null,
    NotifiedServices: null,
    second_Appeal_pending: "",
    second_appeal_received: "",
    offline_second_appeal: "",
    numbr_of_appeals: "",
    second_appeal_disposed_within: "",
    second_appeal_disposed_after: "",
    second_appeal_pending_end: "",
    head_of_department: "",
    place: "",
    Date: ""
  });
  const [invalidInputs, setInvalidInputs] = useState({});
  const handleChange = (e) => {
    const { name, type, value, id } = e.target;
    console.log('Event:', e);
    console.log('Name:', name);
    console.log('Type:', type);
    console.log('Value:', value);
    console.log('ID:', id);
    setInvalidInputs({ ...invalidInputs, [name]: "" });

    let inputValue;

    if (type === 'file') {

      inputValue = e.target.files[0];
    } else if (type === 'date') {

      inputValue = value;
    } else {

      inputValue = value;
    }

    setUser({
      ...user,
      [name]: inputValue,
    });
    if (type === 'tel') {
      const isValidPhoneNumber = /^[0-9]{10}$/.test(value);
      if (!isValidPhoneNumber) {
        setInvalidInputs({ ...invalidInputs, [name]: 'Please enter a valid 10-digit phone number.' });
        return;
      }
    }
    if (type === 'email' && e.type === 'blur') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValidEmail) {
        setInvalidInputs({ ...invalidInputs, [name]: 'Please enter a valid email address.' });
        return;
      }
    }
    if (type === 'text') {
      const containsNumbers = /\d/.test(value);
      if (containsNumbers) {
        setInvalidInputs({ ...invalidInputs, [name]: 'Please enter a valid text without numbers.' });
        return;
      }
    }
    if (type === 'number') {
      const isValidNumber = /^\d+$/.test(value);
      if (!isValidNumber) {
        setInvalidInputs({ ...invalidInputs, [name]: 'Please enter a valid number.' });
        return;
      }
    }
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    const {
      Department,
      Reportperiod,
      second_Appeal_pending,
      second_appeal_received,
      offline_second_appeal,
      numbr_of_appeals,
      second_appeal_disposed_within,
      second_appeal_disposed_after,
      second_appeal_pending_end,
      head_of_department,
      place,
      Date,
    } = user;
    const formData = new FormData();
    formData.append('Department', Department);
    formData.append('Reportperiod', Reportperiod);
    formData.append('second_Appeal_pending', second_Appeal_pending);
    formData.append('second_appeal_received', second_appeal_received,);
    formData.append('offline_second_appeal', offline_second_appeal);
    formData.append('numbr_of_appeals', numbr_of_appeals);
    formData.append('second_appeal_disposed_within', second_appeal_disposed_within);
    formData.append('second_appeal_disposed_after', second_appeal_disposed_after);
    formData.append('second_appeal_pending_end', second_appeal_pending_end);
    formData.append('head_of_department', head_of_department);
    formData.append('place', place);
    formData.append('Date', Date);

    const Tnotified_services = document.getElementById('Tnotified_services');
    formData.append('Tnotified_services', Tnotified_services.files[0]);
    const NotifiedServices = document.getElementById('NotifiedServices');
    formData.append('NotifiedServices', NotifiedServices.files[0]);





    const hasInvalidInputs = Object.values(invalidInputs).some(input => input !== "");
    if (hasInvalidInputs) {
      alert('Invalid data. Please correct the highlighted fields.');
      return;
    }


    try {
      const result = await axios.post('http://localhost:9002/form5', formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(result);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  function loginhandle(e) {
    e.preventDefault();
    console.log('Form Data:', user);
    alert("success");



  }
  return (
    <div className="formcontainer">
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
      <div className="formbox">
        <form onSubmit={loginhandle} encType="multipart/form-data">
          {console.log("user", user)}
          <h2>Maharashtra State Service Rights Commission Office Information Questionnarie</h2>
          <div className='formele'>
            <div>
              <label htmlFor="Department">Name of Department / Undertaking / Authority </label><br />

              <input type="text" id='Department' name='Department' value={user.Department} placeholder='Enter  office Name' onChange={handleChange} className={invalidInputs["Department"] ? 'invalid-input' : ''} />
              {invalidInputs["Department"] && <span className="error-message">{invalidInputs["Department"]}</span>}

            </div>
            <div>
              <label htmlFor="Reportperiod">Reporting Period (Monthly Reporting) </label><br />

              <input type="date" id='Reportperiod' name='Reportperiod' accept=".pdf" value={user.Reportperiod} placeholder='Enter  Date' onChange={handleChange} />


            </div>
            <div>
              <label htmlFor="Tnotified_services">Total number of services notified under Public Service Rights Act</label><br />

              <input type="file" id='Tnotified_services' name='Tnotified_services' accept=".pdf" placeholder=' upload file' onChange={handleChange} />



            </div>
            <div>
              <br />
              <label htmlFor="NotifiedServices"> notified service</label> <br />

              <input type="file" id='NotifiedServices' name='NotifiedServices' placeholder="Upload File" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="second_Appeal_pending">Number of second appeals pending till March 2023</label><br />

              <input type="number" id='second_Appeal_pending' name='second_Appeal_pending' value={user.second_Appeal_pending} placeholder=' Enter  number' onChange={handleChange} className={invalidInputs["second_Appeal_pending"] ? 'invalid-input' : ''} />
              {invalidInputs["second_Appeal_pending"] && <span className="error-message">{invalidInputs["second_Appeal_pending"]}</span>}


            </div>
            <div>
              <label htmlFor="second_appeal_received">Number of second appeals received during the reporting month

              </label><br />

              <input type="number" id='second_appeal_received' name='second_appeal_received' value={user.second_appeal_received} placeholder=' Enter  number' onChange={handleChange} className={invalidInputs["second_appeal_received"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_received"] && <span className="error-message">{invalidInputs["second_appeal_received"]}</span>}


            </div>
            <div>
              <label htmlFor="offline_second_appeal">Number of offline second appeals received</label> <br />
              <input type="number" id='offline_second_appeal' name='offline_second_appeal' value={user.offline_second_appeal} placeholder="Enter No" onChange={handleChange} className={invalidInputs["offline_second_appeal"] ? 'invalid-input' : ''} />
              {invalidInputs["offline_second_appeal"] && <span className="error-message">{invalidInputs["offline_second_appeal"]}</span>}
            </div>
            <div>
              <label htmlFor="numbr_of_appeals" >Number of Appeals</label> <br />
              <input type="number" id='numbr_of_appeals' name='numbr_of_appeals' value={user.numbr_of_appeals} placeholder="Enter No" onChange={handleChange} className={invalidInputs["numbr_of_appeals"] ? 'invalid-input' : ''} />
              {invalidInputs["numbr_of_appeals"] && <span className="error-message">{invalidInputs["numbr_of_appeals"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appeal_disposed_within">Number of second appeals disposed of within the prescribed period</label> <br />
              <input type="number" id='second_appeal_disposed_within' name='second_appeal_disposed_within' value={user.second_appeal_disposed_within} placeholder="Enter No" onChange={handleChange} className={invalidInputs["second_appeal_disposed_within"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_disposed_within"] && <span className="error-message">{invalidInputs["second_appeal_disposed_within"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appeal_disposed_after">Number of second appeals disposed of after prescribed period</label> <br />
              <input type="number" id='second_appeal_disposed_after' name='second_appeal_disposed_after' value={user.second_appeal_disposed_after} placeholder="Enter No" onChange={handleChange} className={invalidInputs["second_appeal_disposed_after"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_disposed_after"] && <span className="error-message">{invalidInputs["second_appeal_disposed_after"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appeal_pending_end">Number of second appeals pending at the end of the reporting month</label> <br />
              <input type="number" id='second_appeal_pending_end' name='second_appeal_pending_end' value={user.second_appeal_pending_end} placeholder="Enter No" onChange={handleChange} className={invalidInputs["second_appeal_pending_end"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_pending_end"] && <span className="error-message">{invalidInputs["second_appeal_pending_end"]}</span>}
            </div>
            <div>
              <label htmlFor="head_of_department">Head of Department (Concerned Department)</label> <br />
              <input type="text" id='head_of_department' name='head_of_department' value={user.head_of_department} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["head_of_department"] ? 'invalid-input' : ''} />
              {invalidInputs["head_of_department"] && <span className="error-message">{invalidInputs["head_of_department"]}</span>}
            </div>

            <div>
              <label htmlFor="place">Place</label> <br />
              <input type="text" id='place' name='place' value={user.place} placeholder="Enter Place" onChange={handleChange} className={invalidInputs["place"] ? 'invalid-input' : ''} />
              {invalidInputs["place"] && <span className="error-message">{invalidInputs["place"]}</span>}
            </div>
            <div>
              <label htmlFor="Date">Date </label><br />
              <input type="date" id='Date' name='Date' value={user.Date} placeholder='Enter Date' onChange={handleChange} />
            </div>
            <div>
              <button type='submit' onClick={SubmitForm} id="formsubmit">Submit</button>
            </div>


          </div>
        </form>

      </div>

    </div>
  );
}
export default Form5;
