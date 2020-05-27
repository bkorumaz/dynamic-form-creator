import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const FormField = ({ fieldData, onDelete, handleChange }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl placeholder="Form Alanı" defaultValue={fieldData.name} onChange={(event) => handleChange({ ...fieldData, name: event.target.value })}/>

        <InputGroup.Append>

          <InputGroup.Text>
            <div key={`inline-checkbox`}>
              <Form.Check label="Zorunlu" inline checked={fieldData.required} type="checkbox"
                onChange={(event) => handleChange({ ...fieldData, required: !fieldData.required })}/>
            </div>
          </InputGroup.Text>

          <Form.Control as="select" onChange={(event) => handleChange({ ...fieldData, dataType: event.target.value })}>
            <option defaultValue value="STRING">Metin</option>
            <option value="NUMBER">Sayı</option>
          </Form.Control>

          <Button variant="outline-secondary" onClick={() => onDelete(fieldData.id)}>Sil</Button>

        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default FormField;
