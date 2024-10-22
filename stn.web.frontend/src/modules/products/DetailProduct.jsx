import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Container, Spinner } from 'react-bootstrap';
import { ObtenerProducto } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';

const DetailProduct = ({ IDProducto }) => {
    const [product, setProduct] = useState({});
    const { setModalConfirm, setModalContent } = useStnStore();
    const [loadingData, setLoadingData] = useState(true);
    useEffect(() => {
        ObtenerProducto(IDProducto).then((data) => {
            if (data.status === 0) {
                setProduct(data.data);
                setLoadingData(false);
            } else {
                showError();
            }
            setLoadingData(false);
        }).catch((e) => {
            showError();
            setLoadingData(false);
        });
    }, [IDProducto]);

    const showError = (e) => {
        setModalContent({ isOpen: false });
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
            {loadingData && <Container>
                <Row className="justify-content-center">
                    <Spinner animation="border" variant="success" />
                </Row>
            </Container>
            }
            {!loadingData && product && <Row className="justify-content-center">

                <Col md={6}>
                    <Row className='pb-1'><Form.Text><strong>Código:</strong> {product.codigo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Descripción:</strong> {product.descripcion}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Tipo:</strong> {product.tipo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Unidad de Medida:</strong> {product.unidad}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Marca:</strong> {product.IdMarca !== 0 ? product.descripcionMarca : 'Sin Elegir'}</Form.Text></Row>
                </Col>
                <Col md={6}>
                    <Row className='pb-1'><Form.Text><strong>Stock Mínimo:</strong> {product.stockMinimo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Reposición:</strong> {product.reposicion == 1 ? 'Si' : 'No'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Estado:</strong> {product.estado == 1 ? 'Activo' : 'Inactivo'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Artículo Compra:</strong> {product.articuloCompra ? 'Si' : 'No'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Artículo Inventario:</strong> {product.articuloInventario ? 'Si' : 'No'}</Form.Text></Row>
                </Col>
            </Row>
            }
        </>

    );
};

export default DetailProduct;
