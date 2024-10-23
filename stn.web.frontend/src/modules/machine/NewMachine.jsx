import React, { forwardRef, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { ObtenerEquipo } from '../../services/Services';


const NewMachine = forwardRef(({idMachine}, ref) => {
    const [codigo, setCodigo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [serie, setSerie] = useState('');
    const [controlTrabajo, setControlTrabajo] = useState('');
    const [valorRegistro, setValorRegistro] = useState('');
    const [tipoMantenimiento, setTipoMantenimiento] = useState('');
    const [valorActivo, setValorActivo] = useState('');
    const [observacion, setObservacion] = useState('');
    const [listMarca, setListMarca] = useState([]);
    const [listControlTrabajo, setListControlTrabajo] = useState([]);
    const [listTipoMantenimiento, setListTipoMantenimiento] = useState([]);
    useEffect(() => {
        // Función para obtener todas las listas necesarias
        const fetchData = async () => {
            try {
                // const [marcaData, controlTrabajoData, tipoMantenimientoData] = await Promise.all([
                //     ObtenerMarca(),
                //     ObtenerControlTrabajo(),
                //     ObtenerTipoMantenimiento()
                // ]);
                // setListMarca(marcaData.data);
                // setListControlTrabajo(controlTrabajoData.data);
                // setListTipoMantenimiento(tipoMantenimientoData.data);
                if (idMachine) {
                    const machineData = await ObtenerEquipo(idMachine);
                    console.log(machineData);
                    if (machineData && machineData.status === 0) {
                        const machine = machineData.data;
                        setCodigo(machine.codigo || '');
                        setDescripcion(machine.descripcion || '');
                        setMarca(machine.idMarca || '');
                        setModelo(machine.modelo || '');
                        setSerie(machine.serie || '');
                        setControlTrabajo(machine.idControlTrabajo || '');
                        setValorRegistro(machine.valor || '');
                        setTipoMantenimiento(machine.idTipoMantenimiento || '');
                        setValorActivo(machine.importeMN || '');
                        setObservacion(machine.observacion || '');
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [idMachine]);
    return (
        <Form>
            <Row>
                {idMachine && <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Código</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                            <i className="ri-ball-pen-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>
                }
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
                            <i className="ri-store-2-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Marca</label>
                        <Form.Group className="position-relative">
                            <Form.Select
                                className="form-control ps-5 h-55"
                                aria-label="Default select example"
                                value={marca}
                                onChange={(e) => {
                                    setMarca(e.target.value);
                                }}
                            >
                                <option value="-1" >Seleccione Marca</option>
                                {listMarca && listMarca.map((item, index) => (
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
                        <label className="label text-secondary">Modelo</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5"
                                value={modelo}
                                onChange={(e) => setModelo(e.target.value)}
                            />
                            <i className="ri-motorbike-fill position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
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
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                            />
                            <i className="ri-motorbike-fill position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Control Trabajo</label>
                        <Form.Group className="position-relative">
                            <Form.Select
                                className="form-control ps-5 h-55"
                                aria-label="Default select example"
                                value={controlTrabajo}
                                onChange={(e) => {
                                    setControlTrabajo(e.target.value);
                                }}
                            >
                                <option value="-1" >Seleccione Marca</option>
                                {listControlTrabajo && listControlTrabajo.map((item, index) => (
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
                        <label className="label text-secondary">Valor Registro Inicial</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5"
                                value={valorRegistro}
                                onChange={(e) => setValorRegistro(e.target.value)}
                            />
                            <i className="ri-rocket-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Tipo Mantenimiento</label>
                        <Form.Group className="position-relative">
                            <Form.Select
                                className="form-control ps-5 h-55"
                                aria-label="Default select example"
                                value={tipoMantenimiento}
                                onChange={(e) => {
                                    setTipoMantenimiento(e.target.value);
                                }}
                            >
                                <option value="-1" >Seleccione Marca</option>
                                {listTipoMantenimiento && listTipoMantenimiento.map((item, index) => (
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
                        <label className="label text-secondary">Valor Activo S/.</label>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="text"
                                className="text-dark ps-5"
                                value={valorActivo}
                                onChange={(e) => setValorActivo(e.target.value)}
                            />
                            <i className="ri-calendar-todo-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col lg={12}>
                    <Form.Group className="mb-4">
                        <label className="label text-secondary">Observaciones</label>
                        <Form.Group className="position-relative">
                            <textarea
                                className="form-control ps-5 text-dark"
                                placeholder="Some demo text ... "
                                cols="30"
                                rows="5"
                                value={observacion}
                                onChange={(e) => setObservacion(e.target.value)} 
                            ></textarea>
                            <i className="ri-information-line position-absolute top-0 start-0 fs-20 ps-20 pt-2"></i>
                        </Form.Group>
                    </Form.Group>
                </Col>


            </Row>
        </Form>




    )
})

export default NewMachine