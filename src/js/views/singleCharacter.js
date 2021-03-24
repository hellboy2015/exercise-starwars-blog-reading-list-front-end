import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row justify-content-center">
				<img
					className="col-4 card-img-top singleImg"
					src={"https://picsum.photos/id/" + 352 + "/200/300"}
					alt="Card image cap"
				/>
				<div className="col-3">
					<h1 className=" display-4">{store.characters[params.theid].name}</h1>
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
						{store.characters[params.theid].name}
					</div>
					<div className="col">
						Birth Year:
						<br />
						{store.characters[params.theid].birth_year}
					</div>
					<div className="col">
						Gender:
						<br />
						{store.characters[params.theid].gender}
					</div>
					<div className="col">
						Height:
						<br />
						{store.characters[params.theid].height}
					</div>
					<div className="col">
						Skin Color:
						<br />
						{store.characters[params.theid].skin_color}
					</div>
					<div className="col">
						Eye Color:
						<br />
						{store.characters[params.theid].eye_color}
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

SingleCharacter.propTypes = {
	match: PropTypes.object
};
