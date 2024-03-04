//2input configuration
import React, { useState, useEffect } from "react";
import './form1.css';
import logo2 from "../Images/logo2.png";
import axios from "axios";

function Form1() {
  const [user, setUser] = useState({
    Email: "",
    office_details: "",
    District: "",
    Taluka: "",
    Phone_number: "",
    Administritive_Department: "",
    Head_of_office: "",
    HOD_Mobile_number: "",
    Designation_of_head_office: "",
    service_provide_underAct: null,
    TServicesprovide_through_office: "",
    outOf_total_notified_service: "",
    outOf_notified_services_offline: "",
    non_notified_services: null,
    T_designeted_officer: "",
    No_userId_receive: "",
    userId_not_receive: "",
    total_first_appelate_authority: "",
    No_userId_receive2: "",
    userId_not_receive2: "",
    access_necessary_equipement: "",
    designated_officer: "",
    first_appellate_authority: "",
    second_appelate_authority: "",
    update_personal_detail: "",
    necessary_technical_services: "",
    particular_req_display_board: "",
    Acknowlwdgement_given: "",
    keep_register_prescribed: "",
    register_sertified_byHOD: "",
    offline_app_submitted_superior_office: "",
    submitted_serviceWise_info: "",
    first_appeal_prev_month_end_status: "",
    first_appeal_dep_of: "",
    T_first_appeal_pending: "",
    appeals_pending_after_expiry: "",
    second_appeal_month_end: "",
    second_appeal_deposit_of: "",
    T_second_appeal_pending: "",
    T_pending_appeals: "",
    first_second_appeals_heared_byStarting_reason: "",
    panalty_imposed: "",
    first_second_appeal_properly_heared: "",
    properly_order_passed: "",
    first_appeal: "",
    second_appeal: "",
    panalty_Amt_paid: "",
    Amt_panalty: "",
    received_legal_technical_training: "",
    info_regarding_training: "",
    implimentation_rts: "",
    disciplinary_ordered_pass: "",
    necessary_measure: "",
    efforts_for_rts: "",
    information_rts: "",


  });
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

    if (type === 'radio') {

      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    } else {

      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
    if (e.target.name === 'District') {

      setUser((prevUser) => ({
        ...prevUser,
        Taluka: "",
      }));
    }
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
    const {
      Email,
      office_details,
      District,
      Taluka,
      Phone_number,
      Administritive_Department,
      Head_of_office,
      HOD_Mobile_number,
      Designation_of_head_office,

      TServicesprovide_through_office,
      outOf_total_notified_service,
      outOf_notified_services_offline,

      T_designeted_officer,
      No_userId_receive,
      userId_not_receive,
      total_first_appelate_authority,
      No_userId_receive2,
      userId_not_receive2,
      access_necessary_equipement,
      designated_officer,
      first_appellate_authority,
      second_appelate_authority,
      update_personal_detail,
      necessary_technical_services,
      particular_req_display_board,
      Acknowlwdgement_given,
      keep_register_prescribed,
      register_sertified_byHOD,
      offline_app_submitted_superior_office,
      submitted_serviceWise_info,
      first_appeal_prev_month_end_status,
      first_appeal_dep_of,
      T_first_appeal_pending,
      appeals_pending_after_expiry,
      second_appeal_month_end,
      second_appeal_deposit_of,
      T_second_appeal_pending,
      T_pending_appeals,
      first_second_appeals_heared_byStarting_reason,
      panalty_imposed,
      first_second_appeal_properly_heared,
      properly_order_passed,
      first_appeal,
      second_appeal,
      panalty_Amt_paid,
      Amt_panalty,
      received_legal_technical_training,
      info_regarding_training,
      implimentation_rts,
      disciplinary_ordered_pass,
      necessary_measure,
      efforts_for_rts,
      information_rts,


    } = user;
    const formData = new FormData();
    formData.append('Email', Email);
    formData.append('office_details', office_details);
    formData.append('District', District);
    formData.append('Taluka', Taluka);
    formData.append('Phone_number', Phone_number);
    formData.append('Administritive_Department', Administritive_Department);
    formData.append('Head_of_office', Head_of_office);
    formData.append('HOD_Mobile_number', HOD_Mobile_number);
    formData.append('Designation_of_head_office', Designation_of_head_office);
    formData.append('TServicesprovide_through_office', TServicesprovide_through_office);
    formData.append('outOf_total_notified_service', outOf_total_notified_service);
    formData.append('outOf_notified_services_offline', outOf_notified_services_offline);
    formData.append('T_designeted_officer', T_designeted_officer);
    formData.append('No_userId_receive', No_userId_receive);
    formData.append('userId_not_receive', userId_not_receive);
    formData.append('total_first_appelate_authority', total_first_appelate_authority);
    formData.append('No_userId_receive2', No_userId_receive2);
    formData.append('userId_not_receive2', userId_not_receive2);
    formData.append('access_necessary_equipement', access_necessary_equipement);
    formData.append('designated_officer', designated_officer);
    formData.append('first_appellate_authority', first_appellate_authority);
    formData.append('second_appelate_authority', second_appelate_authority);
    formData.append('update_personal_detail', update_personal_detail);
    formData.append('necessary_technical_services', necessary_technical_services);
    formData.append('particular_req_display_board', particular_req_display_board);
    formData.append('Acknowlwdgement_given', Acknowlwdgement_given);
    formData.append('keep_register_prescribed', keep_register_prescribed);
    formData.append('register_sertified_byHOD', register_sertified_byHOD);
    formData.append('offline_app_submitted_superior_office', offline_app_submitted_superior_office);
    formData.append('submitted_serviceWise_info', submitted_serviceWise_info);
    formData.append('first_appeal_prev_month_end_status', first_appeal_prev_month_end_status);
    formData.append('first_appeal_dep_of', first_appeal_dep_of);
    formData.append('T_first_appeal_pending', T_first_appeal_pending);
    formData.append('appeals_pending_after_expiry', appeals_pending_after_expiry);
    formData.append('second_appeal_month_end', second_appeal_month_end);
    formData.append('second_appeal_deposit_of', second_appeal_deposit_of);
    formData.append('T_second_appeal_pending', T_second_appeal_pending);
    formData.append('T_pending_appeals', T_pending_appeals);
    formData.append('first_second_appeals_heared_byStarting_reason', first_second_appeals_heared_byStarting_reason);
    formData.append('panalty_imposed', panalty_imposed);
    formData.append('first_second_appeal_properly_heared', first_second_appeal_properly_heared);
    formData.append('properly_order_passed', properly_order_passed);
    formData.append('first_appeal', first_appeal);
    formData.append('second_appeal', second_appeal);
    formData.append('panalty_Amt_paid', panalty_Amt_paid);
    formData.append('Amt_panalty', Amt_panalty);
    formData.append('received_legal_technical_training', received_legal_technical_training);
    formData.append('info_regarding_training', info_regarding_training);
    formData.append('implimentation_rts', implimentation_rts);
    formData.append('disciplinary_ordered_pass', disciplinary_ordered_pass);
    formData.append('necessary_measure', necessary_measure);
    formData.append('efforts_for_rts', efforts_for_rts);
    formData.append('information_rts', information_rts);

    const service_provide_underAct = document.getElementById('service_provide_underAct');
    formData.append('service_provide_underAct', service_provide_underAct.files[0]);


    const non_notified_services = document.getElementById('non_notified_services');
    formData.append('non_notified_services', non_notified_services.files[0]);


    const hasEmptyField = Array.from(formData.values()).some((value) => !value);

    if (hasEmptyField) {
      alert('Invalid data. Please fill in all required fields.');
      return;
    }


    // Send the data to the server
    try {
      const result = await axios.post('http://localhost:9002/form1', formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(result);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log('Server Response:', error.response);
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
              <label htmlFor="Email"> Enter Email</label><br />
              <input type="email" id="Email" name="Email" value={user.Email} placeholder='Enter Email' onChange={handleChange} onBlur={handleChange} className={invalidInputs["Email"] ? 'invalid-input' : ''} />
              {invalidInputs["Email"] && <span className="error-message">{invalidInputs["Email"]}</span>}
            </div>
            <div>
              <label htmlFor="office_details">Office Details</label><br />
              <input type="text" id="office_details" name="office_details" value={user.office_details} placeholder='Enter  office Name' onChange={handleChange} className={invalidInputs["office_details"] ? 'invalid-input' : ''} />
              {invalidInputs["office_details"] && <span className="error-message">{invalidInputs["office_details"]}</span>}
            </div>
            <div>
              <label htmlFor="District">District Name</label><br />
              <select id="District" name="District" value={user.District} onChange={handleChange}>
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
              <label htmlFor="Phone_number">Phone Numbers</label><br />
              <input type="Number" name="Phone_number" value={user.Phone_number} placeholder='Enter phone number' onChange={handleChange} className={invalidInputs["Phone_number"] ? 'invalid-input' : ''} />
              {invalidInputs["Phone_number"] && <span className="error-message">{invalidInputs["Phone_number"]}</span>}
            </div>

            <div>
              <label htmlFor="Administritive_Department">Administritive Department</label><br />
              <input type="text" id="Administritive_Department" name="Administritive_Department" value={user.Administritive_Department} placeholder='Enter Administritive Department' onChange={handleChange} className={invalidInputs["Administritive_Department"] ? 'invalid-input' : ''} />
              {invalidInputs["Administritive_Department"] && <span className="error-message">{invalidInputs["Administritive_Department"]}</span>}
            </div>
            <div>
              <label htmlFor="Head_of_office">Name of head of Office</label><br />
              <input type="text" id="Head_of_office" name="Head_of_office" value={user.Head_of_office} placeholder='Enter Head office Name' onChange={handleChange} className={invalidInputs["Head_of_office"] ? 'invalid-input' : ''} />
              {invalidInputs["Head_of_office"] && <span className="error-message">{invalidInputs["Head_of_office"]}</span>}
            </div>

            <div>
              <label htmlFor="HOD_Mobile_number">HOD Mobile number</label><br />
              <input type="number" id="HOD_Mobile_number" name="HOD_Mobile_number" value={user.HOD_Mobile_number} placeholder=' Enter HOD Mobile number' onChange={handleChange} className={invalidInputs["HOD_Mobile_number"] ? 'invalid-input' : ''} />
              {invalidInputs["HOD_Mobile_number"] && <span className="error-message">{invalidInputs["HOD_Mobile_number"]}</span>}

            </div>
            <div>
              <label htmlFor="Designation_of_head_office">Designation of Head of office</label><br />
              <input type="text" id="Designation_of_head_office" name="Designation_of_head_office" value={user.Designation_of_head_office} placeholder="Enter Designation" onChange={handleChange} className={invalidInputs["Designation_of_head_office"] ? 'invalid-input' : ''} />
              {invalidInputs["Designation_of_head_office"] && <span className="error-message">{invalidInputs["Designation_of_head_office"]}</span>}
            </div>
            <div>
              <br />
              <label htmlFor="service_provide_underAct">Details of services to provided underthe Act</label> <br />
              <input type="file" id="service_provide_underAct" name="service_provide_underAct" value={user.service_provide_underAct} accept='.pdf' placeholder="Upload File" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="TServicesprovide_through_office">Total Number of services provided through office</label> <br />
              <input type="number" id="TServicesprovide_through_office" name="TServicesprovide_through_office" value={user.TServicesprovide_through_office} placeholder="Enter No" onChange={handleChange} className={invalidInputs["TServicesprovide_through_office"] ? 'invalid-input' : ''} />
              {invalidInputs["TServicesprovide_through_office"] && <span className="error-message">{invalidInputs["TServicesprovide_through_office"]}</span>}
            </div>
            <div>
              <label htmlFor="outOf_total_notified_service">out of which total number of notified services</label> <br />
              <input type="number" id="outOf_total_notified_service" name="outOf_total_notified_service" value={user.outOf_total_notified_service} placeholder="Enter No" onChange={handleChange} className={invalidInputs["outOf_total_notified_service"] ? 'invalid-input' : ''} />

              {invalidInputs["outOf_total_notified_service"] && <span className="error-message">{invalidInputs["outOf_total_notified_service"]}</span>}
            </div>
            <div>
              <label htmlFor="outOf_notified_services_offline"> Number of services provided offline out of notified services</label><br />
              <br /><input type="number" id="outOf_notified_services_offline" name="outOf_notified_services_offline" value={user.outOf_notified_services_offline} placeholder="Enter No" onChange={handleChange} className={invalidInputs["outOf_notified_services_offline"] ? 'invalid-input' : ''} />
              {invalidInputs["outOf_notified_services_offline"] && <span className="error-message">{invalidInputs["outOf_notified_services_offline"]}</span>}
            </div>
            <div>
              <label htmlFor="non_notified_services">Number of non-Notified services</label><br />

              <input type="file" id="non_notified_services" name="non_notified_services" accept='.pdf' placeholder="Upload File " onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="T_designeted_officer">Total No. of Designated Officers</label> <br />
              <input type="number" name="T_designeted_officer" id="T_designeted_officer" value={user.T_designeted_officer} placeholder="Enter No" onChange={handleChange} className={invalidInputs["T_designeted_officer"] ? 'invalid-input' : ''} />

              {invalidInputs["T_designeted_officer"] && <span className="error-message">{invalidInputs["T_designeted_officer"]}</span>}
            </div>
            <div>
              <label htmlFor="No_userId_receive">Out of these, the number of user IDs received</label>
              <br /> <input type="number" id="No_userId_receive" name="No_userId_receive" value={user.No_userId_receive} placeholder="Enter No" onChange={handleChange} className={invalidInputs["No_userId_receive"] ? 'invalid-input' : ''} />

              {invalidInputs["No_userId_receive"] && <span className="error-message">{invalidInputs["No_userId_receive"]}</span>}
            </div>
            <div>
              <label htmlFor="userId_not_receive">Out of these, the number of users who did not get the user ID</label>
              <br /><input type="number" id="userId_not_receive" name="userId_not_receive" value={user.userId_not_receive} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["userId_not_receive"] ? 'invalid-input' : ''} />
              {invalidInputs["userId_not_receive"] && <span className="error-message">{invalidInputs["userId_not_receive"]}</span>}
            </div>
            <div>
              <label htmlFor="total_first_appelate_authority">Total First Appellate Authority No</label><br />
              <input type="number" id="total_first_appelate_authority" name="total_first_appelate_authority" value={user.total_first_appelate_authority} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["total_first_appelate_authority"] ? 'invalid-input' : ''} />
              {invalidInputs["total_first_appelate_authority"] && <span className="error-message">{invalidInputs["total_first_appelate_authority"]}</span>}
            </div>
            <div>
              <label htmlFor="No_userId_receive2">Out of these, the number of user IDs received</label><br />
              <input type="number" id="No_userId_receive2" name="No_userId_receive2" value={user.No_userId_receive2} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["No_userId_receive2"] ? 'invalid-input' : ''} />
              {invalidInputs["No_userId_receive2"] && <span className="error-message">{invalidInputs["No_userId_receive2"]}</span>}
            </div>

            <div>
              <label htmlFor="userId_not_receive2">Out of these, the number of users who did not get the user ID
              </label> <br />
              <input type="number" id="userId_not_receive2" name="userId_not_receive2" value={user.userId_not_receive2} placeholder="Enter number" onChange={handleChange} className={invalidInputs["userId_not_receive2"] ? 'invalid-input' : ''} />

              {invalidInputs["userId_not_receive2"] && <span className="error-message">{invalidInputs["userId_not_receive2"]}</span>}
            </div>
            <div>
              <label htmlFor="access_necessary_equipement">Out of the total number of Designated Officers and Appellate Authorities how many have access to necessary equipment including computers and internet -</label>
              <br /> <input type="number" id="access_necessary_equipement" name="access_necessary_equipement" value={user.access_necessary_equipement} placeholder="Enter number" onChange={handleChange} className={invalidInputs["access_necessary_equipement"] ? 'invalid-input' : ''} />
              {invalidInputs["access_necessary_equipement"] && <span className="error-message">{invalidInputs["access_necessary_equipement"]}</span>}
            </div>
            <div>
              <label htmlFor="designated_officer">Designeted officer</label>
              <br />
              <input type="text" id="designated_officer" name="designated_officer" value={user.designated_officer} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["designated_officer"] ? 'invalid-input' : ''} />
              {invalidInputs["designated_officer"] && <span className="error-message">{invalidInputs["designated_officer"]}</span>}
            </div>
            <div>
              <label htmlFor="first_appellate_authority">First Appellate Authority</label>
              <br />
              <input type="text" id="first_appellate_authority" name="first_appellate_authority" value={user.first_appellate_authority} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["first_appellate_authority"] ? 'invalid-input' : ''} />
              {invalidInputs["first_appellate_authority"] && <span className="error-message">{invalidInputs["first_appellate_authority"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appelate_authority">second Appellate Authority</label>
              <br />
              <input type="text" id="second_appelate_authority" name="second_appelate_authority" value={user.second_appelate_authority} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["second_appelate_authority"] ? 'invalid-input' : ''} />


              {invalidInputs["second_appelate_authority"] && <span className="error-message">{invalidInputs["second_appelate_authority"]}</span>}
            </div>
            <div >
              <label htmlFor="update_personal_detail">Are the personal details including mobile numbers/e-mails of all Designated Officers and Appellate Authorities updated on your government portal?</label><br />
              <input className="radioButton" type="radio" id="update_personal_detail_yes" name="update_personal_detail" value='Yes' checked={user.update_personal_detail === 'Yes'} onChange={handleChange} />
              <label htmlFor="update_personal_detail_yes">Yes</label>
              <input className="radioButton" type="radio" name="update_personal_detail" id="update_personal_detail_no" value='No' checked={user.update_personal_detail === 'No'} onChange={handleChange} />
              <label htmlFor="update_personal_detail_no">No</label>
            </div>

            <div className="radioButton">
              <label htmlFor="necessary_technical_services">Does the District Coordinator of MahaIT Corporation provide the necessary technical support and training?</label><br />
              <input type="radio" id="necessary_technical_services_yes" name="necessary_technical_services" value='Yes' checked={user.necessary_technical_services === 'Yes'} onChange={handleChange} />
              <label htmlFor="necessary_technical_services_yes">Yes</label>
              <input type="radio" name="necessary_technical_services" id="necessary_technical_services_no" value='No' checked={user.necessary_technical_services === 'No'} onChange={handleChange} />
              <label htmlFor="necessary_technical_services_no">No</label>
            </div>

            <div>
              <label htmlFor="particular_req_display_board">Are all the particulars required under Section 3(2) and Rule 3 (1) and (2) displayed on the notice board of the office?</label><br />
              <input type="radio" name="particular_req_display_board" id="particular_req_display_board_yes" value='Yes' checked={user.particular_req_display_board === 'Yes'} onChange={handleChange} />
              <label htmlFor="particular_req_display_board_yes">Yes</label>
              <input type="radio" name="particular_req_display_board" id="particular_req_display_board_no" value='No' checked={user.particular_req_display_board === 'No'} onChange={handleChange} />
              <label htmlFor="particular_req_display_board_no">No</label>
            </div>

            <div>
              <label htmlFor="Acknowlwdgement_given">Whether acknowledgment is given to the applicant in the prescribed form of 'Form-1'?</label><br />
              <input type="radio" name="Acknowlwdgement_given" id="Acknowlwdgement_given_yes" value='Yes' checked={user.Acknowlwdgement_given === 'Yes'} onChange={handleChange} />
              <label htmlFor="Acknowlwdgement_given_yes">Yes</label>
              <input type="radio" name="Acknowlwdgement_given" id="Acknowlwdgement_given_no" value='No' checked={user.Acknowlwdgement_given === 'No'} onChange={handleChange} />
              <label htmlFor="Acknowlwdgement_given_no">No</label>
            </div>

            <div>
              <label htmlFor="keep_register_prescribed">Whether the Designated Officer and the First and Second Appellate Authorities have kept the registers in the prescribed 'Form-4'?</label><br />
              <input type="radio" name="keep_register_prescribed" id="keep_register_prescribed_yes" value='Yes' checked={user.keep_register_prescribed === 'Yes'} onChange={handleChange} />
              <label htmlFor="keep_register_prescribed_yes">Yes</label>
              <input type="radio" name="keep_register_prescribed" id="keep_register_prescribed_no" value='No' checked={user.keep_register_prescribed === 'No'} onChange={handleChange} />
              <label htmlFor="keep_register_prescribed_no">No</label>
            </div>
            <div>
              <label htmlFor="register_sertified_byHOD">Are all such registers monthly abstracted and certified by the Head of Office every month ?</label><br />
              <input type="radio" name="register_sertified_byHOD" id="register_sertified_byHOD_yes" value='Yes' checked={user.register_sertified_byHOD === 'Yes'} onChange={handleChange} />
              <label htmlFor="register_sertified_byHOD_yes">Yes</label>
              <input type="radio" name="register_sertified_byHOD" id="register_sertified_byHOD_no" value='No' checked={user.register_sertified_byHOD === 'No'} onChange={handleChange} />
              <label htmlFor="register_sertified_byHOD_no">No</label>
            </div>

            <div>
              <label htmlFor="offline_app_submitted_superior_office">Is Information about off-line application and appeal in revised form- A, B, C as fixed vide Government letter, General Administration Department letter No. RTS 3119/ Pr.No.42/18 (R. & Ka.) dated 14th June, 2019 submitted to the superior office every month?</label><br />
              <input type="radio" name="offline_app_submitted_superior_office" id="offline_app_submitted_superior_office_yes" value='Yes' checked={user.offline_app_submitted_superior_office === 'Yes'} onChange={handleChange} />
              <label htmlFor="offline_app_submitted_superior_office_yes">Yes</label>
              <input type="radio" name="offline_app_submitted_superior_office" id="offline_app_submitted_superior_office_no" value='No' checked={user.offline_app_submitted_superior_office === 'No'} onChange={handleChange} />
              <label htmlFor="offline_app_submitted_superior_office_no">No</label>
            </div>

            <div>
              <label htmlFor="submitted_serviceWise_info">Has the service wise information of received, decided and pending online applications at the end of last month been retrieved and submitted from the dashboard?</label><br />
              <input type="radio" name="submitted_serviceWise_info" id="submitted_serviceWise_info_yes" value='Yes' checked={user.submitted_serviceWise_info === 'Yes'} onChange={handleChange} />
              <label htmlFor="submitted_serviceWise_info_yes">Yes</label>
              <input type="radio" name="submitted_serviceWise_info" id="submitted_serviceWise_info_no" value='No' checked={user.submitted_serviceWise_info === 'No'} onChange={handleChange} />
              <label htmlFor="submitted_serviceWise_info_no">No</label>
            </div>
            <div>
              <label htmlFor="first_appeal_prev_month_end_status">First Appeal (Previous Month End Status) Total first appeals received </label>
              <br />
              <input type="number" id="first_appeal_prev_month_end_status" name="first_appeal_prev_month_end_status" value={user.first_appeal_prev_month_end_status} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["first_appeal_prev_month_end_status"] ? 'invalid-input' : ''} />
              {invalidInputs["first_appeal_prev_month_end_status"] && <span className="error-message">{invalidInputs["first_appeal_prev_month_end_status"]}</span>}
            </div>
            <div>
              <label htmlFor="first_appeal_dep_of">Total First Appeals disposed of</label><br />
              <input type="number" id="first_appeal_dep_of" name="first_appeal_dep_of" value={user.first_appeal_dep_of} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["first_appeal_dep_of"] ? 'invalid-input' : ''} />
              {invalidInputs["first_appeal_dep_of"] && <span className="error-message">{invalidInputs["first_appeal_dep_of"]}</span>}
            </div>
            <div>
              <label htmlFor="T_first_appeal_pending">Total First Appeals Pending </label><br />
              <input type="number" id="T_first_appeal_pending" name="T_first_appeal_pending" value={user.T_first_appeal_pending} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["T_first_appeal_pending"] ? 'invalid-input' : ''} />
              {invalidInputs["T_first_appeal_pending"] && <span className="error-message">{invalidInputs["T_first_appeal_pending"]}</span>}
            </div>
            <div>
              <label htmlFor="appeals_pending_after_expiry">Out of the above (Total Pending Appeals) appeals pending after expiry of the prescribed time limit</label><br />
              <input type="number" id="appeals_pending_after_expiry" name="appeals_pending_after_expiry" value={user.appeals_pending_after_expiry} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["appeals_pending_after_expiry"] ? 'invalid-input' : ''} />
              {invalidInputs["appeals_pending_after_expiry"] && <span className="error-message">{invalidInputs["appeals_pending_after_expiry"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appeal_month_end"> Second Appeals (Previous Month End Status)
                Total Second Appeals Received</label><br />
              <input type="number" id="second_appeal_month_end" name="second_appeal_month_end" value={user.second_appeal_month_end} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["second_appeal_month_end"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_month_end"] && <span className="error-message">{invalidInputs["second_appeal_month_end"]}</span>}
            </div>

            <div>
              <label htmlFor="second_appeal_deposit_of"> Total Second Appeals disposed-of
              </label><br />
              <input type="number" id="second_appeal_deposit_of" name="second_appeal_deposit_of" value={user.second_appeal_deposit_of} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["second_appeal_deposit_of"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal_deposit_of"] && <span className="error-message">{invalidInputs["second_appeal_deposit_of"]}</span>}
            </div>
            <div>
              <label htmlFor="T_second_appeal_pending"> Total Second Appeals Pending</label><br />
              <input type="number" id="T_second_appeal_pending" name="T_second_appeal_pending" value={user.T_second_appeal_pending} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["T_second_appeal_pending"] ? 'invalid-input' : ''} />
              {invalidInputs["T_second_appeal_pending"] && <span className="error-message">{invalidInputs["T_second_appeal_pending"]}</span>}
            </div>
            <div>
              <label htmlFor="T_pending_appeals"> Out of the above (Total Pending Appeals) appeals which are pending after the expiry of the prescribed time limit</label><br />
              <input type="number" placeholder="Enter number" id="T_pending_appeals" name="T_pending_appeals" value={user.T_pending_appeals} onChange={handleChange} className={invalidInputs["T_pending_appeals"] ? 'invalid-input' : ''} />
              {invalidInputs["T_pending_appeals"] && <span className="error-message">{invalidInputs["T_pending_appeals"]}</span>}
            </div>
            <div>
              <label htmlFor="first_second_appeals_heared_byStarting_reason"> Are the first and second appeals properly heard by stating reasons?</label><br />
              <input type="number" id="first_second_appeals_heared_byStarting_reason" name="first_second_appeals_heared_byStarting_reason" value={user.first_second_appeals_heared_byStarting_reason} placeholder="Enter number" onChange={handleChange} className={invalidInputs["first_second_appeals_heared_byStarting_reason"] ? 'invalid-input' : ''} />
              {invalidInputs["first_second_appeals_heared_byStarting_reason"] && <span className="error-message">{invalidInputs["first_second_appeals_heared_byStarting_reason"]}</span>}
            </div>
            <div>
              <label htmlFor="panalty_imposed"> Total number of cases where penalty was imposed?</label><br />
              <input type="number" id="panalty_imposed" name="panalty_imposed" value={user.panalty_imposed} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["panalty_imposed"] ? 'invalid-input' : ''} />
              {invalidInputs["panalty_imposed"] && <span className="error-message">{invalidInputs["panalty_imposed"]}</span>}
            </div>

            <div>
              <label htmlFor="first_second_appeal_properly_heared">Are the first and second appeals properly heard by stating reasons?</label><br />
              <input type="radio" name="first_second_appeal_properly_heared" id="first_second_appeal_properly_heared_yes" value='Yes' checked={user.first_second_appeal_properly_heared === 'Yes'} onChange={handleChange} />
              <label htmlFor="first_second_appeal_properly_heared_yes">Yes</label>
              <input type="radio" name="first_second_appeal_properly_heared" id="first_second_appeal_properly_heared_no" value='No' checked={user.first_second_appeal_properly_heared === 'No'} onChange={handleChange} />
              <label htmlFor="first_second_appeal_properly_heared_no">No</label>

            </div>

            <div>
              <label htmlFor="properly_order_passed">Are the orders properly passed on the first and second appeals stating reasons?</label><br />
              <input type="radio" name="properly_order_passed" id="properly_order_passed_yes" value='Yes' checked={user.properly_order_passed === 'Yes'} onChange={handleChange} />
              <label htmlFor="properly_order_passed_yes">Yes</label>
              <input type="radio" name="properly_order_passed" id="properly_order_passed_no" value='No' checked={user.properly_order_passed === 'No'} onChange={handleChange} />
              <label htmlFor="properly_order_passed_no">No</label>

            </div>
            <div>
              <label htmlFor="first_appeal">First appeals</label><br />
              <input type="text" id="first_appeal" name="first_appeal" value={user.first_appeal} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["first_appeal"] ? 'invalid-input' : ''} />
              {invalidInputs["first_appeal"] && <span className="error-message">{invalidInputs["first_appeal"]}</span>}
            </div>
            <div>
              <label htmlFor="second_appeal"> second appeals</label><br />
              <input type="text" id="second_appeal" name="second_appeal" value={user.second_appeal} placeholder="Enter Name" onChange={handleChange} className={invalidInputs["second_appeal"] ? 'invalid-input' : ''} />
              {invalidInputs["second_appeal"] && <span className="error-message">{invalidInputs["second_appeal"]}</span>}

            </div>
            <div>
              <label htmlFor="panalty_Amt_paid"> Number of cases where penalty amount has been paid under relevant account head?

              </label><br />
              <input type="number" id="panalty_Amt_paid" name="panalty_Amt_paid" value={user.panalty_Amt_paid} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["panalty_Amt_paid"] ? 'invalid-input' : ''} />
              {invalidInputs["panapanalty_Amt_paid"] && <span className="error-message">{invalidInputs["panapanalty_Amt_paid"]}</span>}

            </div>
            <div> <label htmlFor="Amt_panalty"> Amount of penalty ?</label><br />
              <input type="number" id="Amt_panalty" name="Amt_panalty" value={user.Amt_panalty} placeholder="Enter Number" onChange={handleChange} className={invalidInputs["Amt_panalty"] ? 'invalid-input' : ''} />
              {invalidInputs["Amt_panalty"] && <span className="error-message">{invalidInputs["Amt_panalty"]}</span>}

            </div>
            <div>
              <label htmlFor="received_legal_technical_training">Have Designated Officers and Appellate Officers received legal and technical training about this Act?</label><br />
              <input type="radio" name="received_legal_technical_training" id="received_legal_technical_training_yes" value='Yes' checked={user.received_legal_technical_training === 'Yes'} onChange={handleChange} />
              <label htmlFor="received_legal_technical_training_yes">Yes</label>
              <input type="radio" name="received_legal_technical_training" id="received_legal_technical_training_no" value='No' checked={user.received_legal_technical_training === 'No'} onChange={handleChange} />
              <label htmlFor="received_legal_technical_training_no">No</label>
            </div>
            <div>
              <label htmlFor="info_regarding_training"> If so, its number and information about the action taken accordingly</label><br />
              <input type="number" id="info_regarding_training" name="info_regarding_training" value={user.info_regarding_training} placeholder="Enter Number" onChange={handleChange} />
              {invalidInputs["panalty_imposed"] && <span className="error-message">{invalidInputs["panalty_imposed"]}</span>}
            </div>
            <div>
              <label htmlFor="implimentation_rts">Is there a review of the implementation of the Maharashtra Right to Public Services Act, 2015 in a monthly meeting held at the Head of Office level?</label><br />
              <input type="text" id="implimentation_rts" name="implimentation_rts" value={user.implimentation_rts} placeholder="Enter review" onChange={handleChange} />
              {invalidInputs["panalty_imposed"] && <span className="error-message">{invalidInputs["panalty_imposed"]}</span>}
            </div>
            <div>
              <label htmlFor="disciplinary_ordered_pass">Have disciplinary orders been passed in second and third appeals?</label><br />
              <input type="radio" name="disciplinary_ordered_pass" id="disciplinary_ordered_pass_yes" value='Yes' checked={user.disciplinary_ordered_pass === 'Yes'} onChange={handleChange} />
              <label htmlFor="disciplinary_ordered_pass_yes">Yes</label>
              <input type="radio" name="disciplinary_ordered_pass" id="disciplinary_ordered_pass_no" value='No' checked={user.disciplinary_ordered_pass === 'No'} onChange={handleChange} />
              <label htmlFor="disciplinary_ordered_pass_no">No</label>

            </div>
            <div>
              <label htmlFor="necessary_measure"> Instructions to Designated Officers, Appellate Authorities and Head of Office regarding necessary measures to ensure that services are provided within prescribed time limits and through online mode only</label><br />
              <input type="number" id="necessary_measure" name="necessary_measure" value={user.necessary_measure} placeholder="Enter number" onChange={handleChange} className={invalidInputs["necessary_measure"] ? 'invalid-input' : ''} />
              {invalidInputs["necessary_measure"] && <span className="error-message">{invalidInputs["necessary_measure"]}</span>}

            </div>

            <div>
              <label htmlFor="efforts_for_rts">Details of efforts made for publicity and dissemination of information for effective implementation of Maharashtra Right to Public Services Act, 2015</label><br />
              <input type="text" id="efforts_for_rts" name="efforts_for_rts" value={user.efforts_for_rts} placeholder="Enter Openion" onChange={handleChange} className={invalidInputs["efforts_for_rts"] ? 'invalid-input' : ''} />
              {invalidInputs["efforts_for_rts"] && <span className="error-message">{invalidInputs["efforts_for_rts"]}</span>}
            </div>
            <div>
              <label htmlFor="information_rts">
                Information regarding innovative initiatives taken for effective implementation of Maharashtra Right to Public Services Act, 2015.</label><br />
              <input type="text" id="information_rts" name="information_rts" value={user.information_rts} placeholder="Enter Openion" onChange={handleChange} className={invalidInputs["information_rts"] ? 'invalid-input' : ''} />
              {invalidInputs["information_rts"] && <span className="error-message">{invalidInputs["information_rts"]}</span>}
            </div>
            <div>
              <button id="formsubmit" onClick={SubmitForm} type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form1