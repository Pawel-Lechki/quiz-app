import React, {useContext} from 'react'
import {context} from '../context/context'
import { useNavigate } from 'react-router-dom'
import {Container, Row, Col, Button} from 'reactstrap'

function QuizResult() {
  const {score, setScore, amount, setAmount} = useContext(context);
  const navigate = useNavigate();

  const handleRestart = () => {
    setScore(0);
    setAmount(10);
    navigate('/');
  }
  return (
    <Container>
      <Row className="mt-5 m-auto border bg-light p-5">
        <Col >
          <h2>Congratulations!</h2>
          <p>Your score is: <span>{score}</span></p>
        </Col>
        <Button size="lg" color="primary" onClick={handleRestart}>Play Again</Button>
      </Row>
    </Container>
  )
}

export default QuizResult