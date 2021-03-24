import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./Favorites.js";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/">
				<i className="h1 fab fa-jedi-order" />
			</Link>
			<div className="dropdown ml-auto">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{console.log(store.favorites)}

					{store.favorites.map((favorite, index) => (
						<Favorites
							key={index}
							name={favorite.name}
							entityType={favorite.entityType}
							favoriteId={favorite.id}
						/>
					))}
				</div>
			</div>
		</nav>
	);
};
