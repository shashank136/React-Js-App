import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderComments({ comments }) {
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
		<div className="col-12 col-md-5 m-1">
			<h4> Comments </h4>
			<ul className="list-unstyled">{comment}</ul>
		</div>
	);
}

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<div className="col-12 col-md-5 m-1">
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

const DishDetail = props => {
	const dish = props.dish;
	if (dish == null) {
		return <div></div>;
	}
	return (
		<div className="container">
			<RenderDish dish={dish} />
			<RenderComments comments={dish.comments} />
		</div>
	);
};

export default DishDetail;
