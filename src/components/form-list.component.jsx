import React from "react";
import { ListGroup } from "react-bootstrap";

export default function FormList({ forms, searchField }) {
  const filteredForms = forms.filter((form) =>
    form.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <ListGroup>
      {filteredForms.map((form) => (
        <ListGroup.Item action href={`#${encodeURI(form.name.toLowerCase())}`}>
          {form.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
