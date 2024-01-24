import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    developer: '',
    description: '',
    url: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/projects', formData);
      onFormSubmit(response.data);
      setFormData({
        title: '',
        developer: '',
        description: '',
        url: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Developer:</label>
      <input type="text" name="developer" value={formData.developer} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>URL:</label>
      <input type="url" name="url" value={formData.url} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
