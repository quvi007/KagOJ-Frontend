import { useState } from 'react';
import '../css/CreateProblem.css'; // Import your custom CSS file

const CreateProblem = () => {
  const [problemTitle, setProblemTitle] = useState('');
  const [problemBody, setProblemBody] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [outputDescription, setOutputDescription] = useState('');
  const [testcases, setTestcases] = useState([
    { input: '', output: '' },
    { input: '', output: '' },
  ]);

  const handleTestcaseChange = (index, field, value) => {
    const updatedTestcases = [...testcases];
    updatedTestcases[index][field] = value;
    setTestcases(updatedTestcases);
  };

  const addTestcase = () => {
    setTestcases([...testcases, { input: '', output: '' }]);
  };

  const removeTestcase = (index) => {
    const updatedTestcases = [...testcases];
    updatedTestcases.splice(index, 1);
    setTestcases(updatedTestcases);
  };

  const handleSubmit = () => {
    // Perform submission logic here
    console.log('Submitted data:', {
      problemTitle,
      problemBody,
      inputDescription,
      outputDescription,
      testcases,
    });
  };

  return (
    <div className="create-problem-container">
      <h1>Create Problem</h1>
      <div className="input-container">
        <label htmlFor="problem-title">Problem Title</label>
        <input
          type="text"
          id="problem-title"
          className="input-field"
          value={problemTitle}
          onChange={(e) => setProblemTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="problem-body">Problem Body</label>
        <textarea
          id="problem-body"
          className="input-field textarea"
          value={problemBody}
          onChange={(e) => setProblemBody(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="input-description">Input Description</label>
        <textarea
          id="input-description"
          className="input-field textarea"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="output-description">Output Description</label>
        <textarea
          id="output-description"
          className="input-field textarea"
          value={outputDescription}
          onChange={(e) => setOutputDescription(e.target.value)}
        />
      </div>

      <div className="testcases-container">
        <h2>Testcases</h2>
        {testcases.map((testcase, index) => (
          <div key={index} className="testcase">
            <div className="testcase-header">
              <span className="testcase-number">Testcase {index + 1}</span>
              <button
                className="remove-btn"
                onClick={() => removeTestcase(index)}
              >
                Remove
              </button>
            </div>
            <div className="testcase-input">
              <label>Input</label>
              <textarea
                value={testcase.input}
                onChange={(e) =>
                  handleTestcaseChange(index, 'input', e.target.value)
                }
              />
            </div>
            <div className="testcase-output">
              <label>Output</label>
              <textarea
                value={testcase.output}
                onChange={(e) =>
                  handleTestcaseChange(index, 'output', e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <button className="add-testcase-btn" onClick={addTestcase}>
          Add Testcase
        </button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateProblem;



