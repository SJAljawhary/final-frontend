import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { Form, Button,Modal } from 'react-bootstrap';

export class UpdateForm extends Component {
    render() {
        return (
            <div>



                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton onClick={this.props.closeModal}>
                        <Modal.Title>Color Modal</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.props.update}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Color Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.title} name="ColorName" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Color Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.imageUrl} name="ColorImage" />
                            </Form.Group>


                            <Button variant="primary" type="submit" >
                                Update
                            </Button>
                        </Form>

                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default withAuth0(UpdateForm);