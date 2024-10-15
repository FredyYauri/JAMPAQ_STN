"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Form from 'react-bootstrap/Form';
import PaginationTable from "./Pagination";
import { useStnStore } from "../../../stores/useStateStore";

const ToDoList = ({ options }) => {
  const [listView, setListView] = useState([]);
  const numItemsTable = useStnStore(state => state.numItemsTable);
  const [items, setItems] = useState();
  const setCurrenItems = (items) => {
    setItems(items);
  }

  // TODO: asignando la lista original a items
  useEffect(() => {
    setListView(options.list);
  }, [options.list])


  // Función para manejar el filtrado
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    if (searchTerm === "") {
      setListView(options.list); // Si no hay búsqueda, muestra la lista completa
    } else {
      const filteredData = options.list.filter((item) =>
        item.taskTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setListView(filteredData);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <SearchForm onSearch={handleSearch} />

              </div>
              <div className="text-end">
              { options.nameAction && <button
                  className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                  onClick={() => { options.acction() }}
                >
                  <span className="py-sm-1 d-block">
                    <i className="ri-add-line"></i>
                    <span>{ options.nameAction }</span>
                  </span>
                </button>
}
              </div>
            </div>
          </div>

          <div className="default-table-area style-two to-do-list padding-style">
            <div className="table-responsive">
              <Table className="align-middle allWidth">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label="ID"
                        />
                      </Form>
                    </th>
                    <th scope="col">Description</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">UM</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rep.</th>
                    <th scope="col">Opcion</th>
                  </tr>
                </thead>

                <tbody>
                  {items &&
                    items.slice(0, numItemsTable).map((value, i) => (
                      <tr key={i}>
                        <td className="text-body">
                          <Form>
                            <Form.Check
                              type="checkbox"
                              id={value.id}
                              label={value.id}
                            />
                          </Form>
                        </td>

                        <td className="text-body">{value.taskTitle}</td>

                        <td>{value.assignedTo}</td>

                        <td className="text-body">{value.dueDate}</td>

                        <td className="text-body">{value.priority}</td>

                        <td>
                          <span
                            className={`badge bg-opacity-10 p-2 fs-12 fw-normal text-capitalize ${value.status}`}
                          >
                            {value.status}
                          </span>
                        </td>

                        <td className="text-body">{value.dueDate}</td>

                        <td className="text-body">{value.priority}</td>

                        <td>
                          <div className="d-flex align-items-center gap-1">
                            {options.detail && <button
                              className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              onClick={() => options.detail.detailAction(value.id)}
                            >
                              <MaterialSymbol
                                icon="visibility"
                                size={16}
                                className="text-primary"
                              />
                            </button>}

                            {options.update && <button
                              className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              onClick={() => options.update.updateAction(value.id)}
                            >
                              <MaterialSymbol
                                icon="edit"
                                size={16}
                                className="text-body"
                              />
                            </button>}

                            {options.delete && <button
                              className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                              onClick={() => options.delete.deleteAction(value.id)}
                            >
                              <MaterialSymbol
                                icon="delete"
                                size={16}
                                className="text-danger"
                              />
                            </button>}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <PaginationTable list={listView} setCurrenItems={setCurrenItems} />
            </div>
          </div>
        </Card.Body>
      </Card>

    </>
  );
};

export default ToDoList;
