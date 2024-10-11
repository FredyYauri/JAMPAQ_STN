import React from 'react'
import ToDoList from '../../components/common/ToDoList'
import { Card } from 'react-bootstrap'

export const ProductPage = () => {
  return (
    <Card className="bg-white border-0 rounded-3 mb-4">
      <Card.Body className="p-4">
        <h4 className="fs-18 mb-4">PRODUCTOS</h4>
        <ToDoList />
      </Card.Body>
    </Card>
  )
}
