import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

export const NewProduct = ({
    description,
    setDescription,
    unidadMedida,
    setUnidadMedida,
    marca,
    setMarca,
    serie,
    setSerie,
    tipo,
    setTipo,
    stockMinimo,
    setStockMinimo    
}) => {
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
                                <option value="0" className="text-dark">
                                    United Kingdom
                                </option>
                                <option value="1" className="text-dark">
                                    United States
                                </option>
                                <option value="2" className="text-dark">
                                    Canada
                                </option>
                                <option value="3" className="text-dark">
                                    France
                                </option>
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
                                <option value="0" className="text-dark">
                                    California
                                </option>
                                <option value="1" className="text-dark">
                                    United States
                                </option>
                                <option value="2" className="text-dark">
                                    Canada
                                </option>
                                <option value="3" className="text-dark">
                                    France
                                </option>
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
}
