import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{props.entityType === "character" ? (
				<Link to={"/singlecharacter/" + props.favoriteId.substring(1)} className="dropdown-item">
					{props.name}
				</Link>
			) : (
				<Link to={"/singleplanet/" + props.favoriteId.substring(1)} className="dropdown-item">
					{props.name}
				</Link>
			)}
			<a onClick={() => actions.deleteFavorites(props.idToDelete)}>
				<i className="fas fa-trash" />
			</a>
		</div>
	);
};

Favorites.propTypes = {
	name: PropTypes.string,
	entityType: PropTypes.string,
	favoriteId: PropTypes.string,
	idToDelete: PropTypes.string
};
