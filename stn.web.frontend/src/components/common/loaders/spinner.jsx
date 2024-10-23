import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'

export const LoadSpinner = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Spinner animation="border" variant="success" />
            </Row>
        </Container>
    )
}
