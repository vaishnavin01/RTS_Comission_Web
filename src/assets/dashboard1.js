import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard1() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:9002/form1');


            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>

            <div className='containerdash'>
                <h2> Form 1 Data Sheet</h2>
                <br />
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Office Details</th>
                                <th>District</th>
                                <th>Taluka</th>
                                <th>Phone Number</th>
                                <th>Administritive Department</th>
                                <th>Head of Office</th>
                                <th>HOD Mobile number</th>
                                <th>Designation of Head of office</th>
                                <th>Service provide underAct</th>
                                <th>Total Number of services provided through office</th>
                                <th>out of which total number of notified services</th>
                                <th>Number of services provided offline out of notified services</th>

                                <th>Total No. of Designated Officers</th>
                                <th>Out of these, the number of user IDs received</th>
                                <th>the number of users who did not get the user ID</th>
                                <th>Total First Appellate Authority No</th>
                                <th>number of user IDs received</th>
                                <th>number of users who did not get the user ID</th>
                                <th> Out of the total number of Designated Officers and Appellate Authorities how many have access to necessary equipment including computers and internet</th>
                                <th>Designeted officer</th>
                                <th>First Appellate Authority</th>
                                <th>second Appellate Authority</th>
                                <th>personal details including mobile numbers/e-mails of all Designated Officers and Appellate Authorities updated on your government portal?</th>
                                <th>Does the District Coordinator of MahaIT Corporation provide the necessary technical support and training?</th>
                                <th>Are all the particulars required under Section 3(2) and Rule 3 (1) and (2) displayed on the notice board of the office?</th>
                                <th>Whether acknowledgment is given to the applicant in the prescribed form of 'Form-1'?</th>
                                <th>Whether the Designated Officer and the First and Second Appellate Authorities have kept the registers in the prescribed 'Form-4'?</th>
                                <th>Are all such registers monthly abstracted and certified by the Head of Office every month ?</th>
                                <th>Is Information about off-line application and appeal in revised form- A, B, C as fixed vide Government letter, General Administration Department letter No. RTS 3119/ Pr.No.42/18 (R. & Ka.) dated 14th June, 2019 submitted to the superior office every month?</th>
                                <th>Has the service wise information of received, decided and pending online applications at the end of last month been retrieved and submitted from the dashboard?</th>
                                <th>First Appeal (Previous Month End Status) Total first appeals received</th>
                                <th>Total First Appeals disposed of</th>
                                <th>Total First Appeals Pending</th>
                                <th>Out of the above (Total Pending Appeals) appeals pending after expiry of the prescribed time limit</th>
                                <th>Second Appeals (Previous Month End Status)Total Second Appeals Received</th>
                                <th>Total Second Appeals disposed-of</th>
                                <th>Total Second Appeals Pending</th>
                                <th>Out of the above (Total Pending Appeals) appeals which are pending after the expiry of the prescribed time limit</th>
                                <th>Are the first and second appeals properly heard by stating reasons?</th>
                                <th>Total number of cases where penalty was imposed?</th>
                                <th>Are the first and second appeals properly heard by stating reasons?</th>
                                <th>Are the orders properly passed on the first and second appeals stating reasons?</th>
                                <th>First appeals</th>
                                <th>second appeals</th>
                                <th>Number of cases where penalty amount has been paid under relevant account head?</th>
                                <th>Amount of penalty </th>
                                <th>Have Designated Officers and Appellate Officers received legal and technical training about this Act?</th>
                                <th> number and information about the action taken accordingly</th>
                                <th>review of the implementation of the Maharashtra Right to Public Services Act, 2015 in a monthly meeting held at the Head of Office level?</th>
                                <th>Have disciplinary orders been passed in second and third appeals?</th>
                                <th>Instructions to Designated Officers, Appellate Authorities and Head of Office regarding necessary measures to ensure that services are provided within prescribed time limits and through online mode only</th>
                                <th>Details of efforts made for publicity and dissemination of information for effective implementation of Maharashtra Right to Public Services Act, 2015</th>
                                <th> Information regarding innovative initiatives taken for effective implementation of Maharashtra Right to Public Services Act, 2015.</th>

                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((form, index) => (
                                <tr key={index}>
                                    <td>{form.Email}</td>
                                    <td>{form.office_details}</td>
                                    <td>{form.District}</td>
                                    <td>{form.Taluka}</td>
                                    <td>{form.Phone_number}</td>
                                    <td>{form.Administritive_Department}</td>
                                    <td>{form.Head_of_office}</td>
                                    <td>{form.HOD_Mobile_number}</td>
                                    <td>{form.Designation_of_head_office}</td>
                                    <td>{form.service_provide_underAct}</td>
                                    <td>{form.TServicesprovide_through_office}</td>
                                    <td>{form.outOf_total_notified_service}</td>
                                    <td>{form.outOf_notified_services_offline}</td>
                                    <td>{form.T_designeted_officer}</td>
                                    <td>{form.No_userId_receive}</td>
                                    <td>{form.userId_not_receive}</td>
                                    <td>{form.total_first_appelate_authority}</td>
                                    <td>{form.No_userId_receive2}</td>
                                    <td>{form.userId_not_receive2}</td>
                                    <td>{form.access_necessary_equipement}</td>
                                    <td>{form.designated_officer}</td>
                                    <td>{form.first_appellate_authority}</td>
                                    <td>{form.second_appelate_authority}</td>
                                    <td>{form.update_personal_detail}</td>
                                    <td>{form.necessary_technical_services}</td>
                                    <td>{form.particular_req_display_board}</td>
                                    <td>{form.Acknowlwdgement_given}</td>
                                    <td>{form.keep_register_prescribed}</td>
                                    <td>{form.register_sertified_byHOD}</td>
                                    <td>{form.offline_app_submitted_superior_office}</td>
                                    <td>{form.submitted_serviceWise_info}</td>
                                    <td>{form.first_appeal_prev_month_end_status}</td>
                                    <td>{form.first_appeal_dep_of}</td>
                                    <td>{form.T_first_appeal_pending}</td>
                                    <td>{form.appeals_pending_after_expiry}</td>
                                    <td>{form.second_appeal_month_end}</td>
                                    <td>{form.second_appeal_deposit_of}</td>
                                    <td>{form.T_second_appeal_pending}</td>
                                    <td>{form.T_pending_appeals}</td>
                                    <td>{form.first_second_appeals_heared_byStarting_reason}</td>
                                    <td>{form.panalty_imposed}</td>
                                    <td>{form.first_second_appeal_properly_heared}</td>
                                    <td>{form.properly_order_passed}</td>
                                    <td>{form.first_appeal}</td>
                                    <td>{form.second_appeal}</td>
                                    <td>{form.panalty_Amt_paid}</td>
                                    <td>{form.Amt_panalty}</td>
                                    <td>{form.received_legal_technical_training}</td>
                                    <td>{form.info_regarding_training}</td>
                                    <td>{form.implimentation_rts}</td>
                                    <td>{form.disciplinary_ordered_pass}</td>
                                    <td>{form.necessary_measure}</td>
                                    <td>{form.efforts_for_rts}</td>
                                    <td>{form.information_rts}</td>


                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>



            </div>

        </div>
    );
}

export default Dashboard1;