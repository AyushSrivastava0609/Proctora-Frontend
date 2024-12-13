import React, { useState } from "react";

function EducatorSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    qualification: "",
    subjects: "",
    teachingExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Submit the data to your server or API
      console.log("Form data submitted: ", formData);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Educator Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="qualification">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="subjects">
            Subjects You Teach
          </label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="teachingExperience">
            Teaching Experience (Years)
          </label>
          <input
            type="number"
            id="teachingExperience"
            name="teachingExperience"
            value={formData.teachingExperience}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default EducatorSignup;
