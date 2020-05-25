import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function FormList({ searchField }) {
  const forms = useSelector((state) => state.formList);

  const filteredForms = forms.formList.filter((form) =>
    form.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <ListGroup>
      {filteredForms.map((form) => (
        <ListGroup.Item
          key={form.name}
          action
          href={`#${encodeURI(form.name.toLowerCase())}`}
        >
          {form.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
