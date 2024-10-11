import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {
    useAuth
} from '../../hooks/useAuth';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(user, password);
        } catch (error) {
            console.error('Error en login', error);
        }
    };

    return (
        <div className='main-content d-flex flex-column'>
            <div className="auth-main-content m-auto m-1230 px-3">
                <Row className="align-items-center">
                    <Col lg={6} className="d-none d-lg-block">
                        <img
                            src="/images/login.jpg"
                            className="rounded-3"
                            alt="login"
                            width={646}
                            height={804}
                        />
                    </Col>

                    <Col lg={6}>
                        <div className="mw-480 ms-lg-auto">
                            <div className="d-inline-block mb-4">
                                <img
                                    src="/images/logo.svg"
                                    className="rounded-3 for-light-logo"
                                    alt="login"
                                    width={100}
                                    height={26}
                                />
                                <img
                                    src="/images/white-logo.svg"
                                    className="rounded-3 for-dark-logo"
                                    alt="login"
                                    width={100}
                                    height={26}
                                />
                            </div>

                            <h3 className="fs-28 mb-2">Welcome back to Trezo!</h3>
                            <p className="fw-medium fs-16 mb-4">
                                Sign In with social account or enter your details
                            </p>

                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-4">
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        className="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                                        style={{
                                            borderColor: "#D6DAE1",
                                        }}
                                    >
                                        <img
                                            src="/images/google.svg"
                                            alt="google"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-sm-4">
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        className="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                                        style={{
                                            borderColor: "#D6DAE1",
                                        }}
                                    >
                                        <img
                                            src="/images/facebook2.svg"
                                            alt="facebook2"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-sm-4">
                                    <a
                                        href="https://www.apple.com/"
                                        target="_blank"
                                        className="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                                        style={{
                                            borderColor: "#D6DAE1",
                                        }}
                                    >
                                        <img
                                            src="/images/apple.svg"
                                            alt="apple"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                </div>
                            </div>

                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-4">
                                    <label className="label text-secondary">Usuario</label>
                                    <Form.Control
                                        type="text"
                                        className="h-55"
                                        placeholder="Ingrese Usuario"
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <label className="label text-secondary">Contraseña</label>
                                    <Form.Control
                                        type="password"
                                        className="h-55"
                                        placeholder="Ingrese Contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Link to='/authentication/forgot-password/' className="fw-medium text-primary text-decoration-none">
                                        Olvidó la Contraseña?
                                    </Link>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary fw-medium py-2 px-3 w-100"
                                    >
                                        <div className="d-flex align-items-center justify-content-center py-1">
                                            <MaterialSymbol
                                                icon="login"
                                                size={20}
                                                className="text-white me-2"
                                            />
                                            <span>Ingresar</span>
                                        </div>
                                    </button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LoginPage;
