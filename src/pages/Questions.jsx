import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Spinner, Button } from "reactstrap";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { context } from "../context/context";
import {decode} from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

function Questions() {
  const { score, setScore, difficulty, type, category, amount } =
    useContext(context);
  const navigate = useNavigate();
  // let apiUrl = "&category=linux&limit=10";

  let apiUrl = `/api.php?amount=${amount}`;
  if (category) apiUrl += `&category=${category}`;
  if (difficulty) apiUrl += `&difficulty=${difficulty}`;
  if (type) apiUrl += `&type=${type}`;

  const { response, error, loading } = useAxios({ url: apiUrl });
  // console.log("category: ", category)
  // console.log("difficulty: ", difficulty)
  // console.log("type: ", type)
  // console.log("amount: ", amount)
  //console.log('response:', response);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      
          <Spinner className="m-5">Loading...</Spinner>
         
    );
  }

  const handleAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      setScore(score + 1);
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <Container >
      <Row>
      <Col className="mt-5 m-auto border bg-light p-5">
        <p className="fs-6 fw-lighter">Category: {response.results[questionIndex].category} Difficutly: {response.results[questionIndex].difficulty}</p>
      <Row lg={6} md={6}>
        <Col  className="text-center">
          <h2>Question nr {questionIndex + 1}</h2>
          <p>{decode(response.results[questionIndex].question)}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {options.map((data) => (
            <Button className="m-2" key={data} onClick={handleAnswer}>
              {data}
            </Button>
          ))}
        </Col>
      </Row>
      <Row >
        Score: {score} / {response.results.length}
      </Row>
      </Col>
      </Row>
    </Container>
  );
}

export default Questions;
