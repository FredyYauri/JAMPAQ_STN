import React, { useEffect, useState } from 'react'
import ToDoList from '../../components/common/ToDoList'
import { ObtenerEquipos } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';

export const ListMachine = () => {
    const { setModalContent, showModalError } = useStnStore();
    const [optionsList, setOptionsList] = useState();
    const [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        setOptionsList({
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
        });
        listarProductos();
    }, [])

    const listarProductos = () => {
        console.log("listarProductos")
        ObtenerEquipos().then((data) => {
            setFetchData(data.data);
        });
    }

    const columns = [
        { label: "ID", field: "id" },
        { label: "Codigo", field: "codigo" },
        { label: "Descripción", field: "descripcion" },
        { label: "Marca", field: "marca" },
        { label: "Modelo", field: "modelo" },
        { label: "Serie", field: "serie" },
        { label: "Mantenimiento", field: "mantenimiento" },
        { label: "Control", field: "control" },
        { label: "Estado", field: "estado" },
    ];

    const updateAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Editar Equipo',
            body: (<NewMachine
                ref={formRef}
                idProduct = {id}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
        });
    }
    const deleteAction = (id) => {}

    const detailAction = (id) => {}

    const showModalNewProduct = () => {}

  return (
    <div>
    {optionsList && <ToDoList
        options={optionsList}
        data={fetchData}
        columns={columns} />}
</div>
  )
}
