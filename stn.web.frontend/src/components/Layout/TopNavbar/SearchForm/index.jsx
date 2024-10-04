"use client";

import React from 'react';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchForm = () => {
  return (
    <>
      <Form className="src-form position-relative">
        <Form.Control
          type="text" 
          placeholder="Search here....."
        />
        <Button
          variant="primary"
          type="submit"
          className="src-btn position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0"
        >
          <MaterialSymbol icon="search" />
        </Button>
      </Form>
    </>
  )
}

export default SearchForm;