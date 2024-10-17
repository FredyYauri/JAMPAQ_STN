import React from 'react'
import {Row,Col}  from 'react-bootstrap';
import Form from "react-bootstrap/Form";


export const NewMachine = (
{
    descripcion,setDescripcion,
    marca,setMarca,
    serie,setSerie,
    modelo,setModelo,
    mantenimiento,setMantenimiento
}

) => {
  return (
    
    <Form>
    <Row>
        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Descripción</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-ball-pen-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>

        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Marca</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-store-2-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>
        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Modelo</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-cloud-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>
        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Serie / Placa</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-motorbike-fill position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>

        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Aplica Mantenimiento</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-rocket-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>

        <Col lg={6}>
            <Form.Group className="mb-4">
                <label className="label text-secondary">Periodo Mantenimiento</label>
                <Form.Group className="position-relative">
                    <Form.Control
                        type="text"
                        className="text-dark ps-5"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <i className="ri-calendar-todo-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                </Form.Group>
            </Form.Group>
        </Col>


    </Row>
</Form>




  )
}
