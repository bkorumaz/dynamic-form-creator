import React from "react";
import "./App.css";
import { ListGroup, Button } from "react-bootstrap";
import { FORM_DATA } from './data/forms'



function App() {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mb-4 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                  This one is a button
                </ListGroup.Item>
              </ListGroup>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
