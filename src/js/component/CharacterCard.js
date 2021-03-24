import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card col-3">
			<img
				className="card-img-top singleImg"
				src={"https://picsum.photos/id/" + (props.imageId + 10) + "/200/300"}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair Color: {props.hairColor}</p>
				<p className="card-text">Eye-Color: {props.eyeColor}</p>
				<Link to={"/singlecharacter/" + props.characterId} className="btn btn-primary mr-2">
					Character details
				</Link>
				<a
					href="#"
					onClick={() => actions.addFavorites(props.name, props.characterId, props.entityType)}
					className="btn btn-outline-warning">
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
	imageId: PropTypes.number,
	characterId: PropTypes.number,
	entityType: PropTypes.string
};

export default CharacterCard;