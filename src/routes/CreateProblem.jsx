import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const CreateProblem = () => {
  const [problem, setProblem] = useState({
    title: '',
    body: '',
    inputDescription: '',
    outputDescription: '',
    difficulty: '',
    tags: [],
    testCases: [{ input: '', output: '' }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProblem({
      ...problem,
      [name]: value,
    });
  };

  const handleTagChange = (tags) => {
    setProblem({ ...problem, tags });
  };

  const handleTestCaseChange = (index, field, value) => {
    const updatedTestCases = [...problem.testCases];
    updatedTestCases[index][field] = value;
    setProblem({ ...problem, testCases: updatedTestCases });
  };

  const addTestCase = () => {
    setProblem({
      ...problem,
      testCases: [...problem.testCases, { input: '', output: '' }],
    });
  };

  const removeTestCase = (index) => {
    const updatedTestCases = [...problem.testCases];
    updatedTestCases.splice(index, 1);
    setProblem({ ...problem, testCases: updatedTestCases });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(problem);
    // Add logic to submit the problem to your backend API.
  };

  return (
    <Container>
      <h1>Create Problem</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="problemTitle">
          <Form.Label>Problem Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={problem.title}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemBody">
          <Form.Label>Problem Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="body"
            value={problem.body}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="inputDescription">
          <Form.Label>Input Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="inputDescription"
            value={problem.inputDescription}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="outputDescription">
          <Form.Label>Output Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="outputDescription"
            value={problem.outputDescription}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemDifficulty">
          <Form.Label>Problem Difficulty</Form.Label>
          <Form.Control
            as="select"
            name="difficulty"
            value={problem.difficulty}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="problemTags">
          <Form.Label>Problem Tags</Form.Label>
          <Form.Control
            type="text"
            name="tags"
            value={problem.tags.join(', ')}
            onChange={(e) => handleTagChange(e.target.value.split(', '))}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Test Cases</Form.Label>
          {problem.testCases.map((testCase, index) => (
            <Row key={index}>
              <Col md={5}>
                <Form.Control
                  type="text"
                  placeholder="Input"
                  value={testCase.input}
                  onChange={(e) =>
                    handleTestCaseChange(index, 'input', e.target.value)
                  }
                  required
                />
              </Col>
              <Col md={5}>
                <Form.Control
                  type="text"
                  placeholder="Expected Output"
                  value={testCase.output}
                  onChange={(e) =>
                    handleTestCaseChange(index, 'output', e.target.value)
                  }
                  required
                />
              </Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => removeTestCase(index)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button variant="secondary" onClick={addTestCase} className="mt-3">
            Add Test Case
          </Button>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProblem;



