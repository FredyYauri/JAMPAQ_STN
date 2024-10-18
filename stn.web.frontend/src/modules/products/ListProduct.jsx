import React, { useEffect, useRef, useState } from 'react'
import { ObtenerProducto } from '../../services/Services';
import ToDoList from '../../components/common/ToDoList';
import DetailProduct from './DetailProduct';
import { useStnStore } from '../../stores/useStateStore';
import NewProduct from './NewProduct';

const ListProductComponent = () => {
    const { setModalContent } = useStnStore();
    const [fetchData, setFetchData] = useState([]);
    const [optionsList, setOptionsList] = useState();
    const formRef = useRef();

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
        ObtenerProducto().then((data) => {
            setFetchData(data.data);
        });
    }, [])

    const columns = [
        { label: "ID", field: "ID" },
        { label: "Descripción", field: "Descripcion" },
        { label: "Codigo", field: "Codigo" },
        { label: "UM", field: "Unidad" },
        { label: "Tipo", field: "Factor" },
        { label: "Estado", field: "Estado" },
        { label: "Stock Mínimo", field: "StockTransito" },
        { label: "Stock Actual", field: "StockDisponible" },
        { label: "Rep.", field: "Observacion" },
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
        setModalContent({
            isOpen: true,
            title: 'Detail Product',
            body: <DetailProduct />,
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Aceptar',
            onAction: () => {
                console.log('Detail Action');
                setModalContent({ isOpen: false });
            },
        });
        console.log('Detail Action', id);
    }
    const showModalNewProduct = () => {
        setModalContent({
            isOpen: true,
            title: 'Add New Product',
            body: (<NewProduct
                ref={formRef}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Guardar',
            onAction: () => {
                if (formRef.current) {
                    formRef.current.saveProduct();
                }
                setModalContent({ isOpen: false });
            },
        })
    }
    return (
        <div>
            {optionsList && <ToDoList
                options={optionsList}
                data={fetchData}
                columns={columns} />}
        </div>
    )
}

export default ListProductComponent;
