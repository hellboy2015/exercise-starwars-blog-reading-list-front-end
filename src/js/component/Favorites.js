import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<a className="dropdown-item" href="#">
				{props.name}
			</a>
			<a onClick={() => actions.deleteFavorites(props.favoriteId)}>
				<i className="fas fa-trash" />
			</a>
		</div>
	);
};

Favorites.propTypes = {
	name: PropTypes.string,
	entityType: PropTypes.string,
	favoriteId: PropTypes.number
};
