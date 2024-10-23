import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { EditarEquipo, GuardarEquipo, ObtenerEquipo, ObtenerParametros } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';
import { LoadSpinner } from '../../components/common/loaders/spinner';


const NewMachine = forwardRef(({ idMachine }, ref) => {
    const { setModalConfirm, closeModalContent, setLoading } = useStnStore();
    const [errors, setErrors] = useState({});
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
    const [loadingDetail, setLoadingDetail] = useState(true);
    useEffect(() => {
        // Función para obtener todas las listas necesarias
        const fetchData = async () => {
            try {
                const [marcaData, controlTrabajoData, tipoMantenimientoData] = await Promise.all([
                    ObtenerParametros("Marca"),
                    ObtenerParametros("TipoControl"),
                    ObtenerParametros("tipoMantenimiento")
                ]);
                setListMarca(marcaData.data);
                setListControlTrabajo(controlTrabajoData.data);
                setListTipoMantenimiento(tipoMantenimientoData.data);

                if (idMachine) {
                    const machineData = await ObtenerEquipo(idMachine);
                    console.log('machineData', machineData);
                    if (machineData && machineData.status === 0) {
                        const machine = machineData.data;
                        setCodigo(machine.codigo || '');
                        setDescripcion(machine.descripcion || '');
                        setMarca(machine.marca || '');
                        setModelo(machine.modelo || '');
                        setSerie(machine.serie || '');
                        setControlTrabajo(machine.tipoControl || '');
                        setValorRegistro(machine.valor || '');
                        setTipoMantenimiento(machine.tipoMantenimiento || '');
                        setValorActivo(machine.importeMN || '');
                        setObservacion(machine.observaciones || '');
                    }
                }
                setLoadingDetail(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoadingDetail(false);
            }
        };
        fetchData();
    }, [idMachine]);

    useImperativeHandle(ref, () => ({
        GuardarEquipo(listarEquipos) {
            const isValid = validateAllFields();
            if (isValid) {
                const object = objectMachine();
                setLoading(true);
                GuardarEquipo(object).then((data) => {
                    console.log('Equipo guardado:', data);
                    if (data && data.status !== 0) {
                        showModalError();
                    }
                    closeModalContent();
                    listarEquipos();

                })
                    .catch((e) => {
                        closeModalContent();
                        clearForm();
                        showModalError();
                    });
            }
        },
        EditarEquipo(listarEquipos) {
            const isValid = validateAllFields();
            if (isValid) {
                const object = objectMachine();
                setLoading(true);
                EditarEquipo(object).then((data) => {
                    console.log('Producto Editar:', data);
                    if (data && data.status !== 0) {
                        showModalError();
                    }
                    closeModalContent();
                    listarEquipos();
                })
                    .catch((e) => {
                        closeModalContent();
                        clearForm();
                        showModalError();
                    });
            }
        }
    }
    ));

    const objectMachine = () => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        const idUsuario = user.IDUsuario;
        return {
            "IdEquipo": idMachine,
            "IdCompania": 1,
            "Descripcion": descripcion,
            "Marca": marca,
            "Modelo": modelo,
            "Serie": serie,
            "TipoControl": controlTrabajo,
            "Valor": valorRegistro,
            "TipoMantenimiento": tipoMantenimiento,
            "ImporteMN": valorActivo,
            "Observaciones": observacion,
            "Usuario": idUsuario
        }
    }

    const clearForm = () => {
        setCodigo('');
        setDescripcion('');
        setMarca('');
        setModelo('');
        setSerie('');
        setControlTrabajo('');
        setValorRegistro('');
        setTipoMantenimiento('');
        setValorActivo('');
        setObservacion('');
    }

    const showModalError = () => {
        setModalConfirm({
            isOpen: true,
            title: "Error",
            body: "Error al guardar el producto",
            labelClose: 'Cerrar',
            onCancel: () => setModalConfirm({ isOpen: false }),
        });
        setLoading(false);
    }


    // Función para validar los campos del formulario
    const validateField = (name, value) => {
        let error = '';
        if (!value) {
            error = 'Este campo es obligatorio';
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };


    // Función para validar todos los campos del formulario
    const validateAllFields = () => {
        const fields = {
            descripcion,
            modelo,
            serie,
            controlTrabajo,
            valorRegistro,
            tipoMantenimiento,
        };
        let valid = true;
        for (const [name, value] of Object.entries(fields)) {
            validateField(name, value);
            if (!value) {
                valid = false;
            }
        }
        return valid;
    };
    return (
        <Form>
            <Row>
                {loadingDetail && <Container>
                    <Row className="justify-content-center">
                        <LoadSpinner animation="border" variant="success" />
                    </Row>
                </Container>}
                {!loadingDetail && <>
                    {idMachine && <Col lg={6}>
                        <Form.Group className="mb-4">
                            <label className="label text-secondary">Código</label>
                            <Form.Group className="position-relative">
                                <Form.Control
                                    type="text"
                                    className="text-dark ps-5"
                                    value={codigo}
                                    disabled
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
                                    isInvalid={!!errors.descripcion}
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
                                        <option key={index} value={item.id} className="text-dark">
                                            {item.descripcion}
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
                                    isInvalid={!!errors.modelo}
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
                                    isInvalid={!!errors.serie}
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
                                    isInvalid={!!errors.controlTrabajo}
                                >
                                    <option value="-1" >Seleccione Marca</option>
                                    {listControlTrabajo && listControlTrabajo.map((item, index) => (
                                        <option key={index} value={item.id} className="text-dark">
                                            {item.descripcion}
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
                                    isInvalid={!!errors.valorRegistro}
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
                                    isInvalid={!!errors.tipoMantenimiento}
                                >
                                    <option value="-1" >Seleccione Marca</option>
                                    {listTipoMantenimiento && listTipoMantenimiento.map((item, index) => (
                                        <option key={index} value={item.id} className="text-dark">
                                            {item.descripcion}
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
                            <label className="label text-secondary">
                                Observaciones
                            </label>
                            <Form.Group className="position-relative">
                                <textarea
                                    className="form-control ps-5 text-dark"
                                    cols="30"
                                    rows="5"
                                    value={observacion}
                                    onChange={(e) => setObservacion(e.target.value)}
                                ></textarea>
                            </Form.Group>
                        </Form.Group>
                    </Col>
                </>}


            </Row>
        </Form>




    )
})

export default NewMachine