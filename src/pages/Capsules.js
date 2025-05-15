import React, { useState, useEffect } from 'react';
import { createCapsule, getCapsules, deleteCapsule } from '../api/api';

function Capsules() {
  const [capsules, setCapsules] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  const fetchCapsules = async () => {
    const userId = localStorage.getItem('userId');
    const { data } = await getCapsules(userId);
    setCapsules(data);
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    await createCapsule({ ...form, userId });
    fetchCapsules();
  };

  const handleDelete = async (id) => {
    await deleteCapsule(id);
    fetchCapsules();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <button type="submit">Create Capsule</button>
      </form>
      <ul>
        {capsules.map((capsule) => (
          <li key={capsule._id}>
            <h3>{capsule.title}</h3>
            <p>{capsule.content}</p>
            <button onClick={() => handleDelete(capsule._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Capsules;