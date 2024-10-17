import React, { useState } from 'react'

const ListProductComponent = () => {
    const [fetchData, setFetchData] = useState([]);

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
    
    const options = {
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
      };
  return (
    <div>        
        <ToDoList
            options={options}
            data={fetchData}
            columns={columns} />
    </div>
  )
}

export default ListProductComponent;
