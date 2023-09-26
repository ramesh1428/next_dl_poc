'use client'
import React, { FC, FormEvent, useState } from 'react';

interface StudentSignupProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    address: string;
    zipCode: string;
    course: string;
  }) => void;
}

// Defines a React functional component called "StudentSignup" that renders a form for students to sign up.
const StudentSignup: FC<StudentSignupProps> = ({ onSubmit }) => {
  // Defines a state variable called "formData" using the "useState" hook, with empty strings as initial values for the form fields.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    zipCode: '',
    course: '',
  });

  // Defines a function called "handleInputChange" that is called whenever the user types something into one of the form fields.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // Extracts the "id" and "value" properties from the event target.
    const { id, value } = e.target;
    // Updates the "formData" state variable with the new value for the field that was changed.
    setFormData({ ...formData, [id]: value });
  };

  // Defines a function called "handleSubmit" that is called when the user submits the form.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/studentRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration was successful, you can handle the response here
        alert('Registration successful!');
      } else {
        // Registration failed, handle the error here
        const data = await response.json();
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again later.');
    }
  };



  // The input fields are styled using Tailwind CSS classes.
  // The "onChange" prop is set to the "handleInputChange" function, which updates the "formData" state variable whenever the user types something into one of the fields.
  // The "onSubmit" prop is set to the "handleSubmit" function, which is called when the user submits the form.
  return (
    <div className="container mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-gradient-to-r from-purple-300 via-pink-400 to-red-400">
      <h1 className="text-2xl mb-6">Student Signup</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter your zip code"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
            <option value="ASP.NET">ASP.NET</option>
          </select>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 w-full md:w-40"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

// Exports the "StudentSignup" function as the default export, so it can be imported and used in other parts of the application.
export default StudentSignup;