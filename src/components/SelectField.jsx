import React, { useState, useContext } from "react";
import { context } from "../context/context";
import { Form, Input, Label } from "reactstrap";

const SelectField = props => {
    const {label, options} = props;
    const [value, setValue] = useState();
    const { difficulty, setDifficulty, type, setType, category, setCategory} = useContext(context);

    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
          case "Category":
            setCategory(e.target.value);
            break;
          case "Difficulty":
            setDifficulty(e.target.value);
            break;
          case "Type":
            setType(e.target.value);
            break;
          default:
            return;

        }
    }

  return (
    <Form>
        <Label>{label}</Label>
      <Input className="mb-3" type="select" value={value} onChange={handleChange}>
        {options.map(({id, name}) => (
          <option value={id} key={id}>{name}</option>
        ))}
      </Input>
    </Form>
  );
}

export default SelectField;
