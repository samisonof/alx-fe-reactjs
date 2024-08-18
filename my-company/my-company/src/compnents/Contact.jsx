import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formState.message} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
