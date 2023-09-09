import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://training-project-8tay.onrender.com/create', formData);
      console.log('Response: ', response.data);

      // Use navigate to navigate to the homepage
      navigate('/');

    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h4 className='h4'>Form</h4>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title" // Add the 'name' attribute for proper form data handling
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description" // Add the 'name' attribute for proper form data handling
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
