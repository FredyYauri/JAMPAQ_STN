import React, { useEffect, useRef, useState } from 'react'
import { EliminarProducto, ObtenerProductos } from '../../services/Services';
import ToDoList from '../../components/common/ToDoList';
import DetailProduct from './DetailProduct';
import { useStnStore } from '../../stores/useStateStore';
import NewProduct from './NewProduct';

const ListProductComponent = () => {
    const { setModalContent, showModalError } = useStnStore();
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
        listarProductos();
    }, [])

    const listarProductos = () => {
        ObtenerProductos().then((data) => {
            setFetchData(data.data);
        });
    }

    const columns = [
        { label: "ID", field: "Id" },
        { label: "Descripción", field: "Descripcion" },
        { label: "Codigo", field: "Codigo" },
        { label: "Tipo", field: "Tipo" },
        { label: "UM", field: "Unidad" },
        { label: "Stock Mínimo", field: "StockMinimo" },
        { label: "Stock Actual", field: "StockActual" },
        { label: "Rep.", field: "Reposicion" },
        { label: "Estado", field: "Estado" },
    ];

    const updateAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Editar Producto',
            body: (<NewProduct
                ref={formRef}
                idProduct = {id}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Guardar',
            onAction: () => {
                if (formRef.current) {
                    formRef.current.saveProduct();
                }
            },
        })
    }
    const deleteAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Eliminar Producto',
            body: '¿Está seguro de eliminar el producto?',
            size: 'sm',
            labelClose: 'Cancelar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Eliminar',
            onAction: () => {
                EliminarProducto(id).then((data) => {
                    if (data.data) {
                        listarProductos();
                        setModalContent({ isOpen: false })
                    }else{
                        showModalError('Error al eliminar el producto');
                    }
                });
            }
        });
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
            title: 'Nuevo Producto',
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
                // setModalContent({ isOpen: false });
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
