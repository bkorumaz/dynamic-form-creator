import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SearchBox from "./components/search-box.component";
import FormList from "./components/form-list.component";
import { FORM_DATA } from "./data/forms";

function App() {
  const [searchField, setSearchField] = useState("");
  const [forms, setForms] = useState(FORM_DATA);

  const handleChange = (input) => {
    setSearchField(input.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 mb-4 grid-margin">
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
                <Button variant="btn btn-primary" onClick={() => setForms([...forms, {name: "new form"}])}>Yeni Form Oluştur</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
