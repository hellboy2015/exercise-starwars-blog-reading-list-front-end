import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card col-3">
			<img className="card-img-top" src="https://picsum.photos/150/150" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					The planet of {props.name} has a diameter of {props.diameter} and a population of {props.population}
				</p>
				<a href="#" className="btn btn-primary">
					Planet details
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string
};

export default Card;
