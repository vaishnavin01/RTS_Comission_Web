import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard3() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:9002/form3');


            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div className='containerdash'>
                <h2>Form3 Data Sheet</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Reporting Period</th>
                            <th>Total No Notified services</th>
                            <th>Name of notified service</th>

                            <th>No of applications pending as on March 2021</th>
                            <th>No of offline application received(during reporting month)</th>
                            <th>Number of offline application received(from 1 Apr 2022 to end of month)</th>
                            <th>Total number of applications</th>
                            <th>No of applications served during period</th>
                            <th>No of applications served after period</th>
                            <th>No of applications pending during  period</th>
                            <th>No of applications pending after period</th>
                            <th>No of rejected applications with reason</th>
                            <th>No of rejected applications without reason</th>
                            <th>Name and designation</th>
                            <th>place</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((form, index) => (
                            <tr key={index}>
                                <td>{form.Department}</td>
                                <td>{form.Reportperiod}</td>

                                <td>{form.Tnotified_services}</td>
                                <td>{form.name_of_NotifiedService}</td>

                                <td>{form.pending_Applicatin}</td>
                                <td>{form.offline_applicationReceived}</td>
                                <td>{form.offlineapplicationReceived_April_2022}</td>
                                <td>{form.total_application}</td>
                                <td>{form.application_served_during}</td>
                                <td>{form.application_served_after}</td>
                                <td>{form.application_pending_during}</td>
                                <td>{form.application_pending_after}</td>
                                <td>{form.rejected_applications_withreason}</td>
                                <td>{form.rejected_applications_withoutreason}</td>
                                <td>{form.Designatin_name}</td>
                                <td>{form.place}</td>
                                <td>{form.Date}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>

        </div>
    );
}

export default Dashboard3;