import React, { useState } from 'react';
import './Form.css';

function App() {
  // Declare state variables for title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ title: '', description: '' });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: '', description: '' };

    // Perform validation checks here
    if (title.trim() === '') {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (description.trim() === '') {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, you can proceed with your logic here
      console.log('Title:', title);
      console.log('Description:', description);
    } else {
      // Form is not valid, do not submit
      alert('Form validation failed.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h4>Form</h4>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <span className="error">{errors.title}</span>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <span className="error">{errors.description}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

