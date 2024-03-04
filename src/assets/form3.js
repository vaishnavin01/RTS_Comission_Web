import React, { useState } from 'react';

import logo2 from "../Images/logo2.png";

import './form1.css';
import axios from 'axios';


function Form3() {
  const [user, setUser] = useState({
    Department: "",
    Reportperiod: "",
    Tnotified_services: "",
    name_of_NotifiedService: null,
    timelimit: null,
    pending_Applicatin: "",
    offline_applicationReceived: "",
    offlineapplicationReceived_April_2022: "",
    total_application: "",
    application_served_during: "",
    application_served_after: "",
    application_pending_during: "",
    application_pending_after: "",
    rejected_applications_withreason: "",
    rejected_applications_withoutreason: "",
    Designatin_name: "",
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


  function loginhandle(e) {
    e.preventDefault();
    console.log('Form Data:', user);
    alert("success");
  }

  const SubmitForm = async () => {
    const { Department,
      Reportperiod,
      Tnotified_services,


      pending_Applicatin,
      offline_applicationReceived,
      offlineapplicationReceived_April_2022,
      total_application,
      application_served_during,
      application_served_after,
      application_pending_during,
      application_pending_after,
      rejected_applications_withreason,
      rejected_applications_withoutreason,
      Designatin_name,
      place,
      Date
    } = user;


    const formData = new FormData();
    formData.append("Department", Department);
    formData.append('Reportperiod', Reportperiod);
    formData.append('Tnotified_services', Tnotified_services);


    formData.append('pending_Applicatin', pending_Applicatin);
    formData.append('offline_applicationReceived', offline_applicationReceived);
    formData.append('offlineapplicationReceived_April_2022', offlineapplicationReceived_April_2022);
    formData.append('total_application', total_application);
    formData.append('application_served_during', application_served_during);
    formData.append('application_served_after', application_served_after);
    formData.append('application_pending_during', application_pending_during);
    formData.append('application_pending_after', application_pending_after);
    formData.append('rejected_applications_withreason', rejected_applications_withreason);
    formData.append('rejected_applications_withoutreason', rejected_applications_withoutreason);
    formData.append('Designatin_name', Designatin_name);
    formData.append('place', place);
    formData.append('Date', Date);
    const name_of_NotifiedService = document.getElementById('name_of_NotifiedService');
    formData.append('name_of_NotifiedService', name_of_NotifiedService.files[0]);
    const timelimit = document.getElementById('timelimit');
    formData.append('timelimit', timelimit.files[0]);


    const hasEmptyField = Array.from(formData.values()).some((value) => !value);
    if (hasEmptyField) {
      alert('Invalid data. Please fill in all required fields.');
      return;
    }
    try {
      const result = await axios.post('http://localhost:9002/form3', formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(result);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log('Error Response:', error.response);
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
          <h2>Maharashtra State Service Rights Commission Office Information Questionnarie</h2>
          <div className='formele'>
            <div>
              <label htmlFor="Department">Name of Department / Undertaking / Authority </label><br />
              <input type="text" name='Department' id='Department' value={user.Department} placeholder='Enter  office Name' onChange={handleChange} className={invalidInputs["Department"] ? 'invalid-input' : ''} />
              {invalidInputs["Department"] && <span className="error-message">{invalidInputs["Department"]}</span>}
            </div>
            <div>
              <label htmlFor="Reportperiod">Reporting Period (Monthly Reporting) </label><br />
              <input type="date" id='Reportperiod' name='Reportperiod' value={user.Reportperiod} placeholder='Enter  Date' onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="Tnotified_services">Total number of services notified under Public Service Rights Act</label><br />

              <input type="number" id='Tnotified_services' name='Tnotified_services' value={user.Tnotified_services} placeholder=' Enter  number' onChange={handleChange} className={invalidInputs["Tnotified_services"] ? 'invalid-input' : ''} />
              {invalidInputs["Tnotified_services"] && <span className="error-message">{invalidInputs["Tnotified_services"]}</span>}
            </div>
            <div>
              <br />
              <label htmlFor="name_of_NotifiedService">Name of notified service</label> <br />

              <input type="file" id='name_of_NotifiedService' name='name_of_NotifiedService' accept='.pdf' placeholder="Upload File" onChange={handleChange} />
            </div>
            <div>
              <br />
              <label htmlFor="timelimit"> Time limit of notified service</label> <br />

              <input type="file" id='timelimit' name='timelimit' placeholder="Upload File" accept='.pdf' onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="pending_Applicatin">Number of applications pending as on March 2021</label><br />

              <input type="number" id='pending_Applicatin' name='pending_Applicatin' value={user.pending_Applicatin} placeholder=' Enter  number' onChange={handleChange} className={invalidInputs["pending_Applicatin"] ? 'invalid-input' : ''} />
              {invalidInputs["pending_Applicatin"] && <span className="error-message">{invalidInputs["pending_Applicatin"]}</span>}


            </div>
            <div>
              <label htmlFor="offline_applicationReceived">Number of offline application received(Number of applications received during the reporting month)</label><br />

              <input type="number" id='offline_applicationReceived' name='offline_applicationReceived' value={user.offline_applicationReceived} placeholder=' Enter  number' onChange={handleChange} className={invalidInputs["offline_applicationReceived"] ? 'invalid-input' : ''} />
              {invalidInputs["offline_applicationReceived"] && <span className="error-message">{invalidInputs["offline_applicationReceived"]}</span>}


            </div>
            <div>
              <label htmlFor="offlineapplicationReceived_April_2022"> Number of offline application received(Total number of applications from 01 April 2022 to the end of the reporting month)</label> <br />
              <input type="number" id='offlineapplicationReceived_April_2022' name='offlineapplicationReceived_April_2022' value={user.offlineapplicationReceived_April_2022} placeholder="Enter No" onChange={handleChange} className={invalidInputs["offlineapplicationReceived_April_2022"] ? 'invalid-input' : ''} />
              {invalidInputs["offlineapplicationReceived_April_2022"] && <span className="error-message">{invalidInputs["offlineapplicationReceived_April_2022"]}</span>}
            </div>
            <div>
              <label htmlFor="total_application"> Total number of applications</label> <br />
              <input type="number" id='total_application' name='total_application' value={user.total_application} placeholder="Enter No" onChange={handleChange} className={invalidInputs["total_application"] ? 'invalid-input' : ''} />
              {invalidInputs["total_application"] && <span className="error-message">{invalidInputs["total_application"]}</span>}
            </div>
            <div>
              <label htmlFor="application_served_during">Number of applications served during the prescribed period</label> <br />
              <input type="number" name='application_served_during' id='application_served_during' value={user.application_served_during} placeholder="Enter No" onChange={handleChange} className={invalidInputs["application_served_during"] ? 'invalid-input' : ''} />
              {invalidInputs["application_served_during"] && <span className="error-message">{invalidInputs["application_served_during"]}</span>}
            </div>
            <div>
              <label htmlFor="application_served_after">Number of applications served after the prescribed period</label> <br />
              <input type="number" id='application_served_after' name='application_served_after' value={user.application_served_after} placeholder="Enter No" onChange={handleChange} className={invalidInputs["application_served_after"] ? 'invalid-input' : ''} />
              {invalidInputs["application_served_after"] && <span className="error-message">{invalidInputs["application_served_after"]}</span>}
            </div>
            <div>
              <label htmlFor="application_pending_during">Number of applications pending during the prescribed period</label> <br />
              <input type="number" name='application_pending_during' id='application_pending_during' value={user.application_pending_during} placeholder="Enter No" onChange={handleChange} className={invalidInputs["application_pending_during"] ? 'invalid-input' : ''} />
              {invalidInputs["application_pending_during"] && <span className="error-message">{invalidInputs["application_pending_during"]}</span>}
            </div>
            <div>
              <label htmlFor="application_pending_after">Number of applications pending after the prescribed period </label> <br />
              <input type="number" name='application_pending_after' id='application_pending_after' value={user.application_pending_after} placeholder="Enter No" onChange={handleChange} className={invalidInputs["application_pending_after"] ? 'invalid-input' : ''} />
              {invalidInputs["application_pending_after"] && <span className="error-message">{invalidInputs["application_pending_after"]}</span>}
            </div>
            <div>
              <label htmlFor="rejected_applications_withreason">Number of rejected applications(Number of rejected applications with reason)</label> <br />
              <input type="number" id='rejected_applications_withreason' name='rejected_applications_withreason' value={user.rejected_applications_withreason} placeholder="Enter No" onChange={handleChange} className={invalidInputs["rejected_applications_withreason"] ? 'invalid-input' : ''} />
              {invalidInputs["rejected_applications_withreason"] && <span className="error-message">{invalidInputs["rejected_applications_withreason"]}</span>}
            </div>

            <div>
              <label htmlFor="rejected_applications_withoutreason">Number of rejected applications(Number of applications rejected without mentioning reason)</label> <br />
              <input type="number" name='rejected_applications_withoutreason' id='rejected_applications_withoutreason' value={user.rejected_applications_withoutreason} placeholder="Enter No" onChange={handleChange} className={invalidInputs["rejected_applications_withoutreason"] ? 'invalid-input' : ''} />
              {invalidInputs["rejected_applications_withoutreason"] && <span className="error-message">{invalidInputs["rejected_applications_withoutreason"]}</span>}
            </div>
            <div>
              <label htmlFor="Designatin_name">Name and Designation (Head of Department concerned Department) </label> <br />
              <input type="text" id='Designatin_name' name='Designatin_name' value={user.Designatin_name} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["Designatin_name"] ? 'invalid-input' : ''} />
              {invalidInputs["Designatin_name"] && <span className="error-message">{invalidInputs["Designatin_name"]}</span>}
            </div>
            <div>
              <label htmlFor="place">Place </label> <br />
              <input type="text" name="place" id='place' value={user.place} placeholder="Enter Place" onChange={handleChange} className={invalidInputs["place"] ? 'invalid-input' : ''} />
              {invalidInputs["place"] && <span className="error-message">{invalidInputs["place"]}</span>}
            </div>
            <div>
              <label htmlFor="Date">Date </label><br />
              <input type="date" id='Date' name='Date' value={user.Date} placeholder='Enter Date' onChange={handleChange} />

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

export default Form3;
