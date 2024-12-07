import React, { useState } from 'react';
import Split from 'react-split';
import { ControlledEditor } from '@monaco-editor/react';
import './ExamPage.css';

const ExamPage = ({ questions, initialCode }) => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRun = () => {
    console.log('Run Code:', code);
  };

  const handleSubmit = () => {
    console.log('Submit Code:', code);
  };

  return (
    <div className="exam-page">
      <nav className="navbar">
        <span className="timer">Time Remaining: 01:30:00</span>
        <span className="exam-name">Code Challenge</span>
      </nav>

      <Split className="split-container" sizes={[30, 70]} gutterSize={10}>
        {/* Left Pane - Questions */}
        <div className="left-pane">
          <h3>Questions</h3>
          {questions.map((q, index) => (
            <div key={index} className="question">
              <h4>Question {index + 1}</h4>
              <p>{q.text}</p>
            </div>
          ))}
        </div>

        {/* Right Pane - Code Editor */}
        <div className="right-pane">
          <div className="editor-toolbar">
            <label htmlFor="language-select">Language: </label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>
          <ControlledEditor
            height="70vh"
            language={language}
            value={code}
            onChange={(_, value) => handleEditorChange(value)}
          />
          <div className="action-buttons">
            <button onClick={handleRun}>Run</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </Split>
    </div>
  );
};

export default ExamPage;
