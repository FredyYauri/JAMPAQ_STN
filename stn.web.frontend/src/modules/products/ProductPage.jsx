import React, { useEffect, useState } from 'react'
import ToDoList from '../../components/common/ToDoList'
import { Card } from 'react-bootstrap'

export const ProductPage = () => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions({
      list: toDoListData,
      update: {
        updateAction: updateAction,
      },
      delete: {
        deleteAction: deleteAction,
      },
      detail: {
        detailAction: detailAction,
      },
    })
  }, [])

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
    {
      id: "#847",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#846",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#845",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#844",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#843",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#842",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
    {
      id: "#841",
      taskTitle: "React App Deployment",
      assignedTo: "Isabella Evans",
      dueDate: "15 Apr 2024",
      priority: "High",
      status: "finished",
    },
  ];
  const updateAction = (id) => {
    //TODO: Implementar la acción de actualizar
    console.log('Update Action', id);
  }
  const deleteAction = (id) => {
    //TODO: Implementar la acción de eliminar
    console.log('Delete Action', id);
  }
  const detailAction = (id) => {
    //TODO: Implementar la acción de detalle
    console.log('Detail Action', id);
  }
  return (
    <Card className="bg-white border-0 rounded-3 mb-4">
      <Card.Body className="p-4">
        <h4 className="fs-18 mb-4">PRODUCTOS</h4>
        <ToDoList options={options} />
      </Card.Body>
    </Card>
  )
}
