import React from "react";
import PropTypes from "prop-types";

const CharacterCard = props => {
	return (
		<div className="card col-3">
			<img
				className="card-img-top"
				src={"https://picsum.photos/id/" + (props.imageId + 10) + "/200/300"}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair Color: {props.hairColor}</p>
				<p className="card-text">Eye-Color: {props.eyeColor}</p>
				<a href="#" className="btn btn-primary mr-2">
					Character details
				</a>
				<a href="#" className="btn btn-outline-warning">
					&#x2661;
				</a>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	imageId: PropTypes.number
};

export default CharacterCard;
