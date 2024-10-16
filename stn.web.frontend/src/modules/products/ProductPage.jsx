import React, { useEffect, useState } from 'react'
import ToDoList from '../../components/common/ToDoList'
import { Card } from 'react-bootstrap'
import ContentModal from '../../components/common/modals/modalForm/modalForm'
import { NewProduct } from './NewProduct'
import { ObtenerProducto } from '../../services/Services'

export const ProductPage = () => {
  const [options, setOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [tipo, setTipo] = useState('');
  const [stockMinimo, setStockMinimo] = useState('');
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    ObtenerProducto().then((data) => {
      console.log(data.data);
      setFetchData(data.data);
    });
    setOptions({
      actions: true,
      update: {
        updateAction: updateAction,
      },
      delete: {
        deleteAction: deleteAction,
      },
      detail: {
        detailAction: detailAction,
      },
      nameButtonAction: 'Nuevo Producto',
      acctionButton: showModalNewProduct,
    })
  }, [])

  const columns = [
    { label: "ID", field: "ID" },
    { label: "Grupo", field: "Grupo" },
    { label: "Descripción", field: "Descripcion" },
    { label: "UM", field: "Unidad" },
    { label: "Codigo", field: "Codigo" },
    { label: "Factor", field: "Factor" },
    { label: "Stock Transito", field: "StockTransito" },
    { label: "Stock Fisico", field: "StockFisico" },
    { label: "Stock Disponible", field: "StockDisponible" },
    { label: "Observación", field: "Observacion" },
    { label: "Estado", field: "Estado" },
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
  const showModalNewProduct = () => {
    setShowModal(true);
  }

  const closeModalNewProduct = () => {
    setShowModal(false);
  }
  // Métodos para el modal
  const optionsModal = {
    show: showModal,
    title: 'Nuevo Producto',
    onHide: closeModalNewProduct,
    nameAction: 'Guardar',
    onAction: () => {
      //TODO: Implementar la acción de guardar
      console.log('description', description);
      console.log('unidadMedida', unidadMedida);
      console.log('Guardar');
    },
  }

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">PRODUCTOS</h4>
          <ToDoList 
          options={options} 
          data={ fetchData } 
          columns={ columns } />
        </Card.Body>
      </Card>
      <ContentModal
        options={optionsModal}
      >
        <NewProduct
          description={description}
          setDescription={setDescription}
          unidadMedida={unidadMedida}
          setUnidadMedida={setUnidadMedida}
          marca={marca}
          setMarca={setMarca}
          serie={serie}
          setSerie={setSerie}
          tipo={tipo}
          setTipo={setTipo}
          stockMinimo={stockMinimo}
          setStockMinimo={setStockMinimo}
        />
      </ContentModal>
    </>
  )
}
