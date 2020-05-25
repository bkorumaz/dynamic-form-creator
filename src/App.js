import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SearchBox from "./components/search-box.component";
import FormList from "./components/form-list.component";
import { useSelector, useDispatch } from "react-redux";
import { createForm } from "./redux/root-reducer";
import { Modal, Col, Form, Container, Row } from "react-bootstrap";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [searchField, setSearchField] = useState("");
  const forms = useSelector((state) => state.formList);



  const handleChange = (input) => {
    setSearchField(input.target.value);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row className="mt-5">
          <Col sm={2} />
          <Col mb={4} className="grid-margin" sm={8}>
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex">
                  <h4 className="mr-auto p-2">Formlar</h4>
                  <SearchBox
                    placeholder="Ara"
                    handleChange={handleChange}
                    className="p-2"
                  />
                </div>
              </div>
              <FormList forms={forms} searchField={searchField} />
              <div className="card-footer">
                <Button
                  variant="btn btn-primary"
                  onClick={() => setModalShow(true)}
                >
                  Yeni Form Oluştur
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default App;

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    createdAt: Date(),
    fields: [
      { required: true, name: "Ad", dataType: "STRING" },
      { required: true, name: "Soyad", dataType: "STRING" },
      { required: false, name: "Yaş", dataType: "NUMBER" },
    ],
  });

  const handleSubmit = (event) => {
    console.log(formData);
    dispatch(createForm(formData));
    props.onHide();
    event.preventDefault();
  };

  return (
    <Modal
      animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Yeni Form Oluştur
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formGridName">
            <Form.Label>Adı</Form.Label>
            <Form.Control
              placeholder="Test form"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGridDescription">
            <Form.Label>Açıklama:</Form.Label>
            <Form.Control
              placeholder="Uye bilgi formu"
              value={formData.description}
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="newForm.Feilds">
            <Form.Label>Alanlar:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={JSON.stringify(formData.fields)}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  fields: JSON.parse(event.target.value),
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Oluştur
          </Button>
          <Button onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
