import React, { useState } from 'react';
import { signin } from '../api/api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signin(form);
      localStorage.setItem('token', data.token);
      alert('Login successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", marginBottom: 8 }}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          style={{ width: "100%", marginBottom: 8 }}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
