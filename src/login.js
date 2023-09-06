import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/users/login', {
        username,
        email,
        password
      });
      console.log(response.data); // Handle the response here
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hyperion Dev Assessment. </p>
      </header>
        <br></br>
      <div className='form'>
      <form onSubmit={handleSubmit}>
      <legend>Log in</legend>
        <br></br>
      <div className="form-group">
        <label>Username: </label>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <br></br>
      <div className="form-group">
        <label>Email: </label>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br></br>
      <div className="form-group">
        <label>Password: </label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br></br>
      <div className="buttons">
      <button type="submit" className="button">Log in</button>
        </div>
        <p className='forgot-password'>
            Dont have an account? <a href='/App.js' >Sign up</a>
        </p>
      </form>
    </div>
    </div >
    
  );
}

export default App;
