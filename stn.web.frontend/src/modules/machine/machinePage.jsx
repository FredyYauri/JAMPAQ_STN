import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { ListMachine } from './ListMachine'
import HeadBreadCrumb from '../../components/common/headBreadCrumb';

export const MachinePage = () => {
  return (
    <>
     <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
         <HeadBreadCrumb options={ ['Equipos', 'Maestro Equipos']} title={ 'Equipos' }/>
         <ListMachine />
        </Card.Body>
      </Card>
      
    </>
  )
}
