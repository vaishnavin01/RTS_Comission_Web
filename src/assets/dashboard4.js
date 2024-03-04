import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard4() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const response = await axios.get('http://localhost:9002/form4');


      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className='drawer'>

      </div>
      <div className='containerdash'>
        <h2>Form4 Data Sheet</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Reporting Period</th>
              <th>Total No Notified services</th>

              <th>No of first appeal pending till2022</th>
              <th>No of offline application received</th>
              <th>N0 of offline first appeal applications received</th>
              <th>First overall number of applications</th>
              <th>No of first appeals disposed of within period</th>
              <th>No of first appeals disposed of after period</th>
              <th>No of first appeals pending at the end of reporting month</th>
              <th>Head of department</th>
              <th>place</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((form, index) => (
              <tr key={index}>
                <td>{form.department}</td>
                <td>{form.reportperiod}</td>

                <td>{form.tnotifiedservices}</td>

                <td>{form.firstappealpending}</td>
                <td>{form.offlineapplicationreceived}</td>
                <td>{form.offlinefirstappealapplication}</td>
                <td>{form.firstoverallnumapplication}</td>
                <td>{form.firstappealdisposedwithin}</td>
                <td>{form.firstappealdisposedafter}</td>
                <td>{form.firstappealpendingend}</td>
                <td>{form.headofdepartment}</td>
                <td>{form.place}</td>
                <td>{form.date}</td>

              </tr>
            ))}
          </tbody>
        </table>


      </div>

    </div>
  );
}

export default Dashboard4;