import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';


function Dashboard5() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Adjust the API endpoint based on your server configuration
            const response = await axios.get('http://localhost:9002/form5');

            // Assuming your server returns an array of form data
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleDelete = async (id) => {
        console.log('Deleting record with _id:', id);

        if (!id) {
            console.error('Error: _id is undefined or null');
            return;
        }
        try {


            await axios.delete(`http://localhost:9002/form5/${id}`);



            setFormData(formData.filter(form => form.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div>
            <div className='containerdash'>
                <h2>Form5 Data Sheet</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Report period</th>

                            <th>No of second appeals pending till March 2023</th>
                            <th>No of second appeals received during the reporting month</th>
                            <th>No of offline second appeals received</th>
                            <th>Number of Appeals</th>
                            <th>No of second appeals disposed of within period</th>
                            <th>No of second appeals disposed of after period</th>
                            <th>No of second appeals pending at the end of the reporting month</th>
                            <th>Head of department</th>
                            <th>place</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((form, index) => (
                            <tr key={index}>
                                <td>{form.Department}</td>
                                <td>{form.Reportperiod}</td>

                                <td>{form.second_Appeal_pending}</td>
                                <td>{form.second_appeal_received}</td>
                                <td>{form.offline_second_appeal}</td>
                                <td>{form.numbr_of_appeals}</td>
                                <td>{form.second_appeal_disposed_within}</td>
                                <td>{form.second_appeal_disposed_after}</td>
                                <td>{form.second_appeal_pending_end}</td>
                                <td>{form.head_of_department}</td>
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

export default Dashboard5;