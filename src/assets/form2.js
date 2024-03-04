//form2 frontend

import React from 'react';
import { useState, useEffect } from 'react';
import './form1.css';
import logo2 from "../Images/logo2.png";
import axios from 'axios';

function Form2() {
  const [user, setUser] = useState({
    office_details: "",
    District: "",
    Taluka: "",
    Email: "",
    Phone_number: "",
    Administritive_Department: "",
    Designated_officer: "",
    designation_of_officer: "",
    Designated_officer_No: "",
    services_render_UnderAct: null,
    T_services_by_Dofficers: "",
    T_notified_services: "",
    notified_services_online: "",
    notified_services_offline: "",
    no_non_notified_service: null,
    D_officer_receive_UId: "",
    UId_details: "",
    avail_necessary_facilities: "",
    upload_personal_details: "",
    necessary_technical_support: "",
    necessary_details_on_board: "",
    Acknowlwdgement_given: "",
    maintain_regiser_form4: "",
    registr_monthly_sertified_or_not: "",
    offline_application_info_revised: "",
    officer_undergone_legal_training: "",
    efforts_details: "",
    innovative_intiative_taken: "",
  })
  const [invalidInputs, setInvalidInputs] = useState({});
  const [talukas, setTalukas] = useState([]);
  useEffect(() => {
    if (user.District) {
      axios.get(`http://localhost:9002/getTalukas?district=${user.District}`)
        .then(response => {
          setTalukas(response.data);
        })
        .catch(error => {
          console.error("Error fetching Talukas:", error);
        });
    }
  }, [user.District]);

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




  const SubmitForm = async (e) => {
    const {
      office_details,
      District,
      Taluka,
      Email,
      Phone_number,
      Administritive_Department,
      Designated_officer,
      designation_of_officer,
      Designated_officer_No,
      T_services_by_Dofficers,
      T_notified_services,
      notified_services_online,
      notified_services_offline,
      D_officer_receive_UId,
      UId_details,
      avail_necessary_facilities,
      upload_personal_details,
      necessary_technical_support,
      necessary_details_on_board,
      Acknowlwdgement_given,
      maintain_regiser_form4,
      registr_monthly_sertified_or_not,
      offline_application_info_revised,
      officer_undergone_legal_training,
      efforts_details,
      innovative_intiative_taken,


    } = user;


    const formData = new FormData();
    formData.append('office_details', office_details);
    formData.append('District', District);
    formData.append('Taluka', Taluka);
    formData.append('Email', Email);
    formData.append('Phone_number', Phone_number);
    formData.append('Administritive_Department', Administritive_Department);
    formData.append('Designated_officer', Designated_officer);
    formData.append('designation_of_officer', designation_of_officer);
    formData.append('Designated_officer_No', Designated_officer_No);
    formData.append('T_services_by_Dofficers', T_services_by_Dofficers);
    formData.append('T_notified_services', T_notified_services);
    formData.append('notified_services_online', notified_services_online);
    formData.append('notified_services_offline', notified_services_offline);
    formData.append('D_officer_receive_UId', D_officer_receive_UId);
    formData.append('UId_details', UId_details);
    formData.append('avail_necessary_facilities', avail_necessary_facilities);
    formData.append('upload_personal_details', upload_personal_details);
    formData.append('necessary_technical_support', necessary_technical_support);
    formData.append('necessary_details_on_board', necessary_details_on_board);
    formData.append('Acknowlwdgement_given', Acknowlwdgement_given);
    formData.append('maintain_regiser_form4', maintain_regiser_form4);
    formData.append('registr_monthly_sertified_or_not', registr_monthly_sertified_or_not);
    formData.append('offline_application_info_revised', offline_application_info_revised);
    formData.append('officer_undergone_legal_training', officer_undergone_legal_training);
    formData.append('efforts_details', efforts_details);
    formData.append(' innovative_intiative_taken', innovative_intiative_taken);
    const services_render_UnderAct = document.getElementById('services_render_UnderAct');
    formData.append('services_render_UnderAct', services_render_UnderAct.files[0]);


    const no_non_notified_service = document.getElementById('no_non_notified_service');
    formData.append('no_non_notified_service', no_non_notified_service.files[0]);

    const hasEmptyField = Array.from(formData.values()).some((value) => !value);

    if (hasEmptyField) {
      alert('Invalid data. Please fill in all required fields.');
      return;
    }


    try {
      const result = await axios.post('http://localhost:9002/form2', formData, {
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
      <div className="formbox" >
        <form onSubmit={loginhandle} encType="multipart/form-data">
          {console.log("user", user)}
          <h2>Service Commission - Designated Officer's Office Information Questionnaire</h2>
          <div className='formele' >
            <div>
              <label htmlFor="office_details">Office Details</label><br />
              <input type="text" id='office_details' name='office_details' value={user.office_details} placeholder='Enter  office Name' onChange={handleChange} className={invalidInputs["office_details"] ? 'invalid-input' : ''} />
              {invalidInputs["office_details"] && <span className="error-message">{invalidInputs["office_details"]}</span>}
            </div>
            <div>
              <label htmlFor="District">District Name</label><br />
              <select name="District" id="District" value={user.District} onChange={handleChange}>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Akola">Akola</option>
                <option value="Amravati">Amravati</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Beed">Beed</option>
                <option value="Bhandara">Bhandara</option>
                <option value="Buldhana">Buldhana</option>
                <option value="Chandrapur">Chandrapur</option>
                <option value="Dhule">Dhule</option>
                <option value="Gadchiroli">Gadchiroli</option>
                <option value="Gondia">Gondia</option>
                <option value="Hingoli">Hingoli</option>
                <option value="Jalgaon">Jalgaon</option>
                <option value="Jalna">Jalna</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Latur">Latur</option>
                <option value="Mumbai City">Mumbai City</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Nanded">Nanded</option>
                <option value="Nandurbar">Nandurbar</option>
                <option value="Nashik">Nashik</option>
                <option value="Osmanabad">Osmanabad</option>
                <option value="Palghar">Palghar</option>
                <option value="Parbhani">Parbhani</option>
                <option value="Pune">Pune</option>
                <option value="Raigad">Raigad</option>
                <option value="Ratnagiri">Ratnagiri</option>
                <option value="Sangli">Sangli</option>
                <option value="Satara">Satara</option>
                <option value="Sindhudurg">Sindhudurg</option>
                <option value="Solapur">Solapur</option>
                <option value="Thane">Thane</option>
                <option value="Wardha">Wardha</option>
                <option value="Washim">Washim</option>
                <option value="Yavatmal">Yavatmal</option>

              </select>
            </div>
            <div>
              <label htmlFor="Taluka">Name of Taluka</label><br />
              <select name="Taluka" id="Taluka" value={user.Taluka} onChange={handleChange} disabled={!user.District}>
                {talukas.map(taluka => (
                  <option key={taluka} value={taluka}>{taluka}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="Email"> Enter Email</label><br />
              <input type="email" id='Email' name='Email' value={user.Email} placeholder='Enter Email' onChange={handleChange} onBlur={handleChange} className={invalidInputs["Email"] ? 'invalid-input' : ''} />
              {invalidInputs["Email"] && <span className="error-message">{invalidInputs["Email"]}</span>}
            </div>

            <div>
              <label htmlFor="Phone_number">Phone Numbers</label><br />
              <input type="tel" id='Phone_number' name='Phone_number' value={user.Phone_number} placeholder='Enter phone number' onChange={handleChange} onBlur={handleChange} className={invalidInputs["Phone_number"] ? 'invalid-input' : ''} />
              {invalidInputs["Phone_number"] && <span className="error-message">{invalidInputs["Phone_number"]}</span>}
            </div>
            <div>
              <label htmlFor="Administritive_Department">Administritive Department</label><br />
              <input type="text" id='Administritive_Department' name='Administritive_Department' value={user.Administritive_Department} placeholder='Enter Administritive Department' onChange={handleChange} className={invalidInputs["Administritive_Department"] ? 'invalid-input' : ''} />
              {invalidInputs["Administritive_Department"] && <span className="error-message">{invalidInputs["Administritive_Department"]}</span>}
            </div>

            <div>
              <label htmlFor="Designated_officer"> Name of Designeted officer</label>
              <br />
              <input type="text" id='Designated_officer' name='Designated_officer' value={user.Designated_officer} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["Designated_officer"] ? 'invalid-input' : ''} />
              {invalidInputs["Designated_officer"] && <span className="error-message">{invalidInputs["Designated_officer"]}</span>}
            </div>
            <div>
              <label htmlFor="designation_of_officer">Designation  Designeted  of officer</label>
              <br />
              <input type="text" id='designation_of_officer' name='designation_of_officer' value={user.designation_of_officer} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["designation_of_officer"] ? 'invalid-input' : ''} />
              {invalidInputs["designation_of_officer"] && <span className="error-message">{invalidInputs["designation_of_officer"]}</span>}
            </div>
            <div>
              <label htmlFor="Designated_officer_No">Designation officerrs Number</label>
              <br />
              <input type="number" id='Designated_officer_No' name='Designated_officer_No' value={user.Designated_officer_No} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["Designated_officer_No"] ? 'invalid-input' : ''} />
              {invalidInputs["Designated_officer_No"] && <span className="error-message">{invalidInputs["Designated_officer_No"]}</span>}
            </div>
            <div>
              <br />
              <label htmlFor="services_render_UnderAct">Details of services rendered under the Act by Designated Officers (list to be attached)</label> <br />

              <input type="file" id='services_render_UnderAct' name='services_render_UnderAct' accept='.pdf' placeholder="Upload File" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="T_services_by_Dofficers">Total number of services provided by designated officer </label><br />

              <input type="number" id='T_services_by_Dofficers' name='T_services_by_Dofficers' value={user.T_services_by_Dofficers} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["T_services_by_Dofficers"] ? 'invalid-input' : ''} />
              {invalidInputs["T_services_by_Dofficers"] && <span className="error-message">{invalidInputs["T_services_by_Dofficers"]}</span>}
            </div>
            <div>
              <label htmlFor="T_notified_services">Out of which the total number of notified services</label> <br />
              <input type="number" id='T_notified_services' name='T_notified_services' value={user.T_notified_services} placeholder="Enter No" onChange={handleChange} className={invalidInputs["T_notified_services"] ? 'invalid-input' : ''} />

              {invalidInputs["T_notified_services"] && <span className="error-message">{invalidInputs["T_notified_services"]}</span>}
            </div>
            <div>
              <label htmlFor="notified_services_online">Number of services provided online out of notified services</label> <br />
              <input type="number" id='notified_services_online' name='notified_services_online' value={user.notified_services_online} placeholder="Enter No" onChange={handleChange} className={invalidInputs["notified_services_online"] ? 'invalid-input' : ''} />
              {invalidInputs["notified_services_online"] && <span className="error-message">{invalidInputs["notified_services_online"]}</span>}
            </div>
            <label htmlFor="notified_services_offline">Number of services provided off-line out of notified services</label> <br />
            <input type="number" id='notified_services_offline' name='notified_services_offline' value={user.notified_services_offline} placeholder="Enter No" onChange={handleChange} className={invalidInputs["notified_services_offline"] ? 'invalid-input' : ''} />

            {invalidInputs["notified_services_offline"] && <span className="error-message">{invalidInputs["notified_services_offline"]}</span>}
          </div>
          <div>
            <br />
            <label htmlFor="no_non_notified_service">Number of non-notified services(Please upload Excel or Spreadsheet document only)</label> <br />

            <input type="file" id='no_non_notified_service' name='no_non_notified_service' accept='.pdf' placeholder="Upload File" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="D_officer_receive_UId">Have the Designated Officers received User ID?</label><br />
            <input type="radio" name="D_officer_receive_UId" id="D_officer_receive_UId_yes" value='Yes' checked={user.D_officer_receive_UId === 'Yes'} onChange={handleChange} />
            <label htmlFor="D_officer_receive_UId_yes">Yes</label>
            <input type="radio" name="D_officer_receive_UId" id="D_officer_receive_UId_no" value='No' checked={user.D_officer_receive_UId === 'No'} onChange={handleChange} />
            <label htmlFor="D_officer_receive_UId_no">No</label>
          </div>
          <div>
            <label htmlFor="UId_details">If "YES" details of user ID</label> <br />
            <input type="number" id='UId_details' name='UId_details' value={user.UId_details} placeholder="Enter No" onChange={handleChange} className={invalidInputs["UId_details"] ? 'invalid-input' : ''} />

            {invalidInputs["UId_details"] && <span className="error-message">{invalidInputs["UId_details"]}</span>}
          </div>
          <div>
            <label htmlFor="avail_necessary_facilities">Are necessary facilities available to the Designated Officer including computer and internet?</label><br />
            <input type="radio" name="avail_necessary_facilities" id="avail_necessary_facilities_yes" value="Yes" onChange={handleChange} checked={user.avail_necessary_facilities === 'Yes'} />
            <label htmlFor="avail_necessary_facilities_yes">Yes</label>
            <input type="radio" name="avail_necessary_facilities" id="avail_necessary_facilities_no" value="No" onChange={handleChange} checked={user.avail_necessary_facilities === 'No'} />
            <label htmlFor="avail_necessary_facilities_no">No</label>
          </div>
          <div>
            <label htmlFor="upload_personal_details">Are the personal details including mobile number/e-mail of the Designated Officer updated on Aaple Sarkar portal?</label><br />
            <input type="radio" name="upload_personal_details" id="upload_personal_details_yes" value="Yes" checked={user.upload_personal_details === "Yes"} onChange={handleChange} />
            <label htmlFor="upload_personal_details_yes">Yes</label>
            <input type="radio" name="upload_personal_details" id="upload_personal_details_no" value="No" checked={user.upload_personal_details === "No"} onChange={handleChange} />
            <label htmlFor="upload_personal_details_no">No</label>
          </div>
          <div>
            <label htmlFor="necessary_technical_support">Does the Designated Officer get necessary technical support and training from the District Coordinator of MahaIt Corporation?</label><br />
            <input type="radio" name="necessary_technical_support" id="necessary_technical_support_yes" value="Yes" checked={user.necessary_technical_support === "Yes"} onChange={handleChange} />
            <label htmlFor="necessary_technical_support_yes">Yes</label>
            <input type="radio" name="necessary_technical_support" id="necessary_technical_support_no" value="No" checked={user.necessary_technical_support === "No"} onChange={handleChange} />
            <label htmlFor="necessary_technical_support_no">No</label>
          </div>
          <div>
            <label htmlFor="necessary_details_on_board"> Are all the necessary details under section 3(2) and rule 3(1) and (2) displayed on the notice board of the office?</label><br />
            <input type="radio" name="necessary_details_on_board" id="necessary_details_on_board_yes" value='Yes' checked={user.necessary_details_on_board === 'Yes'} onChange={handleChange} />
            <label htmlFor="necessary_details_on_board_yes">Yes</label>
            <input type="radio" name="necessary_details_on_board" id="necessary_details_on_board_no" value="No" checked={user.necessary_details_on_board === 'No'} onChange={handleChange} />
            <label htmlFor="necessary_details_on_board_no">No</label>
          </div>
          <div>
            <label htmlFor="Acknowlwdgement_given">Whether acknowledgment is given to the applicant in the prescribed form of 'Form-1'?</label><br />
            <input type="radio" name="Acknowlwdgement_given" id="Acknowlwdgement_given_yes" value='Yes' checked={user.Acknowlwdgement_given === 'Yes'} onChange={handleChange} />
            <label htmlFor="Acknowlwdgement_given_yes">Yes</label>
            <input type="radio" name="Acknowlwdgement_given" id="Acknowlwdgement_given_no" value="No" checked={user.Acknowlwdgement_given === 'No'} onChange={handleChange} />
            <label htmlFor="Acknowlwdgement_given_no">No</label>
          </div>
          <div>
            <label htmlFor="maintain_regiser_form4">Has the Designated Officer maintained the register in the prescribed 'Form-4'?</label><br />
            <input type="radio" name="maintain_regiser_form4" id="maintain_regiser_form4_yes" value='Yes' checked={user.maintain_regiser_form4 === 'Yes'} onChange={handleChange} />
            <label htmlFor="maintain_regiser_form4_yes">Yes</label>
            <input type="radio" name="maintain_regiser_form4" id="maintain_regiser_form4_no" value="No" checked={user.maintain_regiser_form4 === 'No'} onChange={handleChange} />
            <label htmlFor="maintain_regiser_form4_no">No</label>
          </div>
          <div>
            <label htmlFor="registr_monthly_sertified_or_not">Are such registers monthly abstracted and certified by the Head of Office every month?</label><br />
            <input type="radio" name="registr_monthly_sertified_or_not" id="registr_monthly_sertified_or_not_yes" value="Yes" checked={user.registr_monthly_sertified_or_not === 'Yes'} onChange={handleChange} />
            <label htmlFor="registr_monthly_sertified_or_not_yes">Yes</label>
            <input type="radio" name="registr_monthly_sertified_or_not" id="registr_monthly_sertified_or_not_no" value="No" checked={user.registr_monthly_sertified_or_not === 'No'} onChange={handleChange} />
            <label htmlFor="registr_monthly_sertified_or_not1_no">No</label>
          </div>
          <div>
            <label htmlFor="offline_application_info_revised">Is Information about off-line applications and appeals in revised form- A, B, C as prescribed by Government letter, General Administration Department letter No. RTS 3119/ Pr.No.42/18 (R. and Ka.) dated 14th June, 2019.  submitted to the superior office every month?</label><br />
            <input type="radio" name="offline_application_info_revised" id="offline_application_info_revised_yes" value="Yes" checked={user.offline_application_info_revised === 'Yes'} onChange={handleChange} />
            <label htmlFor="offline_application_info_revised_yes">Yes</label>
            <input type="radio" name="offline_application_info_revised" id="offline_application_info_revised_no" value="No" checked={user.offline_application_info_revised === 'No'} onChange={handleChange} />
            <label htmlFor="offline_application_info_revised_no">No</label>
          </div>
          <div>
            <label htmlFor="officer_undergone_legal_training">Has the Designated Officer undergone legal and technical training?</label><br />
            <input type="radio" name="officer_undergone_legal_training" id="officer_undergone_legal_training_yes" value="Yes" checked={user.officer_undergone_legal_training === 'Yes'} onChange={handleChange} />
            <label htmlFor="officer_undergone_legal_training_yes">Yes</label>
            <input type="radio" name="officer_undergone_legal_training" id="officer_undergone_legal_training_no" value="No" checked={user.officer_undergone_legal_training === 'No'} onChange={handleChange} />
            <label htmlFor="officer_undergone_legal_training_no">No</label>
          </div>
          <div>

            <label htmlFor="efforts_details">Details of efforts made for publicity and dissemination of information for effective implementation of Maharashtra Right to Public Services Act, 2015</label><br />

            <input type="text" id='efforts_details' name='efforts_details' value={user.efforts_details} placeholder='Enter details' onChange={handleChange} className={invalidInputs["efforts_details"] ? 'invalid-input' : ''} />
            {invalidInputs["efforts_details"] && <span className="error-message">{invalidInputs["efforts_details"]}</span>}
          </div>
          <div>

            <label htmlFor="innovative_intiative_taken">Information regarding innovative initiatives taken for effective implementation of Maharashtra Right to Public Services Act, 2015.</label><br />

            <input type="text" id='innovative_intiative_taken' name='innovative_intiative_taken' value={user.innovative_intiative_taken} placeholder='Enter Head office Name' onChange={handleChange} className={invalidInputs["innovative_intiative_taken"] ? 'invalid-input' : ''} />

            {invalidInputs["innovative_intiative_taken"] && <span className="error-message">{invalidInputs["innovative_intiative_taken"]}</span>}
          </div>
          <div>
            <button id="formsubmit" onClick={SubmitForm} type='submit'>Submit</button>
          </div>
        </form>
      </div >
    </div >

  )
}

export default Form2;
