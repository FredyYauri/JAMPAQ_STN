import React, { useEffect, useRef, useState } from 'react'
import ToDoList from '../../components/common/ToDoList'
import { EliminarEquipo, ObtenerEquipos } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';
import NewMachine from './NewMachine';
import { DetailMachine } from './DetailMachine';

export const ListMachine = () => {
    const { setModalContent, showModalError, setLoading } = useStnStore();
    const [optionsList, setOptionsList] = useState();
    const [fetchData, setFetchData] = useState([]);
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
        listarEquipos();
    }, [])

    const listarEquipos = () => {
        ObtenerEquipos().then((data) => {
            if(data.status == 0){
                setFetchData(data.data);
            }else{
                setFetchData([]);
            }
            setLoading(false);
        }).catch((e) => {
            console.error('Error fetching data:', e);
            setLoading(false);
            showModalError('Error al obtener los equipos');
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
                idMachine={id}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Guardar',
            onAction: () => {
                if (formRef.current) {
                    formRef.current.EditarEquipo(listarEquipos);

                }
            },
        });
    }
    const deleteAction = (id) => {
        console.log('Eliminar:', id);
        setModalContent({
            isOpen: true,
            size: 'sm',
            title: 'Eliminar Equipo',
            body: `¿Está seguro de eliminar el equipo con ID: ${id}?`,
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Eliminar',
            onAction: () => {
                setLoading(true);
                EliminarEquipo(id).then((data) => {
                    console.log('data:', data);
                    if (data.data) {
                        listarEquipos();
                    } else {
                        showModalError('Error al eliminar el equipo');
                    }
                    setModalContent({ isOpen: false })
                });
            }
        });
    }

    const detailAction = (id) => {
        console.log('Detalle:', id);
        setModalContent({
            isOpen: true,
            size: 'lg',
            title: 'Detalle Equipo',
            body: <DetailMachine IdMachine={id} />,
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
        });
    }

    const showModalNewProduct = () => {
        setModalContent({
            isOpen: true,
            title: 'Nuevo Equipo',
            body: (<NewMachine
                ref={formRef}
            />),
            labelClose: 'Cerrar',
            onCancel: () => setModalContent({ isOpen: false }),
            labelAction: 'Guardar',
            onAction: () => {
                if (formRef.current) {
                    formRef.current.GuardarEquipo(listarEquipos);

                }
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
