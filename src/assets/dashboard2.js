import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard2() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:9002/form2');

            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div className='containerdash'>
                <h2>Form2 Data Sheet</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Office details</th>
                            <th>District Name</th>
                            <th>Taluka Name</th>
                            <th>Email</th>
                            <th>phone number</th>
                            <th>Administritive Department</th>
                            <th>Name of Designeted officer</th>
                            <th>Designation  Designeted  of officer</th>
                            <th>Designation officerrs Number</th>

                            <th>Total number of services provided by designated officer</th>
                            <th>Out of which the total number of notified services</th>
                            <th>Number of services provided online out of notified services</th>
                            <th>Number of services provided off-line out of notified services</th>

                            <th>Have the Designated Officers received User ID?</th>
                            <th> details of user ID</th>
                            <th>Are necessary facilities available to the Designated Officer including computer and internet?</th>
                            <th>Are the personal details including mobile number/e-mail of the Designated Officer updated on Aaple Sarkar portal?</th>
                            <th>Does the Designated Officer get necessary technical support and training from the District Coordinator of MahaIt Corporation?</th>
                            <th>Are all the necessary details under section 3(2) and rule 3(1) and (2) displayed on the notice board of the office?</th>
                            <th>Whether acknowledgment is given to the applicant in the prescribed form of 'Form-1'?</th>
                            <th>Has the Designated Officer maintained the register in the prescribed 'Form-4'?</th>
                            <th>Are such registers monthly abstracted and certified by the Head of Office every month?</th>
                            <th>Is Information about off-line applications and appeals in revised form- A, B, C </th>
                            <th>Has the Designated Officer undergone legal and technical training?</th>
                            <th>Details of efforts made for publicity and dissemination of information for effective implementation of Maharashtra Right to Public Services Act, 2015</th>
                            <th>Information regarding innovative initiatives taken for effective implementation of Maharashtra Right to Public Services Act, 2015</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((form, index) => (
                            <tr key={index}>
                                <td>{form.office_details}</td>
                                <td>{form.District}</td>
                                <td>{form.Taluka}</td>
                                <td>{form.Email}</td>
                                <td>{form.Phone_number}</td>
                                <td>{form.Administritive_Department}</td>
                                <td>{form.Designated_officer}</td>
                                <td>{form.designation_of_officer}</td>
                                <td>{form.Designated_officer_No}</td>

                                <td>{form.T_services_by_Dofficers}</td>
                                <td>{form.T_notified_services}</td>
                                <td>{form.notified_services_online}</td>
                                <td>{form.notified_services_offline}</td>

                                <td>{form.D_officer_receive_UId}</td>
                                <td>{form.UId_details}</td>
                                <td>{form.avail_necessary_facilities}</td>
                                <td>{form.upload_personal_details}</td>
                                <td>{form.necessary_technical_support}</td>
                                <td>{form.necessary_details_on_board}</td>
                                <td>{form.Acknowlwdgement_given}</td>
                                <td>{form.maintain_regiser_form4}</td>
                                <td>{form.registr_monthly_sertified_or_not}</td>
                                <td>{form.offline_application_info_revised}</td>
                                <td>{form.officer_undergone_legal_training}</td>
                                <td>{form.efforts_details}</td>
                                <td>{form.innovative_intiative_taken}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>

        </div>
    );
}

export default Dashboard2;