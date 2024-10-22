import React, { useState } from 'react';
import axios from 'axios'
import ContactCard from './ContactCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycbzMmZIQIWnNpGm_TULabUshHTmqoSrTPd-kwQAMETG9cMkaXAa0iyGdRqnvMj5Si8Y/exec', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'http://localhost:5173/'
        }
      });
      console.log(response.data);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-600">
      {/* <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300  rounded-md bg-gradient-to-r from-slate-300 to-slate-400 focus:opacity-100 opacity-70" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300  rounded-md bg-gradient-to-r from-slate-300 to-slate-400 focus:opacity-100 opacity-70" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300  rounded-md bg-gradient-to-r from-slate-300 to-slate-400 focus:opacity-100 opacity-70" 
            required 
          />
          <button type="submit" className="bg-slate-500 w-52 text-white p-2 rounded">Send</button>
        </form>
      </div> */}
      <ContactCard message={"Have something to say? Ping me on"} />
    </section>
  );
};

export default Contact;
