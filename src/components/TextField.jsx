import React, {useContext} from "react";
import {context} from '../context/context'
import { FormGroup, Label, Input } from 'reactstrap'

const TextField = () => {
  const { amount, setAmount } = useContext(context);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <FormGroup>
      <Label for="">Amount of Questions</Label>
      <Input id='amount' name='amount' type="number" onChange={handleChange} />
    </FormGroup>
  );
}

export default TextField;
