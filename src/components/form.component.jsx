import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

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
                <h4 className="mr-auto p-2">{selectedForm.name}</h4><Button >Geri</Button>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{selectedForm.description}</p>

              <Form></Form>
              {selectedForm.fields.map((field) => <FormItem key={field.name} name={field.name} type={field.dataType==='STRING'? 'text' : 'number'}/>)}
            </div>
            <div className="card-footer">
              <Button variant="btn btn-primary">Gönder</Button>
            </div>
          </div>
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
};

export default FormInstance;

export const FormItem = ({name, type}) => {
  return (
    <div>
      <Form.Group controlId={name}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type}/>
      </Form.Group>
    </div>
  );
};
