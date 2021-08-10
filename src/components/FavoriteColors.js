import React, { Component } from 'react';
import {Card,Row,Col,Button} from 'react-bootstrap'

export class FavouritCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={5} className="g-4">
                    {this.props.fav.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Text>
                                       Color Name :{item.title}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="danger" onClick={() => this.props.update(idx)}>Update Color</Button>
                                <Button variant="warning" onClick={() => this.props.delete(idx)}>Delete Color</Button>
                            </Card>
                        </Col>
                    ))}
                </Row> 

            </div>
        )
    }
}

export default FavouritCard;