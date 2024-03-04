import React, { useState } from 'react';
import axios from 'axios';
import "./registration.css"

function Registration() {
  const [secretKey, setSecreteKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (secretKey !== "Nathe") {
      setErrorMessage('Invalid admin secret key');
    } else {
      try {
        const response = await axios.post('http://localhost:9002/register', { username, password });
        if (response.data.status === "ok") {
          // Registration successful
          alert("Registration successful");
          // Redirect or do any further action upon successful registration
        } else {
          // Registration failed
          setErrorMessage('Something went wrong');
        }
      } catch (error) {
        setErrorMessage('Something went wrong');
      }
    }
  };

  return (
    <div className='registerbox'>
      <div>
        <label htmlFor="">Secret Key</label>
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={(e) => setSecreteKey(e.target.value)} />
      </div>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSubmit}>Register</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Registration;
