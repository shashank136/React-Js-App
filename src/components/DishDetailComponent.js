import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Label } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';



function RenderComments({ comments }) {

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const handleSubmit =(values) =>{
		console.log('Current State is: ' + JSON.stringify(values));
	    alert('Current State is: ' + JSON.stringify(values));
	    toggle();
	}

	if (comments == null) {
		return <div></div>;
	}
	const comment = comments.map(cmt => {
		return (
			<li key={cmt.id}>
				<p>{cmt.comment}</p>
				<p>
					-- {cmt.author}, &nbsp;
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "long",
						day: "2-digit"
					}).format(new Date(cmt.date))}
				</p>
			</li>
		);
	});
	return (
		<div >
			<h4> Comments </h4>
			<ul className="list-unstyled">{comment}</ul>
			<Button outline onClick={toggle}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
			<Modal isOpen={modal} toggle={toggle}>
	        	<ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
	        	<ModalBody>
	        		<LocalForm onSubmit={(values) => handleSubmit(values)}>
	        			<Row className="form-group">
	        				<Label htmlFor="Rating">Rating</Label>
	        				<Control.select model=".rating" name="rating" className="form-control">
	        					<option>1</option>
	        					<option>2</option>
	        					<option>3</option>
	        					<option>4</option>
	        					<option>5</option>
	        				</Control.select>
	        			</Row>
	        			<Row className="form-group">
	        				<Label htmlFor="yourname">Your Name</Label>
	        				<Control.text model=".yourname" name="yourname" id="yourname" className="form-control"
	        				placeholder="Your Name" />
	        			</Row>
	        			<Row className="form-group">
	        				<Label htmlFor="comment">Comment</Label>
	        				<Control.text model=".comment" name="comment" id="comment" className="form-control"
	        				placeholder="Comment" row="12"/>
	        			</Row>
	        			<Row className="form-group">
	        				<Button type="submit" value="submit" color="primary">Submit</Button>
	        			</Row>
	        		</LocalForm>
	        	</ModalBody>
        	</Modal>
		</div>
	);
}

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<div >
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	} else {
		return <div></div>;
	}
}

const DishDetail = (props) => {
	const dish = props.dish;
	

	if (dish == null) {
		return <div></div>;
	}

	

	return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        
        </div>
    );
};

export default DishDetail;
