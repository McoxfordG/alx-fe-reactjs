// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

// Validation logic for email format
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

// Validation logic for username (e.g., should not be empty)
const isUsernameValid = (username) => username.trim() !== '';

// Validation logic for password (e.g., should be at least 6 characters long)
const isPasswordValid = (password) => password.length >= 6;

const RegistrationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({});

  // Destructure formData for easier access
  const { username, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields
    let newErrors = { ...errors };
    switch (name) {
      case 'username':
        newErrors.username = isUsernameValid(value) ? '' : 'Username is required.';
        break;
      case 'email':
        newErrors.email = isEmailValid(value) ? '' : 'Invalid email format.';
        break;
      case 'password':
        newErrors.password = isPasswordValid(value) ? '' : 'Password must be at least 6 characters long.';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation to check for empty fields
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';
    
    // Check if all fields are valid
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Additional validation checks
    if (!isUsernameValid(username)) newErrors.username = 'Username is required.';
    if (!isEmailValid(email)) newErrors.email = 'Invalid email format.';
    if (!isPasswordValid(password)) newErrors.password = 'Password must be at least 6 characters long.';
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
