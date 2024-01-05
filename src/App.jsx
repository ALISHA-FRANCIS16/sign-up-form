// SignUpForm.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import img1 from './assets/bg3.jpg';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="img-container">
        <img src={img1} alt="Description" />
      </div>
    </div>
  );
};

export default SignUpForm;
