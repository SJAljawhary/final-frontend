import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {Button,Card,Row,Col} from 'react-bootstrap'

export class CardColors extends Component {
    render() {
        return (
            <div>

                <Row xs={1} md={6} className="g-4">
                    {this.props.colors.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>Color Name : {item.title}</Card.Title>
                                </Card.Body>
                               
                                <Button variant="warning" onClick={() => this.props.addToFav(idx)}>Add to favorites</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        )
    }
}

export default withAuth0(CardColors);
