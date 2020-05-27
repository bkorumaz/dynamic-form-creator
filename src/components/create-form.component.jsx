import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../redux/form.actions";
import FormField from "./form-field.component";
import { Modal, Form, Button } from "react-bootstrap";
import { EMPTY_FORM } from "../data/forms.data";

function CreateFormModal(props) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    createdAt: Date(),
    fields: [{ required: true, name: "", dataType: "STRING", id: 0}],
  });

  const [fieldIdCounter, setFieldIdCounter] = useState(1);

  const handleSubmit = (event) => {
    dispatch(createForm(formData));
    props.onHide();
    event.preventDefault();
  };

  const handleDeleteField = (id) => {
    setFormData({...formData, fields: formData.fields.filter((field) => field.id !== id)});
  };

  const handleFieldChange = (field) => {
    let fields = formData.fields;
    const foundIndex = fields.findIndex((x) => x.id === field.id);
    fields[foundIndex] = field;
    setFormData({...formData, fields: fields});
  };

  const addField = () => {
    setFormData({...formData, fields: [...formData.fields, {...EMPTY_FIELD, id: fieldIdCounter}]});
    const newId=fieldIdCounter+1;
    setFieldIdCounter(newId);
  }

  const EMPTY_FIELD = EMPTY_FORM.fields[0];

  return (
    <Modal animation={false} {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Yeni Form Oluştur
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formGridName">
            <Form.Label>Form Adı:</Form.Label>
            <Form.Control placeholder="Form Adı" value={formData.name} required onChange={(event) => setFormData({ ...formData, name: event.target.value })}/>
          </Form.Group>

          <Form.Group controlId="formGridDescription">
            <Form.Label>Form Açıklaması:</Form.Label>
            <Form.Control placeholder="Form Açıklaması" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })}/>
          </Form.Group>

          <Form.Group controlId="newForm.Feilds">
            <Form.Label>Alanlar:</Form.Label>
            {formData.fields.length === 0 ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <span>Hiç Alan Oluşturmadın</span>
              </div>
            ) : (
              formData.fields.map((field) => (<FormField key={field.id} fieldData={field} onDelete={handleDeleteField} handleChange={handleFieldChange}/>))
            )}
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={addField}>
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