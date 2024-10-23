import React, { useEffect, useRef, useState } from 'react'
import { EliminarProducto, ObtenerProductos } from '../../services/Services';
import ToDoList from '../../components/common/ToDoList';
import DetailProduct from './DetailProduct';
import { useStnStore } from '../../stores/useStateStore';
import NewProduct from './NewProduct';

const ListProductComponent = () => {
    const { setModalContent, showModalError, setLoading } = useStnStore();
    const [fetchData, setFetchData] = useState([]);
    const [optionsList, setOptionsList] = useState();
    const formRef = useRef();

    useEffect(() => {
        setLoading(true);
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
            if(data.status == 0){
                setFetchData(data.data);
            }else{
                setFetchData([]);
            }
            setLoading(false);
        });
    }

    const columns = [
        { label: "ID", field: "id" },
        { label: "Descripción", field: "descripcion" },
        { label: "Codigo", field: "codigo" },
        { label: "Tipo", field: "tipo" },
        { label: "UM", field: "unidad" },
        { label: "Stock Mínimo", field: "stockMinimo" },
        { label: "Stock Actual", field: "stockActual" },
        { label: "Rep.", field: "reposicion" },
        { label: "Estado", field: "estado" },
    ];

    const updateAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Editar Producto',
            body: (<NewProduct
                ref={formRef}
                idProduct={id}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Guardar',
            onAction: () => {
                if (formRef.current) {
                    formRef.current.editProduct(listarProductos);
                }
            },
        })
    }
    const deleteAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Eliminar Producto',
            body: `¿Está seguro de eliminar el producto con ID: ${id}?`,
            size: 'sm',
            labelClose: 'Cancelar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Eliminar',
            onAction: () => {
                setLoading(true);
                EliminarProducto(id).then((data) => {
                    if (data.data) {
                        listarProductos();
                    } else {
                        showModalError('Error al eliminar el producto');
                    }
                    setModalContent({ isOpen: false })
                });
            }
        });
    }
    const detailAction = (id) => {
        setModalContent({
            isOpen: true,
            title: 'Detail Product',
            size: 'md',
            body: <DetailProduct IDProducto={id} />,
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
        });
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
                    formRef.current.saveProduct(listarProductos);

                }
            },
        })
    }
    return (
        <>
            {optionsList && <ToDoList
                options={optionsList}
                data={fetchData}
                columns={columns} />}
        </>
    )
}

export default ListProductComponent;
