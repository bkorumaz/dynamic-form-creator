import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../redux/root-reducer";
import { Modal, Col, Form, Container, Row, Button } from "react-bootstrap";

function CreateFormModal(props) {
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
                  fields: event.target.value,
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

export default CreateFormModal;
