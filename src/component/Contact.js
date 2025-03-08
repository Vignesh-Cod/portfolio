

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs.send('service_jal34gv', 'template_mzcuvjl', templateParams, 'coomUaIYzf24qOZEL')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");

        const welcomeTemplateParams = {
          user_name: name,
          user_email: email,
        };

        emailjs.send('service_jal34gv', 'template_w1xfg0b', welcomeTemplateParams, 'coomUaIYzf24qOZEL')
          .then((result) => {
            console.log("Welcome email sent successfully!", result.text);
          }, (error) => {
            console.log("Failed to send welcome email.", error.text);
          });

      }, (error) => {
        console.log("Failed to send message.", error.text);
        alert("Failed to send message. Please try again later.");
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='Contact' className="min-h-screen bg-primary flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-10 mb-10 text-white font-bold">Contact</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4">
        <div className="w-full md:w-1/2 flex flex-col text-2xl text-white px-4 mb-8 md:mb-0">
          <p className="pb-5">If you want to discuss more in detail, please contact me</p>
          <p className="py-2"><span className="font-bold">Email:</span> venkatvignesh72@gmail.com</p>
          <p className="py-2"><span className="font-bold">Phone:</span> +91 8870217119</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center">Feedback</h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
