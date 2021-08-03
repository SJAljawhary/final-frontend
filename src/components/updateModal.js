import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Modal } from 'react-bootstrap'

<Modal show={this.props.show}>

    <Modal.Header closeButton onHide={this.props.show}>
        <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form onSubmit={this.props.showUpdateModal}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" defaultValue={this.props.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>image</Form.Label>
                <Form.Control type="text" defaultValue={this.props.imageUrl}  />
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Modal.Body>

</Modal>


