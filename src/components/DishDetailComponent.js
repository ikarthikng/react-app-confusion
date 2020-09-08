import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
      super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card className="col-12 col-md-5 m-1">
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if(dish != null){
            console.log('render comments...');
            if(dish.comments != null){
                if (dish.comments.length !== 0) {
                    return (
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {dish.comments.map(comment => (
                                <ul className="list-unstyled">
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </ul>
                            )
                            )}
                        </div>
                    );
                } else {
                    return (
                        <div></div>
                    );
                }
            }
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )

    }
}

export default DishDetail;