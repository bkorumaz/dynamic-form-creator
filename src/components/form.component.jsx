import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FormInstance = ({ match }) => {
  const forms = useSelector((state) => state.formList);
  const selectedForm = forms.formList.filter(
    (form) => form.name.toLowerCase() === match.params.formId
  )[0];
  console.log(selectedForm);

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm={2} />
        <Col mb={4} className="grid-margin" sm={8}>
          <div className="card h-100">
            <div className="card-header">
              <div className="d-flex">
                <h4 className="mr-auto p-2">{selectedForm.name}</h4>
                <Link to="/"><Button variant="secondary">Geri</Button></Link>
              </div>
            </div>
            <Form>
              <div className="card-body">
                <p className="card-text">{selectedForm.description}</p>

                {selectedForm.fields.map((field) => (
                  <FormItem
                    key={field.name}
                    name={field.name}
                    type={field.dataType === "STRING" ? "text" : "number"}
                    isRequired={field.required}
                  />
                ))}
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary" type="submit" >Gönder</Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
};

export default FormInstance;

export const FormItem = ({ name, type, isRequired }) => {
  return (
    <div>
      <Form.Group controlId={name}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} required={isRequired} />
      </Form.Group>
    </div>
  );
};
