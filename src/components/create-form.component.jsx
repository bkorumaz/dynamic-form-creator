import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../redux/form.actions";
import FormField from "./form-field.component";
import { Modal, Form, Button } from "react-bootstrap";
import { EMPTY_FORM } from "../data/forms";

function CreateFormModal(props) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleSubmit = (event) => {
    console.log(formData);
    dispatch(createForm(formData));
    props.onHide();
    event.preventDefault();
  };

  const handleDeleteField = (id) => {
    setFormData({
      ...formData,
      fields: formData.fields.filter((field) => field.id !== id),
    });
  };

  const handleFieldChange = (field) => {
    let fields = formData.fields;
    const foundIndex = fields.findIndex((x) => x.id === field.id);
    fields[foundIndex] = field;

    setFormData({
      ...formData,
      fields: fields,
    });
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
            <Form.Label>Form Adı:</Form.Label>
            <Form.Control
              value={formData.name}
              required
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGridDescription">
            <Form.Label>Açıklama:</Form.Label>
            <Form.Control
              value={formData.description}
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="newForm.Feilds">
            <Form.Label>Alanlar:</Form.Label>
            {formData.fields.map((field) => (
              <FormField
                fieldData={field}
                onDelete={handleDeleteField}
                handleChange={handleFieldChange}
              />
            ))}
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() =>
                setFormData({
                  ...formData,
                  fields: [
                    ...formData.fields,
                    {
                      ...EMPTY_FORM,
                      id: formData.fields.length,
                    },
                  ],
                })
              }
            >
              Alan Ekle
            </Button>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Kaydet
          </Button>
          <Button onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateFormModal;
