import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Form from "react-bootstrap/Form";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Llama a la función de búsqueda cada vez que el valor cambie
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pasa el valor de búsqueda al componente padre
  };

  return (
    <Form className="position-relative table-src-form me-0">
      <Form.Control
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <MaterialSymbol
        icon="search"
        className="position-absolute top-50 start-0 translate-middle-y"
      />
    </Form>
  );
};

export default SearchForm;
