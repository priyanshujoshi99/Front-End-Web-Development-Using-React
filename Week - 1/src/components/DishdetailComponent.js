import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {    

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                  <CardImg width='100%' src={dish.image} alt={dish.name} />  
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    

    renderComments(dish){
        if(dish){
            let info={year: 'numeric', month: 'short', day: 'numeric' };
            const comments=this.props.dish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, <span>{new Date(comment.date).toLocaleDateString("en-US", info)}</span></p>
                    </div>
                );
            });
            return(
                <ul className="list-unstyled">
                    <li><h4>Comments</h4></li>
                    <li>{comments}</li>
                </ul>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;