import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class SelectedDish extends Component{

	constructor(props){
		super(props);
		this.state = {
			selectedDish : this.props.dish
		}
	}

	render(){
		const dish = selectedDish;
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