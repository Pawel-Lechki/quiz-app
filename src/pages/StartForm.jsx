import React from "react";
import { Container, Row, Col, Button, Spinner, Form } from "reactstrap";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import useAxios from "../hooks/useAxios";
import { useNavigate } from 'react-router-dom'

function StartForm() {
  const { response, error, loading } = useAxios({ url: "api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return <Spinner className="mt-5 mx-auto">Loading...</Spinner>;
  }

  const typeOptions = [
    { id: "multiple", name: "Multiple" },
    { id: "boolean", name: "True / False" },
  ];

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/questions');
  }

  return (
    <Container>
      <Row>
        <Col className="mt-5 m-auto" lg="6" md="6">
          <Form onSubmit={handleSubmit}>
            <SelectField
              options={response.trivia_categories}
              label="Category"
            />
            <SelectField options={typeOptions} label="Type" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <TextField />
            <Button color="primary" size="lg">
              Start Quiz
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default StartForm;
