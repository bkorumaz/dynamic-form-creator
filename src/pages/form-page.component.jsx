import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home-page.component";
import FormInstance from "../components/form.component";

const FormPage = ({ match, formData }) => {
  console.log(match);
  
  console.log("form page rendered")
  return (
    <div>
      <Route exact path={`${match.path}`} component={HomePage} />
      <Route path={`${match.path}/:formId`} component={FormInstance} />
    </div>
  );
};

export default FormPage;
