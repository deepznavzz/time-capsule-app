import React, { useState } from 'react';
import { signup } from '../api/api'; // For Signup.js

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
        // Optionally, redirect to login page here
      } else {
        alert(data.message || 'Signup failed!');
      }
    } catch (err) {
      alert('Network error!');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
