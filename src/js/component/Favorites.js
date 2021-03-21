import React from "react";
import PropTypes from "prop-types";

export const Favorites = () => {
	return (
		<div>
			<a className="dropdown-item" href="#">
				Action
			</a>
		</div>
	);
};

Favorites.propTypes = {
	name: PropTypes.string,
	entityType: PropTypes.string,
	favoriteId: PropTypes.string
};
