import React, { useEffect, useState } from 'react'
import ToDoList from '../../components/common/ToDoList'
import { Card } from 'react-bootstrap'
import ContentModal from '../../components/common/modals/modalForm/modalForm'
import { NewMachine } from './NewMachine'

export const machineFile = () => {


const [options, setOptions] = useState('{}');
const [showModal, setShowModal] = useState(false);
  
const [descripcion, setDescripcion] = useState('');
const [marca,setMarca]=useState('');
const [serie,setSerie]=useState('');
const [modelo,setModelo]=useState('');
const [periodo,setPeriodo]=useState('');

useEffect(() => {
  setOptions({
    nameAction: 'Nuevo Equipo',
    acction: showModalNewMachine,
  })
}, [])

const showModalNewMachine = () => {
  setShowModal(true);
}

const closeModalNewMachine = () => {
  console.log('Cerrar modal');
  setShowModal(false);
}

// Métodos para el modal - Nuevo Equipo
const optionsModal = {
  show: showModal,
  title: 'Nuevo Equipo',
  onHide: closeModalNewMachine,
  nameAction: 'Guardar',
  onAction: () => {
    //TODO: Implementar la acción de guardar

  },
}

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Maestro de Equipos</h4>
          <ToDoList options={options} />
        </Card.Body>
      </Card>

      <ContentModal
        options={optionsModal}
      >
<NewMachine/>


      </ContentModal>
    </>
  )
}
