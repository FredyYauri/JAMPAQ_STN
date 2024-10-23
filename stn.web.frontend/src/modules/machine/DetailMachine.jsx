import React, { useEffect, useState } from 'react'
import { ObtenerEquipo } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';
import { LoadSpinner } from '../../components/common/loaders/spinner';
import { Col, Form, Row } from 'react-bootstrap';

export const DetailMachine = ({ IdMachine }) => {
    const [machine, setMachine] = useState({});
    const [loadingData, setLoadingData] = useState(true);
    const { setModalConfirm } = useStnStore();
    useEffect(() => {
        console.log('IdMachine:', IdMachine);
        ObtenerEquipo(IdMachine).then((data) => {
            console.log('data:', data);
            if (data.status === 0) {
                setMachine(data.data);
                setLoadingData(false);
            } else {
                showError();
            }
            setLoadingData(false);
        }).catch((e) => {
            showError();
            setLoadingData(false);
        });
    }, [IdMachine]);

    const showError = (e) => {
        setModalConfirm({
            isOpen: true,
            title: "Error",
            body: "Error al guardar el producto",
            labelClose: 'Cerrar',
            onCancel: () => setModalConfirm({ isOpen: false }),
        })
    }

    return (
        <>
            {loadingData && <LoadSpinner />}
            {!loadingData && machine && <Row className="justify-content-center">

                <Col md={6}>
                    <Row className='pb-1'><Form.Text><strong>Código:</strong> {machine.codigo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Descripción:</strong> {machine.descripcion}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Marca:</strong> {machine.marca}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Modelo:</strong> {machine.modelo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Serie/Placa:</strong> {machine.serie}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Control Trabajo:</strong> {machine.tipoControlDescripcion}</Form.Text></Row>
                </Col>
                <Col md={6}>
                    <Row className='pb-1'><Form.Text><strong>Valor Registro Inicial:</strong> {machine.valor}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Tipo Mantenimiento:</strong> {machine.tipoMantenimientoDescripcion}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Valor Activo S/.:</strong> {machine.importeMN}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Observaciones:</strong> {machine.estado == 1 ? 'Activo' : 'Inactivo'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Estado:</strong> {machine.estado == 1 ? 'Activo' : 'Inactivo'}</Form.Text></Row>
                </Col>
            </Row>}
        </>

    )
}
