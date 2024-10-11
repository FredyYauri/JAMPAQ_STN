"use client";

import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const toDoListData = [
  {
    id: "#854",
    taskTitle: "Network Infrastructure",
    assignedTo: "Oliver Clark",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#853",
    taskTitle: "Cloud Migration",
    assignedTo: "Ethan Baker",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#852",
    taskTitle: "Website Revamp",
    assignedTo: "Sophia Carter",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: "#851",
    taskTitle: "Mobile Application",
    assignedTo: "Ava Cooper",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#850",
    taskTitle: "System Deployment",
    assignedTo: "Isabella Evans",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#849",
    taskTitle: "App Deployment",
    assignedTo: "Isabella Evans",
    dueDate: "5 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#848",
    taskTitle: "React App Deployment",
    assignedTo: "Isabella Evans",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
];

const ToDoList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">To Do List</h3>

              <div className="d-flex align-items-center gap-2">
                <SearchForm />

                <div className="text-end">
                  <button
                    className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                    onClick={handleShow}
                  >
                    <span className="py-sm-1 d-block">
                      <i className="ri-add-line"></i>
                      <span>Add New Task</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="default-table-area style-two to-do-list padding-style">
            <div className="table-responsive">
              <Table className="align-middle">
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
                    <th scope="col">Task Title</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {toDoListData &&
                    toDoListData.slice(0, 7).map((value, i) => (
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

                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="visibility"
                                size={16}
                                className="text-primary"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="edit"
                                size={16}
                                className="text-body"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="delete"
                                size={16}
                                className="text-danger"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="border-bottom p-4" closeButton>
          <Offcanvas.Title className="fs-18 mb-0">Create Task</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-4">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="label">Task ID</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Task ID"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Task Title</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Task Title"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Assigned To</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Assigned To"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Due Date</Form.Label>
              <Form.Control type="date" className="text-dark" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Priority</Form.Label>
              <Form.Select
                className="form-control text-dark"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="0">High</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Status</Form.Label>
              <Form.Select
                className="form-control text-dark"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="0">Pending</option>
                <option value="1">In Progress</option>
                <option value="2">Cancelled</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Action</Form.Label>
              <Form.Select
                className="form-control text-dark"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="d-flex gap-3">
              <Button variant="primary" type="submit" className="text-white fw-semibold py-2 px-2 px-sm-3">
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line text-white"></i> {' '}
                  <span>Create Task</span>
                </span>
              </Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ToDoList;
