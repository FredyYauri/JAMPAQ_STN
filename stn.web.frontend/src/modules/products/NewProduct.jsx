import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { EditarProducto, GuardarProducto, ObtenerClaseProducto, ObtenerMarca, ObtenerProducto, ObtenerUnidadMedida } from '../../services/Services';
import { useStnStore } from '../../stores/useStateStore';

const NewProduct = forwardRef(({ idProduct }, ref) => {
    const [unidadMedidaList, setUnidadMedidaList] = useState([]);
    const [listTipo, setListTipo] = useState([]);
    const [listMarca, setListMarca] = useState([]);
    const [description, setDescription] = useState('');
    const [unidadMedida, setUnidadMedida] = useState('');
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');
    const [stockMinimo, setStockMinimo] = useState(0);
    const [inventario, setInventario] = useState(false);
    const [compra, setCompra] = useState(false);
    const [errors, setErrors] = useState({});
    const [codigo, setCodigo] = useState('');
    const [estado, setEstado] = useState(true);
    const { setModalConfirm, closeModalContent } = useStnStore();
    const [validated, setValidated] = useState(false);
    const [loadingDetail, setLoadingDetail] = useState(true);

    useEffect(() => {
        // Función para obtener todas las listas necesarias
        const fetchData = async () => {
            try {
                const [unidadMedidaData, claseProductoData, marcaData] = await Promise.all([
                    ObtenerUnidadMedida(1),
                    ObtenerClaseProducto(),
                    ObtenerMarca()
                ]);
                
                setUnidadMedidaList(unidadMedidaData.data);
                setListTipo(claseProductoData.data);
                setListMarca(marcaData.data);

                if (idProduct) {
                    const productoData = await ObtenerProducto(idProduct);
                    if (productoData && productoData.status === 0) {
                        const product = productoData.data;
                        setDescription(product.descripcion || '');
                        setCodigo(product.codigo || '');
                        setUnidadMedida(product.idUnidadMedida || '');
                        setMarca(product.idMarca || '');
                        setTipo(product.idTipo || '');
                        setStockMinimo(product.stockMinimo || 0);
                        setEstado(product.estado == 0 ? false : true);
                        setInventario(product.articuloInventario || false);
                        setCompra(product.articuloCompra || false);
                    }
                }
                setLoadingDetail(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoadingDetail(false);
            }
        };

        fetchData();
    }, [idProduct])

    // Exponer el método saveProduct al componente padre
    useImperativeHandle(ref, () => ({
        saveProduct(listarProducts) {
            const user = JSON.parse(sessionStorage.getItem("user"));
            const idUsuario = user.IDUsuario;
            const isValid = validateAllFields();
            if (isValid) {
                const product = {
                    "IdCompania": 1,
                    "DescripcionProducto": description,
                    "IdUnidadMedida": unidadMedida,
                    "IdMarca": marca,
                    "IdTipo": tipo,
                    "StockMinimo": stockMinimo ?? 0,
                    "ArticuloInventario": inventario,
                    "ArticuloCompra": compra,
                    "Usuario": idUsuario
                }
                console.log('input guardado:', product);
                GuardarProducto(product).then((data) => {
                    console.log('Producto guardado:', data);
                    if (data && data.status !== 0) {
                        setModalConfirm({
                            isOpen: true,
                            title: 'Error',
                            body: 'Error al guardar el producto',
                            labelClose: 'Cerrar',
                            onCancel: () => setModalConfirm({ isOpen: false }),
                        })
                    }
                    closeModalContent();
                    listarProducts();

                })
                    .catch((e) => {
                        closeModalContent();
                        setDescription('');
                        setUnidadMedida('');
                        setMarca('');
                        setTipo('');
                        setStockMinimo(0);
                        setInventario(false);
                        setCompra(false);
                        setModalConfirm({
                            isOpen: true,
                            title: "Error",
                            body: "Error al guardar el producto",
                            labelClose: 'Cerrar',
                            onCancel: () => setModalConfirm({ isOpen: false }),
                        })
                    });
            }
        },
        editProduct(listarProducts) {
            const user = JSON.parse(sessionStorage.getItem("user"));
            const idUsuario = user.IDUsuario;
            const isValid = validateAllFields();
            if (isValid) {
                const product = {
                    "IdProducto": idProduct,
                    "IdCompania": 1,
                    "DescripcionProducto": description,
                    "IdUnidadMedida": unidadMedida,
                    "IdMarca": marca,
                    "IdTipo": tipo,
                    "StockMinimo": stockMinimo ?? 0,
                    "ArticuloInventario": inventario,
                    "ArticuloCompra": compra,
                    "Usuario": idUsuario,
                    "estado": estado,
                }
                EditarProducto(product).then((data) => {
                    console.log('Producto Editar:', data.status);
                    if (data && data.status !== 0) {
                        setModalConfirm({
                            isOpen: true,
                            title: 'Error',
                            body: 'Error al guardar el producto',
                            labelClose: 'Cerrar',
                            onCancel: () => setModalConfirm({ isOpen: false }),
                        })
                    }
                    closeModalContent();
                    listarProducts();
                })
                    .catch((e) => {
                        console.log('Error:', e);
                        closeModalContent();
                        setDescription('');
                        setUnidadMedida('');
                        setMarca('');
                        setTipo('');
                        setStockMinimo(0);
                        setInventario(false);
                        setCompra(false);
                        setModalConfirm({
                            isOpen: true,
                            title: "Error",
                            body: "Error al guardar el producto",
                            labelClose: 'Cerrar',
                            onCancel: () => setModalConfirm({ isOpen: false }),
                        })
                    });
            }
        }
    }));

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
            description,
            unidadMedida,
            tipo
        };

        let valid = true;
        for (const [name, value] of Object.entries(fields)) {
            validateField(name, value);
            if (!value) {
                valid = false;
            }
        }
        setValidated(true);
        return valid;
    };

    return (
        <Form >
            <Row>
                {loadingDetail && <Container>
                    <Row className="justify-content-center">
                        <Spinner animation="border" variant="success" />
                    </Row>
                </Container>}

                {!loadingDetail && <>
                    {idProduct && <Col lg={6}>
                        <Form.Group className="mb-4">
                            <label className="label text-secondary">Código:</label>
                            <Form.Group className="position-relative">
                                <Form.Control
                                    disabled
                                    required
                                    type="text"
                                    className="text-dark ps-5 h-55"
                                    placeholder="Ingresar Descripción"
                                    value={codigo}
                                />
                                <i className="ri-text-snippet position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                            </Form.Group>
                        </Form.Group>
                    </Col>}
                    <Col lg={6}>
                        <Form.Group className="mb-4">
                            <label className="label text-secondary">Descripción</label>
                            <Form.Group className="position-relative">
                                <Form.Control
                                    required
                                    type="text"
                                    className="text-dark ps-5 h-55"
                                    placeholder="Ingresar Descripción"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                        validateField('description', e.target.value)
                                    }}
                                    isInvalid={!!errors.description}
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
                                    required
                                    className="form-control ps-5 h-55"
                                    aria-label="Default select example"
                                    value={unidadMedida}
                                    onChange={(e) => {
                                        setUnidadMedida(e.target.value);
                                        validateField('unidadMedida', e.target.value);
                                    }}
                                    isInvalid={!!errors.unidadMedida}
                                >
                                    <option value="-1">Seleccione una unidad de medida</option>
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
                            <label className="label text-secondary">Tipo</label>
                            <Form.Group className="position-relative">
                                <Form.Select
                                    required
                                    className="form-control ps-5 h-55"
                                    aria-label="Default select example"
                                    value={tipo}
                                    onChange={(e) => {
                                        setTipo(e.target.value);
                                        validateField('tipo', e.target.value);
                                    }}
                                    isInvalid={!!errors.tipo}
                                >
                                    <option value="-1" >Seleccione un tipo de producto</option>
                                    {listTipo && listTipo.map((item, index) => (
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
                            <label className="label text-secondary">Stock Mínimo</label>
                            <Form.Group className="position-relative">
                                <Form.Control
                                    required
                                    type="text"
                                    className="text-dark ps-5 h-55"
                                    placeholder="Ingresar Stock Mínimo"
                                    value={stockMinimo}
                                    onChange={(e) => {
                                        setStockMinimo(e.target.value);
                                        validateField('stockMinimo', e.target.value);
                                    }}
                                    isInvalid={!!errors.stockMinimo}
                                />
                                <i className="ri-stock-line position-absolute top-50 start-0 translate-middle-y fs-20 ps-20"></i>
                            </Form.Group>
                        </Form.Group>
                    </Col>
                    {idProduct && <Col lg={6}>
                        <Form.Group className="mb-4">
                            <Form.Group className="position-relative">
                                <Form.Check
                                    type="switch"
                                    label={estado ? 'Activo' : 'Inactivo'}
                                    checked={estado}
                                    onChange={(e) => setEstado(!estado)}
                                />
                            </Form.Group>
                        </Form.Group>
                    </Col>}
                    <Col lg={6}>
                        <Form.Group className="mb-2 mt-1">
                            <Form.Group className="position-relative">
                                <Form.Check
                                    required
                                    label="Artículo Inventario"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                    checked={inventario}
                                    onChange={(e) => setInventario(e.target.checked)}
                                />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Group className="position-relative">
                                <Form.Check
                                    required
                                    label="Artículo Compra"
                                    checked={compra}
                                    onChange={(e) => setCompra(e.target.checked)}
                                />

                            </Form.Group>
                        </Form.Group>
                    </Col>
                </>}
            </Row>
        </Form>
    )
})

export default NewProduct;
