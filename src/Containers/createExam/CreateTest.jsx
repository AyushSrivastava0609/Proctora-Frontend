import React, { useState } from 'react'
import './CreateTest.css'

export default function CreateTest() {
  const [candidates, setCandidates] = useState([])
  const [newEmail, setNewEmail] = useState('')
  const [testName, setTestName] = useState('')
  const [duration, setDuration] = useState(60)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [testType, setTestType] = useState('')
  const [emailReport, setEmailReport] = useState('')

  const addCandidate = () => {
    if (newEmail && !candidates.includes(newEmail)) {
      setCandidates([...candidates, newEmail])
      setNewEmail('')
    }
  }

  const removeCandidate = (email) => {
    setCandidates(candidates.filter(c => c !== email))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted', { testName, duration, startDate, endDate, description, testType, emailReport, candidates })
  }

  return (
    <div className="create-test">
      <h1>Create New Test</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="testName">Test Name</label>
          <input
            id="testName"
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="Enter test name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">Test Duration (minutes)</label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Starts On</label>
            <input
              id="startDate"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Ends On</label>
            <input
              id="endDate"
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Test Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter test description"
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="testType">Test Type</label>
            <select
              id="testType"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              required
            >
              <option value="">Select test type</option>
              <option value="invite">Invite Only</option>
              <option value="open">Open to anyone with link</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="emailReport">Email Report to Candidate?</label>
            <select
              id="emailReport"
              value={emailReport}
              onChange={(e) => setEmailReport(e.target.value)}
              required
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="candidateEmail">Add Candidates' Emails</label>
          <div className="email-input">
            <input
              id="candidateEmail"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter candidate email"
            />
            <button type="button" onClick={addCandidate}>Add</button>
          </div>
        </div>

        <div className="form-group">
          <label>List of Candidates invited ({candidates.length})</label>
          <div className="candidates-list">
            {candidates.map((email, index) => (
              <div key={index} className="candidate-item">
                <span>{email}</span>
                <button type="button" onClick={() => removeCandidate(email)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  )
}

