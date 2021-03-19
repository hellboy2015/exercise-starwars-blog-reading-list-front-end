import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="scrolling-wrapper row">
				{store.planets.map((planet, index) => (
					<Card key={index} name={planet.name} diameter={planet.diameter} population={planet.population} />
				))}
			</div>
			<div className="scrolling-wrapper row">
				{store.characters.map((character, index) => (
					<Card
						key={index}
						name={character.name}
						diameter={character.gender}
						population={character.hair_color}
					/>
				))}
			</div>
		</div>
	);
};
