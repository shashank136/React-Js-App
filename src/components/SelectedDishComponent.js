import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class SelectedDish extends Component{

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const dish = this.props.dish;
		if(dish==null)
			return(
				<div></div>
			);
		else
			return(
				<div>
					<Card>
						<CardImg top src={dish.image} alt={dish.name} />
	                    <CardBody>
	                      <CardTitle>{dish.name}</CardTitle>
	                      <CardText>{dish.description}</CardText>
	                    </CardBody>
					</Card>
				</div>
			);
	}
}

export default SelectedDish;