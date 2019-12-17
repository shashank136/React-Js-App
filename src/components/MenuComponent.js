import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import SelectedDish from './SelectedDishComponent.js'

class Menu extends Component{

	constructor(props){
		super(props);
		this.state = {
			selectedDish: null
		};
	}

	onDishSelect(dish){
		this.setState({ selectedDish: dish});
	}

	renderDish(dish){
		if(dish != null)
			return (
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
		else
			return (
				<div></div>
			);
	}

	render(){

		const menu = this.props.dishes.map((dish) => {
			return (
				<div  className="col-12 col-md-5 m-1">
	                <Card key={dish.id}
	                  onClick={() => this.onDishSelect(dish)}>
	                  <CardImg width="100%" src={dish.image} alt={dish.name} />
	                  <CardImgOverlay>
	                      <CardTitle>{dish.name}</CardTitle>
	                  </CardImgOverlay>
	                </Card>
	            </div>
			);
		});
		return(
			<div className="container">
	            <div className="row">
	              	{menu}
	            </div>
	            <div className="row">
	            	<div  className="col-12 col-md-5 m-1">
	                	<SelectedDish dish={this.}/>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default Menu;