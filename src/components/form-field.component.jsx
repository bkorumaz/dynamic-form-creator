import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";

const FormField = ({ fieldData, onDelete, handleChange }) => {

  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="Field name"
          value={fieldData.name}
          onChange={(event) => handleChange({ ...fieldData, name: event.target.value })}
        />
        <InputGroup.Append>
          <InputGroup.Text>Required</InputGroup.Text>
          <InputGroup.Checkbox
            checked={fieldData.required}
            onChange={(event) => handleChange({ ...fieldData, required: !fieldData.required })}
          />
        </InputGroup.Append>

        <InputGroup.Append>
        <Form.Control as="select" onChange={event => handleChange({...fieldData, dataType: event.target.value})}>
          <option value="NUMBER">Number</option>
          <option selected={fieldData.dataType==="STRING"} value="STRING">Text</option>
        </Form.Control>
        </InputGroup.Append>

        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={() => onDelete(fieldData.id)}>Delete</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default FormField;
