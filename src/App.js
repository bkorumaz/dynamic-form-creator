import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SearchBox from "./components/search-box.component";
import FormList from "./components/form-list.component";
import CreateFormModal from "./components/create-form.component";
import { useSelector, useDispatch } from "react-redux";
import { createForm } from "./redux/root-reducer";
import { Modal, Col, Form, Container, Row } from "react-bootstrap";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [searchField, setSearchField] = useState("");
  

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
              <FormList searchField={searchField} />
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
      <CreateFormModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default App;
