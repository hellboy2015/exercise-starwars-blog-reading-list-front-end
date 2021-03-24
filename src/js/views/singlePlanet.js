import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row justify-content-center">
				<img
					className="col-4 card-img-top singleImg"
					src={"https://picsum.photos/id/" + 10 + "/200/300"}
					alt="Card image cap"
				/>
				<div className="col-3">
					<h1 className=" display-4">{store.planets[params.theid].name}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis, tenetur vitae magnam
						accusamus recusandae molestiae labore doloribus laudantium, neque quibusdam sit autem
						accusantium officia aliquid deleniti fugit tempore. Dolore.
					</p>
				</div>
			</div>

			<hr className="my-4" />

			<div className="container mb-5">
				<div className="row">
					<div className="col">
						Name:
						<br />
						{store.planets[params.theid].name}
					</div>
					<div className="col">
						Climate:
						<br />
						{store.planets[params.theid].climate}
					</div>
					<div className="col">
						Population:
						<br />
						{store.planets[params.theid].population}
					</div>
					<div className="col">
						Orbital Period:
						<br />
						{store.planets[params.theid].orbital_period}
					</div>
					<div className="col">
						Rotation Period:
						<br />
						{store.planets[params.theid].rotation_period}
					</div>
					<div className="col">
						Diameter:
						<br />
						{store.planets[params.theid].diameter}
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
