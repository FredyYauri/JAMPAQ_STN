import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const HeadBreadCrumb = ({ options, title }) => {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <h3 className="fs-18 mb-4">{title}</h3>
            <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
                <Breadcrumb.Item href="/">
                    <div className="d-flex align-items-center text-decoration-none">
                        <i className="ri-home-4-line fs-18 text-primary me-1"></i>
                        <span className="text-secondary fw-medium hover">Dashboard</span>
                    </div>
                </Breadcrumb.Item>
                {options && options.map((option, index) => {
                    if (option === '') {
                        return null;
                    }
                    return (
                        <Breadcrumb.Item key={index}>
                            <span className="fw-medium">{option}</span>
                        </Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
        </div>

    )
}

export default HeadBreadCrumb;
