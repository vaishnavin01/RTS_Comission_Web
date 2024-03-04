import React, { useState } from 'react';

import logo2 from "../Images/logo2.png";

import './form1.css';
import axios from 'axios'




function Form4() {
  const [user, setUser] = useState({
    department: " ",
    reportperiod: " ",
    tnotifiedservices: " ",
    nameofnotifiedservices: " ",
    firstappealpending: " ",
    offlineapplicationreceived: " ",
    offlinefirstappealapplication: " ",
    firstoverallnumapplication: " ",
    firstappealdisposedwithin: " ",
    firstappealdisposedafter: " ",
    firstappealpendingend: "",
    headofdepartment: " ",
    place: " ",
    date: " "
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
  const loginhandle = (e) => {
    e.preventDefault();
    console.log('Form Data:', user);
    alert("success");
  };
  const SubmitForm = async () => {
    const { department, reportperiod, tnotifiedservices, firstappealpending, offlineapplicationreceived, offlinefirstappealapplication,
      firstoverallnumapplication, firstappealdisposedwithin, firstappealdisposedafter, firstappealpendingend, headofdepartment, place, date } = user;

    const formData = new FormData();
    formData.append('department', department);
    formData.append('reportperiod', reportperiod);
    formData.append('tnotifiedservices', tnotifiedservices);
    formData.append('firstappealpending', firstappealpending);
    formData.append('offlineapplicationreceived', offlineapplicationreceived);
    formData.append('offlinefirstappealapplication', offlinefirstappealapplication);
    formData.append('firstoverallnumapplication', firstoverallnumapplication);
    formData.append('firstappealdisposedwithin', firstappealdisposedwithin);
    formData.append('firstappealdisposedafter', firstappealdisposedafter);
    formData.append('firstappealpendingend', firstappealpendingend);
    formData.append('headofdepartment', headofdepartment);
    formData.append('place', place);
    formData.append('date', date);
    // Append file to FormData
    const nameofnotifiedservices = document.getElementById('nameofnotifiedservices');
    formData.append('nameofnotifiedservices', nameofnotifiedservices.files[0]);

    const hasEmptyField = Array.from(formData.values()).some((value) => !value);

    if (hasEmptyField) {
      alert('Invalid data. Please fill in all required fields.');
      return;
    }

    // Send the data to the server
    try {
      const result = await axios.post('http://localhost:9002/form4', formData, {
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
          <h2>Maharashtra State Service Rights Commission Office Information Questionnaire</h2>
          <div className='formele'>
            <div>
              <label htmlFor="department">Name of Department / Undertaking / Authority </label><br />
              <input type="text" id='department' name='department' value={user.department} placeholder='Enter office Name' onChange={handleChange} className={invalidInputs["department"] ? 'invalid-input' : ''} />
              {invalidInputs["department"] && <span className="error-message">{invalidInputs["department"]}</span>}
            </div>
            <div>
              <label htmlFor="reportperiod">Reporting Period (Monthly Reporting) </label><br />
              <input type="date" id='reportperiod' name='reportperiod' value={user.reportperiod} placeholder='Enter Date' onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="tnotifiedservices">Total number of services notified under Public Service Rights Act</label><br />
              <input type="number" id='tnotifiedservices' name='tnotifiedservices' value={user.tnotifiedservices} placeholder='Enter number' onChange={handleChange} className={invalidInputs["tnotifiedservices"] ? 'invalid-input' : ''} />
              {invalidInputs["tnotifiedservices"] && <span className="error-message">{invalidInputs["tnotifiedservices"]}</span>}
            </div>

            <div>
              <br />
              <label htmlFor="nameofnotifiedservices">Name of notified service</label> <br />
              <input type="file" id='nameofnotifiedservices' name='nameofnotifiedservices' accept='.pdf' placeholder="Upload File" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="firstappealpending">Number of first appeals pending till March 2022</label><br />
              <input type="number" id='firstappealpending' name='firstappealpending' value={user.firstappealpending} placeholder='Enter number' onChange={handleChange} className={invalidInputs["firstappealpending"] ? 'invalid-input' : ''} />
              {invalidInputs["firstappealpending"] && <span className="error-message">{invalidInputs["firstappealpending"]}</span>}
            </div>
            <div>
              <label htmlFor="offlineapplicationreceived">Number of offline application received(Number of applications received during the reporting month)</label><br />
              <input type="number" id='offlineapplicationreceived' name='offlineapplicationreceived' value={user.offlineapplicationreceived} placeholder='Enter number' onChange={handleChange} className={invalidInputs["offlineapplicationreceived"] ? 'invalid-input' : ''} />
              {invalidInputs["offlineapplicationreceived"] && <span className="error-message">{invalidInputs["offlineapplicationreceived"]}</span>}
            </div>
            <div>
              <label htmlFor="offlinefirstappealapplication">Number of offline first appeal applications received</label> <br />
              <input type="number" id='offlinefirstappealapplication' name='offlinefirstappealapplication' value={user.offlinefirstappealapplication} placeholder="Enter No" onChange={handleChange} className={invalidInputs["offlinefirstappealapplication"] ? 'invalid-input' : ''} />
              {invalidInputs["offlinefirstappealapplication"] && <span className="error-message">{invalidInputs["offlinefirstappealapplication"]}</span>}
            </div>
            <div>
              <label htmlFor="firstoverallnumapplication">First overall number of applications</label> <br />
              <input type="number" id='firstoverallnumapplication' name='firstoverallnumapplication' value={user.firstoverallnumapplication} placeholder="Enter No" onChange={handleChange} className={invalidInputs["firstoverallnumapplication"] ? 'invalid-input' : ''} />
              {invalidInputs["firstoverallnumapplication"] && <span className="error-message">{invalidInputs["firstoverallnumapplication"]}</span>}
            </div>
            <div>
              <label htmlFor="firstappealdisposedwithin">Number of first appeals disposed of within the prescribed period</label> <br />
              <input type="number" id='firstappealdisposedwithin' name='firstappealdisposedwithin' value={user.firstappealdisposedwithin} placeholder="Enter No" onChange={handleChange} className={invalidInputs["firstappealdisposedwithin"] ? 'invalid-input' : ''} />
              {invalidInputs["firstappealdisposedwithin"] && <span className="error-message">{invalidInputs["firstappealdisposedwithin"]}</span>}
            </div>
            <div>
              <label htmlFor="firstappealdisposedafter">Number of first appeals disposed of after prescribed period</label> <br />
              <input type="number" id='firstappealdisposedafter' name='firstappealdisposedafter' value={user.firstappealdisposedafter} placeholder="Enter No" onChange={handleChange} className={invalidInputs["firstappealdisposedafter"] ? 'invalid-input' : ''} />
              {invalidInputs["firstappealdisposedafter"] && <span className="error-message">{invalidInputs["firstappealdisposedafter"]}</span>}
            </div>
            <div>
              <label htmlFor="firstappealpendingend">Number of first appeals pending at the end of the prescribed reporting month</label> <br />
              <input type="number" id='firstappealpendingend' name='firstappealpendingend' value={user.firstappealpendingend} placeholder="Enter No" onChange={handleChange} className={invalidInputs["firstappealpendingend"] ? 'invalid-input' : ''} />
              {invalidInputs["firstappealpendingend"] && <span className="error-message">{invalidInputs["firstappealpendingend"]}</span>}
            </div>
            <div>
              <label htmlFor="headofdepartment">Head of Department (Concerned Department)</label> <br />
              <input type="text" id='headofdepartment' name='headofdepartment' value={user.headofdepartment} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["headofdepartment"] ? 'invalid-input' : ''} />
              {invalidInputs["headofdepartment"] && <span className="error-message">{invalidInputs["headofdepartment"]}</span>}
            </div>
            <div>
              <label htmlFor="place">Place</label> <br />
              <input type="text" id='place' name='place' value={user.place} placeholder="Enter Place" onChange={handleChange} className={invalidInputs["place"] ? 'invalid-input' : ''} />
              {invalidInputs["place"] && <span className="error-message">{invalidInputs["place"]}</span>}
            </div>
            <div>
              <label htmlFor="date">Date </label><br />
              <input type="date" id='date' name='date' value={user.date} placeholder='Enter Date' onChange={handleChange} />
            </div>
            <div>
              <button id="formsubmit" onClick={SubmitForm}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Form4
