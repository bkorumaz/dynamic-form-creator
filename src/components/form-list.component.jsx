import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'


function FormList({ searchField, history }) {
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
          onClick={() => history.push(`/forms/${encodeURI(form.name.toLowerCase())}`)}
        >
          {form.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default withRouter(FormList);