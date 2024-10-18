import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { ObtenerClaseProducto, ObtenerUnidadMedida } from '../../services/Services';

const NewProduct = forwardRef((props, ref) => {
    const [unidadMedidaList, setUnidadMedidaList] = useState([]);
    const [tipoList, setTipoList] = useState([]);
    const [description, setDescription] = useState('');
    const [unidadMedida, setUnidadMedida] = useState('');
    const [marca, setMarca] = useState('');
    const [serie, setSerie] = useState('');
    const [tipo, setTipo] = useState('');
    const [stockMinimo, setStockMinimo] = useState('');
    
    useEffect(() => {
        ObtenerUnidadMedida(1).then((data) => {
            setUnidadMedidaList(data.data);
        });
        ObtenerClaseProducto().then((data) => {
            console.log(data.data);
            setTipoList(data.data);
        });
    }, [])

      // Exponer el método saveProduct al componente padre
  useImperativeHandle(ref, () => ({
    saveProduct() {
      // Lógica para guardar el producto
    //   const validationErrors = validateFields();
    //   if (Object.keys(validationErrors).length > 0) {
    //     setErrors(validationErrors);
    //     return;
    //   }

    //   const productData = {
    //     productName,
    //     price,
    //     description,
    //   };
      console.log('Producto guardado desde el hijo:', description);
      // Aquí puedes agregar la lógica para guardar el producto
    }
  }));

  /// método para validar el formulario
    const validateFields = () => {
        const errors = {};
        if (!description) {
            errors.description = 'La descripción es requerida';
        }
        if (!unidadMedida) {
            errors.unidadMedida = 'La unidad de medida es requerida';
        }
        if (!marca) {
            errors.marca = 'La marca es requerida';
        }
        if (!serie) {
            errors.serie = 'La serie es requerida';
        }
        if (!tipo) {
            errors.tipo = 'El tipo es requerido';
        }
        if (!stockMinimo) {
            errors.stockMinimo = 'El stock mínimo es requerido';
        }
        return errors;
    }

    return (
        <Form>
            <Row>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Descripción</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5 h-55"
                                placeholder="Ingresar Descripción"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <i className="ri-text-snippet position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Unidad de Medida</label>
                        <Form.Group className="position-relative">
                            <Form.Select
                                className="form-control ps-5 h-55"
                                aria-label="Default select example"
                                value={unidadMedida}
                                onChange={(e) => setUnidadMedida(e.target.value)}
                            >
                                <option value="-1" disabled>Seleccione una unidad de medida</option>
                                {unidadMedidaList && unidadMedidaList.map((item, index) => (
                                    <option key={index} value={item.Id} className="text-dark">
                                        {item.Descripcion}
                                    </option>
                                ))}
                            </Form.Select>
                            <i className="ri-dropdown-list position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Marca</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5 h-55"
                                placeholder="Ingresar Marca"
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                            />
                            <i className="ri-text-snippet position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Serie</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5 h-55"
                                placeholder="Ingresar Serie"
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                            />
                            <i className="ri-barcode-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Tipo</label>
                        <Form.Group className="position-relative">
                            <Form.Select
                                className="form-control ps-5 h-55"
                                aria-label="Default select example"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="-1" disabled>Seleccione un tipo de producto</option>
                                {tipoList && tipoList.map((item, index) => (
                                    <option key={index} value={item.Id} className="text-dark">
                                        {item.Descripcion}
                                    </option>
                                ))}
                            </Form.Select>
                            <i className="ri-dropdown-list position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Stock Mínimo</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5 h-55"
                                placeholder="Ingresar Stock Mínimo"
                                value={stockMinimo}
                                onChange={(e) => setStockMinimo(e.target.value)}
                            />
                            <i className="ri-stock-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
})

export default NewProduct;
