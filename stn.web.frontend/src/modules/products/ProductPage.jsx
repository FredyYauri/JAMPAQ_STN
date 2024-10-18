import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import HeadBreadCrumb from '../../components/common/headBreadCrumb'
import ListProductComponent from './ListProduct'

export const ProductPage = () => {


  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
         <HeadBreadCrumb options={ ['Logística', 'Productos']} title={ 'Productos' }/>
         <ListProductComponent />
        </Card.Body>
      </Card>
      
    </>
  )
}
