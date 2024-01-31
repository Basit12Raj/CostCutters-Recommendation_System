import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  // State hooks for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copy, setCopy] = useState(false);
  // State hook for user feedback
  const [feedback, setFeedback] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = {
      name,
      email,
      message,
      copy,
    };

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:3001/contact', { // Update with your server's actual address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        const responseBody = await response.json();
        setFeedback(responseBody.message); // This message should be 'Your message was sent successfully!'
        
        // Optionally, clear the form fields if the message was sent successfully
        setName("");
        setEmail("");
        setMessage("");
        setCopy(false);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // Handle errors in case the network request failed
      setFeedback("There was a problem submitting your message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-md mx-auto mt-16 p-6 rounded-lg shadow-md bg-gray-400"
    >
      <h1 className="text-3xl font-semibold mb-4 text-black">Contact Us</h1>

      {/* Include feedback for the user */}
      {feedback && <div className="mb-4 p-2 border rounded bg-red-200">{feedback}</div>}

      {/* The rest of your form goes here */}
      {/* ... input fields, labels, and the submit button ... */}

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4 p-2 border rounded h-32 focus:outline-none focus:border-blue-500"
      />

      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={copy}
          onChange={(e) => setCopy(e.target.checked)}
          className="mr-2"
        />
        Send me a copy of this message
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleSubmit}
      >
        Send
      </button>
    </motion.div>
  );
};

