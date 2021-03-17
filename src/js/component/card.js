import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card">
			<img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planetName}</h5>
				<p className="card-text">
					The planet of {props.planetName} has a diameter of {props.diameter} and a population of{" "}
					{props.population}
				</p>
				<a href="#" className="btn btn-primary">
					Planet details
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	planetName: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string
};

export default Card;
