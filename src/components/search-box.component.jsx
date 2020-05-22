import React from "react";
import { Form, FormControl } from "react-bootstrap";

function SearchBox({ className, placeholder, handleChange }) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    </Form>
  );
}

export default SearchBox;
