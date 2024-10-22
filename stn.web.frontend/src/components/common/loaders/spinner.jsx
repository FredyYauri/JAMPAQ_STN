import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Spinner = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Spinner animation="border" variant="success" />
            </Row>
        </Container>
    )
}
