import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Papa from 'papaparse';
import DatePicker from 'react-datepicker';  // Import the DatePicker
import 'react-datepicker/dist/react-datepicker.css';  // Import the CSS for DatePicker
import './CreateTest.css';

const CreateTest = () => {
  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    candidates: [],
    newEmail: '',
    csvFile: null
  });

  // Handle adding a new candidate manually
  const handleAddCandidate = () => {
    if (formData.newEmail && !formData.candidates.includes(formData.newEmail)) {
      setFormData({
        ...formData,
        candidates: [...formData.candidates, formData.newEmail],
        newEmail: ''
      });
    }
  };

  // Handle CSV file upload
  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        csvFile: file
      });
      Papa.parse(file, {
        complete: (result) => {
          // Assuming the emails are in the first column of the CSV
          const emails = result.data.map(row => row[0]).filter(email => email);
          setFormData(prevState => ({
            ...prevState,
            candidates: [...prevState.candidates, ...emails]
          }));
        },
        header: false,
        skipEmptyLines: true
      });
    }
  };

  // Trigger the hidden file input click
  const handleImportCsvClick = () => {
    document.getElementById('csv-file-input').click();
  };

  return (
    <div className="create-test-container">
      <div className="header">
        <br /><br /><br />
        <h1>Create New Test</h1>
      </div>

      <div className="tabs">
        <button className="tab active">Overview</button>
        <button className="tab">Questions</button>
        <button className="publish-btn">Publish</button>
      </div>

      <div className="form-container">
        <div className="form-group">
          <div className="input-group">
            <label>Test Name</label>
            <input type="text" placeholder="My Sample Test" className="form-input" />
          </div>
          <div className="input-group">
            <label>Test Duration</label>
            <div className="duration-input">
              <input type="number" placeholder="60" className="form-input" />
              <span>mins</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label>Starts On</label>
            <DatePicker
              selected={formData.startDate}
              onChange={date => setFormData({ ...formData, startDate: date })}
              showTimeSelect
              dateFormat="MMM d, yyyy h:mm aa"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label>Ends On</label>
            <DatePicker
              selected={formData.endDate}
              onChange={date => setFormData({ ...formData, endDate: date })}
              showTimeSelect
              dateFormat="MMM d, yyyy h:mm aa"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group full-width">
            <label>Test Description</label>
            <textarea className="form-input" rows="3"></textarea>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label>Test Type</label>
            <select className="form-input">
              <option>Invite Only </option>
              <option>Open to anyone with link</option>
            </select>
          </div>
          <div className="input-group">
            <label>Email Report to Candidate?</label>
            <select className="form-input">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="candidates-section">
          <label>Add Candidates' Emails</label>
          <div className="email-input-container">
            <input
              type="email"
              value={formData.newEmail}
              onChange={(e) => setFormData({ ...formData, newEmail: e.target.value })}
              placeholder="candidate.xyz18@vit.edu"
              className="form-input"
            />
            <button onClick={handleAddCandidate} className="add-email-btn">
              <FiPlus />
            </button>
          </div>

          {/* Hidden CSV file input */}
          <input
            id="csv-file-input"
            type="file"
            accept=".csv"
            onChange={handleCsvUpload}
            className="import-csv-input"
            style={{ display: 'none' }}  // Hide the file input
          />
          <button
            type="button"
            className="import-csv-btn"
            onClick={handleImportCsvClick}
          >
            Import from CSV
          </button>
        </div>

        {formData.candidates.length > 0 && (
          <div className="candidates-list">
            <h3>List of Candidates invited ({formData.candidates.length})</h3>
            {formData.candidates.map((email, index) => (
              <div key={index} className="candidate-email">{email}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTest;
