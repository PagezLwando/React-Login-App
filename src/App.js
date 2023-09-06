import logo from './logo.svg';
import './App.css';
import './login.js';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/users/register', {
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
      <legend>Sign up</legend>
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
      <button type="submit" className="button">Sign up</button>
        </div>
        <p className='forgot-password'>
            Have an account? <a href='/login' >Sign in</a>
        </p>
      </form>
    </div>
    </div >
    
  );
}

export default App;
