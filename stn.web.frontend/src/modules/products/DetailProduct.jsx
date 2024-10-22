import React, { useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { ObtenerProducto } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';

const DetailProduct = ({ IDProducto }) => {
    const [product, setProduct] = React.useState({});
    const { setModalConfirm } = useStnStore();
    useEffect(() => {
        console.log(IDProducto);
        ObtenerProducto(IDProducto).then((data) => {
            if (data.status === 0) {
                console.log(data.data[0]);
                setProduct(data.data[0]);
            } else {
                showError();
            }
        }).catch((e) => {
            showError();
        });
    }, [IDProducto]);

    const showError = () => {
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
        <Row className="justify-content-center mt-4">
                <Col md={6}>                    
                    <Row className='pb-1'><Form.Text><strong>Código:</strong> {product.Codigo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Descripción:</strong> {product.Descripcion}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Tipo:</strong> {product.Tipo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Unidad de Medida:</strong> {product.Unidad}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Marca:</strong> {product.IdMarca !== 0 ? product.DescripcionMarca : 'Sin Elegir'}</Form.Text></Row>
                </Col>
                <Col md={6}>
                    <Row className='pb-1'><Form.Text><strong>Stock Mínimo:</strong> {product.StockMinimo}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Reposición:</strong> {product.Reposicion == 1? 'Si' : 'No'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Estado:</strong> {product.Estado == 1? 'Activo' : 'Inactivo'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Artículo Compra:</strong> {product.ArticuloCompra ? 'Si' : 'No'}</Form.Text></Row>
                    <Row className='pb-1'><Form.Text><strong>Artículo Inventario:</strong> {product.ArticuloInventario ? 'Si' : 'No'}</Form.Text></Row>
                </Col>
        </Row>
    );
};

export default DetailProduct;
