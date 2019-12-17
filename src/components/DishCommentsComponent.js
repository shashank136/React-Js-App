import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishComments extends Component{

	constructor(props){
		super(props);
		this.state = {}
	}

	getComments(dish){
		const comment = dish.comments.map((cmt)=>{
			return(
				<CardText key={cmt.id}>
					{cmt.comment}
					<br/>
					--{cmt.author}
				</CardText>
			);
		});

		return comment;
	}

	render(){
		const dish = this.props.dish;
		if(dish==null)
			return(
				<div></div>
			);
		else{
			return(
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardBody>
							<CardTitle><strong>Comments</strong></CardTitle>
							{this.getComments(dish)}
						</CardBody>
					</Card>
				</div>
			);
		}
	}
}

export default DishComments;