"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import PaginationTable from "./Pagination";
import { useStnStore } from "../../../stores/useStateStore";

const ToDoList = ({ columns, data, options }) => {
  const [filteredData, setFilteredData] = useState([]);
  const numItemsTable = useStnStore(state => state.numItemsTable);
  const [items, setItems] = useState([]);

  const setCurrenItems = (items) => {
    setItems(items);
  }

  // Inicializar `filteredData` con los datos originales (`data`)
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

// Función para manejar el filtrado
const handleSearch = (searchTerm) => {
  if (searchTerm === "") {
    setFilteredData(data); // Si no hay búsqueda, muestra la lista completa
  } else {
    const filtered = data.filter((item) =>
      columns.some((column) =>
        item[column.field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
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
                {options.nameButtonAction && (
                  <button
                    className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                    onClick={() => { options.acctionButton() }}
                  >
                    <span className="py-sm-1 d-block">
                      <i className="ri-add-line"></i>
                      <span>{options.nameButtonAction}</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="default-table-area style-two to-do-list padding-style">
            <div className="table-responsive">
              <Table className="align-middle allWidth">
                <thead>
                  <tr>
                    {columns.map((item, index) => (
                      <th key={index} scope="col">{item.label}</th>
                    ))}
                    {options.actions && <th scope="col">Opcion</th>}
                  </tr>
                </thead>

                <tbody>
                  {items.length > 0 ? (
                    items.slice(0, numItemsTable).map((itemData, index) => (
                      <tr key={index}>
                        {columns.map((column, i) => (
                          <td key={i}>{itemData[column.field]}</td>
                        ))}
                        {options.actions && (
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              {options.detail && (
                                <button
                                  className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                                  onClick={() => options.detail.detailAction(itemData['id'])}
                                >
                                  <MaterialSymbol
                                    icon="visibility"
                                    size={16}
                                    className="text-primary"
                                  />
                                </button>
                              )}
                              {options.update && (
                                <button
                                  className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                                  onClick={() => options.update.updateAction(itemData['id'])}
                                >
                                  <MaterialSymbol
                                    icon="edit"
                                    size={16}
                                    className="text-body"
                                  />
                                </button>
                              )}
                              {options.delete && (
                                <button
                                  className="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                                  onClick={() => options.delete.deleteAction(itemData['id'])}
                                >
                                  <MaterialSymbol
                                    icon="delete"
                                    size={16}
                                    className="text-danger"
                                  />
                                </button>
                              )}
                            </div>
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length + 1} className="text-center">
                        No hay datos
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
              {filteredData && <PaginationTable list={filteredData} setCurrenItems={setCurrenItems} />}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ToDoList;