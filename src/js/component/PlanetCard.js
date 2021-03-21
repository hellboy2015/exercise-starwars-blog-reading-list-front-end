import React from "react";
import PropTypes from "prop-types";

const PlanetCard = props => {
	return (
		<div className="card col-3">
			<img
				className="card-img-top"
				src={"https://picsum.photos/id/" + (props.imageId + 1) + "/200/300"}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population: {props.population}</p>
				<p className="card-text">Terrain: {props.terrain}</p>
				<a href="#" className="btn btn-primary mr-2">
					Planet details
				</a>
				<a href="#" className="btn btn-outline-warning">
					&#x2661;
				</a>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	imageId: PropTypes.number
};

export default PlanetCard;
